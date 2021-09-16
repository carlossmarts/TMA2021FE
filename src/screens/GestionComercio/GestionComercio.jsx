import React, { useState, useEffect, Fragment } from 'react'
import { FormLocal } from '../../components/FormLocal';
import { TextField, Grid, LinearProgress, Button, Typography, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab'

import { useComercioPresenter } from '../../presenter/comerciosPresenter'
import { useLocalidadPresenter } from '../../presenter/localidadesPresenter';



const GestionComercio = () => {


    const { actualizarComercio, traerComercioPorIdDeUsuario } = useComercioPresenter();
    const { localidades, setLocalidades, traerLocalidades } = useLocalidadPresenter();
    
    const [comercio, setComercio] = useState({})
    const [cargando, setCargando] = useState(true);

    //al cargar el componente se trae el comercio por id y  la lista de localidades
    useEffect(() => {
        cargarData()
    }, [])

    useEffect(() => {
        if (comercio) {
            console.log("Comercio: ", comercio)
        }
    }, [comercio])


    const cargarData = async ()=>{
        const idUser = localStorage.getItem("idUsuario")
        console.log("GestionComercio - idUsuario recuperado de localStorage", idUser)
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
                !comercio
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