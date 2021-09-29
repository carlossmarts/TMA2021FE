import { DataGrid } from '@material-ui/data-grid'
import { Container, Box, Button } from '@material-ui/core'
import React from 'react'
import { useComidaPresenter } from '../presenter/comidasPresenter'

const TablaProductos = (props) => {

    const {
        productos,
        openModalProd
    } = props


  


    const columns = [
        { field: "nombre", headerName: <strong>Nombre</strong>, flex: 1, headerAlign: 'center', align: 'center' },
        { field: "descripcion", headerName: <strong>Descripción</strong>, flex: 1, headerAlign: 'center', align: 'center' },
        { field: "precio", headerName: <strong>Precio</strong>, flex: 1, headerAlign: 'center', align: 'center' }
    ];

    return (
        <Container maxWidth="lg">
            <Box  p={4} >
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
