import React from 'react';
import { TextField, Grid, Box, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



export const FormLocal = () => {
    return (
        <Grid container justify="center">
            <Box p={5} style={{ width: '80%' }}>
                <Paper m={10}>
                    <Box p={5} style={{ width: '80%' }}>
                        <Box p={2}>
                            <Typography variant="h6" gutterBottom>
                                Pedidos Ya - Información del Local
                            </Typography>
                        </Box>
                        <Grid container spacing={3} style={{ width: '100%' }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label="Local"
                                    defaultValue="Hello World"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label="Dirección"
                                    defaultValue="Hello World"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label="Teléfono"
                                    defaultValue="Hello World"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label="Descripción"
                                    defaultValue="Hello World"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label="Costo de envío"
                                    defaultValue="Hello World"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" color="primary">
                                    Actualizar
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Box>
        </Grid>
    );
}

export default FormLocal