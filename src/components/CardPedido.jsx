import { Grid, Box, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Estilos } from '../style/estilos';
import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CommentIcon from '@material-ui/icons/Comment';
const useStyles = makeStyles((theme) => Estilos(theme));

const CardPedido = (props) => {
    const { pedido, local } = props;
    const classes = useStyles();

    return ( <Box >
        <Paper className={classes.cardHorizontal} >
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                <Grid item container sm xs={12}  spacing={0}>   
                    <Grid item>
                        <Typography variant="h4" style={{fontWeight:"bold"}}>{local.nombre}</Typography>
                    </Grid>                    
                    <Grid container item alignItems="center"><Typography>&nbsp;{pedido.descripcion}</Typography></Grid>
                    
                    <Grid container item alignItems="center"><Typography>&nbsp;{pedido.direccion}</Typography></Grid>
                    <Grid container item alignItems="center"><Typography>&nbsp;{pedido.comentarios}</Typography></Grid>
                    <Grid container item alignItems="center"><Typography>&nbsp;{pedido.estado}</Typography></Grid>
                </Grid>
            </Grid>
        </Paper>
        
    </Box> );
}
 
export default CardPedido;