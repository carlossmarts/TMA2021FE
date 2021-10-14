import React, { useReducer, useEffect } from 'react'
import { TextField, Grid, Box, Button, Select, MenuItem, OutlinedInput } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


export const FormLocal = (props) => {
    const { localContent, actualizarComercio, categorias } = props;
    const [categoriaSeleccionada, setCategoriaSeleccionada] = React.useState([]);

    const [local, setLocal] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        localContent
    );

    useEffect(() => {
        local.categorias = categoriaSeleccionada;
    }, [categoriaSeleccionada])

    const handleInputChange = (event) => {
        setLocal({
            ...local,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        actualizarComercio(local).then((data) => {
            console.log(JSON.stringify(data) +
                "UPDATEADO")
            alert("Usuario actualizado")
        })
    }

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCategoriaSeleccionada(
            typeof value === 'string' ? value.split(',') : value,
        );
        console.log("largo: " + categoriaSeleccionada.length)
    };

    return (
        <Grid container justify="center">
            <Box p={5} style={{ width: '80%' }}>
                <Paper m={10}>
                    <Box p={5}>
                        <Box mb={3}>
                            <Typography variant="h6" gutterBottom>
                                {` Pedidos Ya - Usuario ${localStorage.getItem("user")} - Información del Local`}
                            </Typography>
                        </Box>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3} style={{ width: '100%' }}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Local"
                                        defaultValue={local.nombre}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        name="nombre"
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        label="Descripción"
                                        defaultValue={local.descripcion}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        name="descripcion"
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="direccion"
                                        onChange={handleInputChange}
                                        label="Dirección"
                                        defaultValue={local.direccion}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="localidad"
                                        onChange={handleInputChange}
                                        label="Localidad"
                                        defaultValue={local.localidad}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="telefono"
                                        onChange={handleInputChange}
                                        label="Teléfono"
                                        defaultValue={local.telefono}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Select
                                        name="categorias"
                                        multiple
                                        value={categoriaSeleccionada}
                                        onChange={handleChange}
                                    >
                                        {categorias.map((categoria) => (
                                            <MenuItem
                                                key={categoria.nombre}
                                                value={categoria}
                                            >
                                                {categoria.nombre}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button type="submit" variant="contained" color="primary">
                                        Actualizar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Paper>
            </Box>
        </Grid>
    );
}

export default FormLocal