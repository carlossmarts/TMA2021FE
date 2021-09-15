import React, { useState, useEffect, Fragment } from 'react'
import { FormLocal } from '../../components/FormLocal';
import { TextField, Grid, LinearProgress, Button } from '@material-ui/core';

import { useComercioPresenter } from '../../presenter/comerciosPresenter'



const GestionComercio = () => {
    const { actualizarComercio, traerComercioPorIdDeUsuario } = useComercioPresenter();
    const [comercio, setComercio] = useState({})
    const [cargando, setCargando] = useState(true);

    //al cargar el componente se trae el comercio por id
    useEffect(() => {
        traerComercioPorIdDeUsuario(1).then((data) => {
            setComercio(data)
            setCargando(false)
        }
        ).catch(err => console.error(err))
    }, [])

    useEffect(() => {
        if (comercio) {
            console.log(comercio)
        }
    }, [comercio])

    const [usuario, setUsuario] = useState("");


    return (
        <>
            {cargando
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
    )
}

export default GestionComercio;