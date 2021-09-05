import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useComercioPresenter } from '../../presenter/comerciosPresenter'
import Typography from '@material-ui/core/Typography'

export const Comercio = () => {

    //Hooks
    const {id} =  useParams()
    const {traerComercioPorId} = useComercioPresenter()

    //Estados
    const [comercio, setComercio] = useState({})

    //al cargar el componente se trae el comercio por id
    useEffect(() => {
        traerComercioPorId(id).then(data => setComercio(data)).catch(err => console.error(err))
    }, [])

    useEffect(()=>{
        if(comercio){
            console.log(comercio)
        }
    }, [comercio])

    return (
        <Fragment>
            <Typography variant="h4" color="initial">
                {comercio ?
                 comercio.nombre
                : "asd"
                }
            </Typography>
        </Fragment>
    )
}
