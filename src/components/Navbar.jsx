import React, {useState, useEffect} from 'react'

import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu';
import {Divider} from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import {useHistory} from 'react-router'


const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2)
    }
}))

const Navbar = (props) => {

    //******************** 
    // Props
    //********************
    
    const {
        setOpenRegistro,
        setOpenLogin,
        setIdUser
      } = props;

    const classes = useStyles();

    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState(null);


    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const abrirModalRegistro = ()=>{
        setOpenRegistro(true);
        handleClose();
    }

    const irAGestion = ()=>{
        setOpenLogin(true)
        handleClose()
        history.push("/gestion");
    }

    const abrirModalLogin = ()=>{
        setOpenLogin(true);
        handleClose();
    }

    const cerrarSesion = ()=>{
        setIdUser(0)
        handleClose()
        irAHome()
    }

    const irAHome = ()=>{
        history.push({
          pathname:"/"
        })
      }
      
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item container xs={6} justifyContent="flex-start">
                            <Typography variant="h6" > PedidosYa</Typography>
                        </Grid>
                        <Grid item container xs={6} justifyContent="flex-end" spacing={4}>

                        <IconButton 
                        color="inherit"
                        aria-label="menu"
                        className={classes.menuButton}
                        onClick={handleClick}
                    >
                      <MenuIcon/>
                    </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={abrirModalRegistro}>Registrar mi comercio</MenuItem>

                                {
                                    parseInt(localStorage.getItem("idUsuario")) === 0
                                    ?
                                        <MenuItem onClick={irAGestion}>Ingresar a gestion comercial</MenuItem>
                                    :
                                        <MenuItem onClick={cerrarSesion}>Cerrar Sesión</MenuItem>
                                }

                                <Divider/>
                                <MenuItem onClick={handleClose}>cerrar</MenuItem>


                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>

            </AppBar>
            <div className={classes.offset}></div>
        </div>
    );
}

export default Navbar