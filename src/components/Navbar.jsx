import { AppBar, Toolbar, Typography, makeStyles, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


import React from 'react'

const useStyles = makeStyles(theme => ({
    offset : theme.mixins.toolbar,
    menuButton:{
        marginRight: theme.spacing(2)
    }
}))

const Navbar = ()=>{
    
    const classes = useStyles();

    return (
        <div>
            <AppBar>
                <Toolbar >
                    <IconButton 
                        color="inherit"
                        aria-label="menu"
                        className={classes.menuButton}
                    >
                      <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" > PedidosYa</Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    );
}

export default Navbar