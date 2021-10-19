import { DataGrid } from '@material-ui/data-grid'
import { Container, Box, Button, IconButton } from '@material-ui/core'
import ModalProducto from './ModalProducto';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState, useEffect } from 'react'

const TablaProductos = (props) => {

    const {
        productos,
        crearProducto,
        eliminarProductos,
        editarProductos
    } = props


    const [open, setOpen] = useState(false);
    const [openEdicion, setOpenEdicion] = useState(false);
    const [producto, setProducto] = useState(productos[0]);
    const [esEdicion, setEsEdicion] = useState(false);

    useEffect(() => {
        console.log(JSON.stringify(producto) +
            "UPDATEADO")
    }, [producto])

    const openModalProd = () => {
        setEsEdicion(false)
        setOpen(true);
    };

    const renderDetailsButton = (params) => {
        return (
            <>
                <IconButton
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        if (window.confirm('¿Estas seguro de que querés eliminar al producto?')) {
                            eliminarProductos(params.row.idProducto).then((res) => { if (res === 204) window.location.reload() })
                        }
                    }}
                >
                    <DeleteIcon />
                </IconButton>
                <IconButton
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        setEsEdicion(true)
                        setOpenEdicion(true);
                        setProducto(params.row)
                    }}
                >
                    <EditIcon />
                </IconButton>
            </>
        )
    }

    const columns = [
        { field: "nombre", headerName: <strong>Nombre</strong>, flex: 1, headerAlign: 'center', align: 'center' },
        { field: "descripcion", headerName: <strong>Descripción</strong>, flex: 1.5, headerAlign: 'center', align: 'center' },
        { field: "precio", headerName: <strong>Precio</strong>, flex: 0.5, headerAlign: 'center', align: 'center' },
        { field: "acciones", headerName: <strong></strong>, flex: 0.5, headerAlign: 'center', align: 'center', renderCell: renderDetailsButton }];

    return (
        <Container maxWidth="lg">
            <Box p={4} >
                <Button onClick={openModalProd} variant="contained" color="primary">
                    Nuevo producto
                </Button>
            </Box>
            <DataGrid
                rows={productos}
                columns={columns}
                pageSize={10}
                getRowId={row => row.idProducto}
                autoHeight={true}
                disableColumnMenu
            />
            <ModalProducto esEdicion={false} open={open} setOpen={setOpen} crearProductos={crearProducto} producto={{}} />
            {productos.length != 0 ?
                <>
                    <ModalProducto esEdicion={true} open={openEdicion} setOpen={setOpenEdicion} editarProductos={editarProductos} producto={producto} />
                </>
                :
                <></>
            }
        </Container>


    )
}

export default TablaProductos
