import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Estilos } from '../style/estilos';
import { Grid, Box, IconButton, Tooltip } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => Estilos(theme));

export const CardComida = (props) => {
    //Estilos
    const classes = useStyles();

    //parametros
    const { comida, onAdd } = props;


    return (
        <Box pb={1} style={{ width: '100%'}}>
            <Paper className={classes.paper}>
                <div className={classes.cardHorizontal}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.imgPlatillo} alt="logo" src={comida.foto} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm alignItems="center" container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography
                                        gutterBottom
                                        variant="subtitle1"
                                        className={classes.tituloLocal}
                                    >
                                        {comida.nombre}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {comida.descripcion}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {"$" + comida.precio}
                                    </Typography>
                                    <Tooltip title="Agregar al carrito">
                                        <IconButton aria-label="" onClick={() => onAdd(comida)}>
                                            <AddShoppingCartIcon/>
                                        </IconButton>
                                    </Tooltip>
                                    {/* <button onClick={() => onAdd(comida)}>Agregar</button> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Paper >
        </Box>

    );
};

export default CardComida;
