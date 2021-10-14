import React, { useState, useEffect, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Estilos } from '../style/estilos';
import { Grid, TextField, Button, Box, Paper } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '4px',
        margin: '10px',
        display: 'flex',
        alignItems: 'center',
        width: 600,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export const FiltroNombreProducto = (props) => {

    //Estilos
    const classes = useStyles();

    //parametros
    const {
        setProd
    } = props

    const [producto, setProducto] = useState("");
    const handleInputChange = () => {
        setProd(producto)
    }

    const handleChange = (e) => {
        setProducto(e.target.value);
    };

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Buscá por producto"
                name="producto"
                onInput={handleChange}
            />
            <IconButton type="button" className={classes.iconButton} onClick={() => handleInputChange()}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default FiltroNombreProducto

