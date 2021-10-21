import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Estilos } from '../style/estilos';
import Typography from '@material-ui/core/Typography';
import { TextField, Grid, Box, Button, Select, MenuItem, OutlinedInput, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => Estilos(theme));

export const BuscarPedido = (props) => {

  const {open, setOpen} = props
  //Estilos
  const classes = useStyles();
  const [pedido, setPedido] = useState('')
  

  //parametros

  //hooks
  const history = useHistory()

  const irAComercio = () => {
    history.push(`/pedido/${pedido}`)
  }
  const handleInputChange = (event) => {
    setPedido(event.target.value)
  }

  const handleClose = ()=>{
    setOpen(false)
    irAComercio()
  }

  return (
    <Dialog open={open} onClose={()=>{setOpen(false)}}>
      
      <DialogContent>
        <Box className={classes.cardHorizontal} width='70%'>
          <Grid container spacing={2} justifyContent="center" alignItems="center" >
            <Grid item container xs={12}>
                <Typography gutterBottom  variant="subtitle1" className={classes.tituloLocal} >
                  ¿Querés ver el estado de tu pedido? ¡Ingresá tu código acá!
                </Typography>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={6}>
                  <TextField label="id pedido" variant="outlined" fullWidth size="small" onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={6}>
                  <Button type="submit" variant="contained" color="primary" onClick={handleClose}>
                    Ver Pedido
                  </Button>
                </Grid>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      
    </Dialog>
    
  );
};

export default BuscarPedido;
