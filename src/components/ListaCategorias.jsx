import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Estilos } from '../style/estilos';
import { Grid, Button, Typography, Box, Paper } from '@material-ui/core';



const useStyles = makeStyles((theme) => Estilos(theme))

export const ListaCategorias = (props) => {

    //Estilos
    const classes = useStyles();

    //parametros
    const {
        categorias, seleccionada, setCategoria
    } = props

    return (
        <div style={{ height: 400, width: '100%' }}>
            <Grid
                container
                direction="column"
                alignItems="center"
            >
                {!categorias.length
                    ?
                    <div>No hay resultados</div>
                    : <Box>
                        <Paper className={classes.paper}>
                            <Box p={2}>
                                <div>
                                    <Typography
                                        gutterBottom
                                        variant="subtitle1"
                                        className={classes.tituloLocal}
                                    >
                                        Categorias
                                    </Typography>
                                    {categorias.map(categoria => {
                                        return <div className={classes.listadoCategorias}>
                                            {categoria !== seleccionada ?
                                                <Button variant="text" cursor="pointer" onClick={() => setCategoria(categoria)}>{categoria.nombre}</Button>
                                                :
                                                <Button variant="contained" cursor="pointer" onClick={() => setCategoria("")}>{categoria.nombre}</Button>
                                            }
                                        </div>
                                    })}
                                </div>
                            </Box>
                        </Paper>
                    </Box>
                }
            </Grid>
        </div>
    );
};

export default ListaCategorias

