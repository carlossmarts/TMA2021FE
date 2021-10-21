import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePedidosPresenter } from '../../presenter/pedidosPresenter'
import Typography from '@material-ui/core/Typography'
import CardPedido from '../../components/CardPedido'
import { LinearProgress, Grid, Box } from '@material-ui/core';
import CardLocalDetallado from '../../components/CardLocalDetallado'
import { useComercioPresenter } from '../../presenter/comerciosPresenter'
import { SettingsRemoteOutlined } from '@material-ui/icons'

const Pedido = (props) => {

    const {setUrl} = props

    //Hooks
    const { id } = useParams()
    const { traerPedidoPorId } = usePedidosPresenter();
    const { traerComercioPorId } = useComercioPresenter()

    //Estados
    const [cargando, setCargando] = useState(true);
    const [pedido, setPedido] = useState({})
    const [comercio, setComercio] = useState({})


    //al cargar el componente se trae el comercio por id
    useEffect(() => {
        traerPedidoPorId(id).then(data => {
            setPedido(data)
            traerComercioPorId(data.idComercio)
                .then(data => {
                    setCargando(false)
                    setComercio(data)
                }).catch(err => console.error(err))
        }).catch(err => console.error(err))
    }, [])

    useEffect(() => {
        traerComercioPorId(id).then(data => setComercio(data)).catch(err => console.error(err))
        setUrl(window.location.href)
    }, [])
    //console.log(comercio);

    // useEffect(() => {
    //     if (id !== 8) {
    //         traerComidasPorComercio(id).then((data) => {
    //             setComidas(data)
    //             setCargando(false)
    //         }).catch(err => console.log(err))
    //     }
    // }, [id])

    useEffect(() => {
        if (pedido) {
            console.log(pedido)
        }
    }, [pedido])

    // useEffect(() => {
    //     console.log("COMIDAS: " + JSON.stringify(comidas))
    // }, [comidas])

    return (
        <div>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="left"
            >
                {
                    cargando ?
                        <LinearProgress />
                        :
                        <CardPedido pedido={pedido} setPedido={setPedido} local={comercio} />
                }

            </Grid>
        </div >
    )
}

export default Pedido;