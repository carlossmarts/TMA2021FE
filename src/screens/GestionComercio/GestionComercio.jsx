import React, { useState, useEffect, Fragment } from 'react'
import { FormLocal } from '../../components/FormLocal';
import { TextField, Grid, LinearProgress, Button, Typography, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab'

import { useHistory, useLocation } from 'react-router'

import { useComercioPresenter } from '../../presenter/comerciosPresenter'
import { useLocalidadPresenter } from '../../presenter/localidadesPresenter';



const GestionComercio = () => {

    
    //******************** 
    // Estados
    //********************
    
    
    const { actualizarComercio, traerComercioPorIdDeUsuario } = useComercioPresenter();
    const { localidades, setLocalidades, traerLocalidades } = useLocalidadPresenter();
    
    const [comercio, setComercio] = useState({})
    const [idUser, setIdUser] = useState(0);

    const [cargando, setCargando] = useState(true);
    
    //******************** 
    // Hooks
    //********************
    const history = useHistory();

    const location = useLocation();
    
    //al cargar el componente se trae el comercio por id y  la lista de localidades
    useEffect(() => {
        if(location.state){
            setIdUser(location.state.idUsuario);
       }
        
    }, [])

    useEffect(()=>{
        if(idUser !== 0){
            cargarData()
        }
    }, [idUser])

    useEffect(() => {
        if (comercio) {
            console.log("Comercio: ", comercio)
        }
    }, [comercio])
    
    
    const cargarData = async ()=>{
        
        

        console.log("GestionComercio - idUsuario recuperado", idUser)
        if(idUser !== 0){
            try {
                const com = await traerComercioPorIdDeUsuario(idUser)
                setComercio(com)

                const locs = await traerLocalidades()
                setLocalidades(locs)

                setCargando(false)
            } catch (error) {
                console.error(error)
            }
        }
    }


    return (
        <>
            {
                !location.state
                ?
                <Grid  container spacing={1}  justify="center" alignItems="center" >
                    <Box display="flex" justifyContent="conter">
                        <Alert severity="warning">Aun no estas logueado!</Alert>
                    </Box>
                </Grid>
                :
                <>
                {
                    cargando
                    ?
                    <Grid container
                        direction="column"
                        alignItems="center" >
                        <LinearProgress />
                    </Grid>
                    :
                    <>

                        <FormLocal actualizarComercio={actualizarComercio} localContent={comercio} />
                    </>

                }
                </>
            }
        </>
    )
}

export default GestionComercio;