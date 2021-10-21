import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Estilos } from '../style/estilos';
import Typography from '@material-ui/core/Typography';
import { TextField, Grid, Box, Button, Select, MenuItem, OutlinedInput } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => Estilos(theme));

export const BuscarPedido = (props) => {
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

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      sm={8} md={6}>
      <Box className={classes.cardHorizontal} width='70%'>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          alignContent="center">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            alignContent="center">
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                className={classes.tituloLocal}
              >
                ¿Querés ver el estado de tu pedido? ¡Ingresá tu código acá!
              </Typography>
              <Grid item xs container direction="row" spacing={2}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    label="pedido"
                    variant="outlined"
                    fullWidth
                    size="small"
                    name="nombre"
                    onChange={handleInputChange}
                  />
                </Grid><Grid item xs={6} sm={6}>
                  <Button type="submit" variant="contained" color="primary" onClick={irAComercio}>
                    Actualizar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default BuscarPedido;
