import { DataGrid } from '@material-ui/data-grid'
import { Container, Box, Button, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react'

const TablaProductos = (props) => {

    const {
        productos,
        openModalProd,
        eliminarProductos
    } = props


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
                        alert('No te olvides de agregar la dirección ;)')
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
        </Container>
    )
}

export default TablaProductos
