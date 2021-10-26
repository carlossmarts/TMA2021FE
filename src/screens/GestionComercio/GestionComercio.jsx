import React, { useState, useEffect, Fragment } from 'react'
import { FormLocal } from '../../components/FormLocal';
import { TextField, Grid, LinearProgress, Button, Typography, Box, Paper, IconButton} from '@material-ui/core';
import { Alert } from '@material-ui/lab'
import {Cancel} from '@material-ui/icons'

import { useHistory, useLocation } from 'react-router'

import { useComercioPresenter } from '../../presenter/comerciosPresenter'
import { useLocalidadPresenter } from '../../presenter/localidadesPresenter';
import { useComidaPresenter } from '../../presenter/comidasPresenter'
import { useCategoriasPresenter } from '../../presenter/categoriasPresenter';

import { DataGrid } from '@material-ui/data-grid';
import TablaProductos from '../../components/TablaProductos';
import ModalProducto from '../../components/ModalProducto';

import { makeStyles } from '@material-ui/styles';
import { Estilos } from '../../style/estilos';
import { usePedidosPresenter } from '../../presenter/pedidosPresenter';


const useStyles = makeStyles((theme) => Estilos(theme));


const GestionComercio = () => {

    const classes = useStyles()

    //******************** 
    // Estados
    //********************


    const { actualizarComercio, traerComercioPorIdDeUsuario } = useComercioPresenter();
    const { localidades, setLocalidades, traerLocalidades } = useLocalidadPresenter();
    const { comidas, setComidas, traerComidasPorComercio, eliminarComidas, crearComidas, editarComidas } = useComidaPresenter();
    const { categorias, setCategorias, traerCategorias } = useCategoriasPresenter();
    const { pedidos, setPedidos, traerPedidosPorIdComercio } = usePedidosPresenter();

    const [comercio, setComercio] = useState({})
    const [idUser, setIdUser] = useState(0);
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true);


    //******************** 
    // Hooks
    //********************
    const location = useLocation();


    //al cargar el componente se trae el comercio por id y  la lista de localidades
    useEffect(() => {
        if (location.state) {
            setIdUser(location.state.idUsuario);
            localStorage.setItem("idUsuario", location.state.idUsuario)
        }

    }, [])

    useEffect(() => {
        if (idUser !== 0) {
            cargarData()
        }
    }, [idUser])

    useEffect(() => {
        if (comercio) {
            console.log("Comercio: ", comercio)
            localStorage.setItem("idTienda", comercio.idComercio)
        }
    }, [comercio])


    const cargarData = async () => {
        console.log("GestionComercio - idUsuario recuperado", idUser)
        if (idUser !== 0) {
            try {
                const com = await traerComercioPorIdDeUsuario(idUser)
                setComercio(com)

                const locs = await traerLocalidades()
                setLocalidades(locs)

                const prods = await traerComidasPorComercio(com.idComercio);
                setProductos(prods)

                const cats = await traerCategorias();
                setCategorias(cats)

                const pedidos = await traerPedidosPorIdComercio(com.idComercio);
                setPedidos(pedidos)

                setCargando(false)
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <>
            <Grid container>

                {/* INFO Y PRODUCTOS */}
                <Grid item container sm={8} xs={12}>
                    {
                        !location.state
                            ?
                            <Grid container spacing={1} justifyContent="center" alignItems="center" >
                                <Box display="flex" justifyContent="conter">
                                    <Alert severity="warning">Aun no estas logueado!</Alert>
                                </Box>
                            </Grid>
                            :
                            <>
                                {
                                    cargando
                                        ?
                                        <Grid item container
                                            direction="column"
                                            alignItems="center" >
                                            <LinearProgress />
                                        </Grid>
                                        :
                                        <Grid item container direction="column" justifyContent="flex-start"> 
                                            <FormLocal actualizarComercio={actualizarComercio} localContent={comercio} categorias={categorias} />
                                            <TablaProductos productos={productos} crearProducto={crearComidas} editarProductos={editarComidas} eliminarProductos={eliminarComidas} />
                                        </Grid>

                                }
                            </>
                    }
                </Grid>


                <Grid item container sm={4} xs={12}>
                    {/* Pedidos */}
                    <Box height="100%" width="95%" mt={5}>
                        {
                            pedidos.map(p => {
                                return <Pedido key={p.idPedido} pedido={p}/>
                            })
                        }
                    </Box>
                </Grid>

            </Grid>


        </>
    )
}

export default GestionComercio;

const Pedido = ({pedido})=>{

    const [items, setItems] = useState([])
    const [comentario, setComentario] = useState("")
    const [precio, setPrecio] = useState("")

    useEffect(() => {
        /*str = Hola, vi tu menu en PedidosYa y quiero hacer el siguiente pedido: 
                Mega Classic Not Burger (1 x $201.00) 
                Mega Deluxe Not Burger (1 x $555.00) 
                *Total:* $845.*/

        
        console.log(pedido)
        const strSplit = pedido.descripcion.split("\n")
        const items = strSplit.slice(1, strSplit.length -2) 
        const comentario = strSplit[strSplit.length-2]
        const precio = strSplit[strSplit.length-1]
        setItems(items)
        setComentario(comentario? comentario.replace("*Comentarios:*", "").replace("\n", "").replace("\r","") : "")
        setPrecio(precio? precio.replace ("*Total:*", "").replace("\n", "").replace("\r",""): "")
    }, [])



    return(
        <>
            <Box m={1}>
                <Paper>
                    <Box p={2}>
                        <Grid item container xs={12} justifyContent="flex-end">
                            <IconButton onClick={()=>{alert("pedido resuelto")}}>
                                <Cancel fontSize="small"/>
                            </IconButton>
                        </Grid>
                        <Grid item container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="body2" color="initial">{`ID: ${pedido.idPedido}`}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" color="initial">Direccion</Typography>
                                <Typography variant="caption" color="initial">{pedido.direccion}`</Typography>
                                <Box m={1}/>
                                <Typography variant="body2" color="initial">Items:</Typography>
                                {
                                    items.map(item =>{
                                        return (<Typography variant ="caption">{`* ${item}`}</Typography>)
                                    })
                                }
                                
                                <Box m={1}/>
                                <Typography variant="body2" color="initial">Comentarios:</Typography>
                                <Typography variant="caption" color="initial">{comentario}</Typography>
                                <Box m={1}/>
                                <Typography variant="body2" color="initial">Precio:</Typography>
                                <Typography variant="caption" color="initial">{precio}</Typography>

                            </Grid>                            
                        </Grid>
                    </Box>
                </Paper> 
            </Box>
        </>
    )
}