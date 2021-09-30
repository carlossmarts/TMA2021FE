import React, { useState, useEffect, Fragment } from 'react'
import { FormLocal } from '../../components/FormLocal';
import { TextField, Grid, LinearProgress, Button, Typography, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab'

import { useHistory, useLocation } from 'react-router'

import { useComercioPresenter } from '../../presenter/comerciosPresenter'
import { useLocalidadPresenter } from '../../presenter/localidadesPresenter';
import { useComidaPresenter } from '../../presenter/comidasPresenter'
import { DataGrid } from '@material-ui/data-grid';
import TablaProductos from '../../components/TablaProductos';

import { makeStyles } from '@material-ui/styles';
import { Estilos } from '../../style/estilos';


const useStyles = makeStyles((theme) => Estilos(theme));


const GestionComercio = () => {

    const classes = useStyles()
    
    //******************** 
    // Estados
    //********************
    
    
    const { actualizarComercio, traerComercioPorIdDeUsuario } = useComercioPresenter();
    const { localidades, setLocalidades, traerLocalidades } = useLocalidadPresenter();
    const {comidas, setComidas, traerComidasPorComercio, eliminarComidas} = useComidaPresenter();
    
    const [comercio, setComercio] = useState({})
    const [idUser, setIdUser] = useState(0);
    const [productos, setProductos] = useState([])
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
            localStorage.setItem("idUsuario", location.state.idUsuario)
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

                const prods = await traerComidasPorComercio(com.idComercio);
                setProductos(prods)

                setCargando(false)
            } catch (error) {
                console.error(error)
            }
        }
    }

    const openModalProd = ()=>{
        alert("abrir modal nuevo prod")
    }


    return (
        <>
            {
                !location.state
                ?
                <Grid  container spacing={1}  justifyContent="center" alignItems="center" >
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

                            <TablaProductos productos={productos} openModalProd={openModalProd} eliminarProductos={eliminarComidas} />
                    </>

                }

                
                </>
            }
        </>
    )
}

export default GestionComercio;