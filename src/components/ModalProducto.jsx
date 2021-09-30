import React, { useReducer, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import { TextField, Grid, Box, Button, Checkbox, FormControlLabel } from '@material-ui/core'

const ModalProducto = (props) => {

  //******************** 
  // Props
  //********************

  const {
    open,
    setOpen,
    productoContent,
    accionProducto
  } = props;


  //******************** 
  // Estados
  //********************

  const body = productoContent ? productoContent : {
    "nombre": "",
    "descripcion": "",
    "foto": "",
    "precio": 0,
    "visible": true
  }

  const [producto, setProducto] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    body
  );

  const handleInputChange = (event) => {
    console.log(event.target.name)
    if (event.target.name == "visible") {
      setProducto({
        ...producto,
        [event.target.name]: event.target.checked
      })
    } else if (event.target.name == "precio") {
      setProducto({
        ...producto,
        [event.target.name]: event.target.valueAsNumber
      })
    } else {
      setProducto({
        ...producto,
        [event.target.name]: event.target.value
      })
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(producto) +
      " BODY")
    accionProducto(producto, localStorage.getItem("idTienda")).then((res) => {
      if (res === 201)
        alert("Producto Creado")
    }).then(() => {
      window.location.reload()
    })
  }


  //******************** 
  // Effects
  //********************

  //******************** 
  // Funciones
  //********************

  const cerrar = () => {
    setOpen(false);
  }


  return (
    <Dialog open={open} onClose={cerrar}>
      <Grid container justify="center">
        <Box p={3} style={{ width: '90%' }}>
          <Box p={1}>
            <Box mb={3}>
              <Typography variant="h6" gutterBottom>
                {` Pedidos Ya - Crear nuevo producto`}
              </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre"
                    defaultValue={producto.nombre}
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
                    defaultValue={producto.descripcion}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    size="small"
                    name="descripcion"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="foto"
                    onChange={handleInputChange}
                    label="Link a la Foto"
                    defaultValue={producto.foto}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    name="precio"
                    onChange={handleInputChange}
                    label="Precio"
                    defaultValue={producto.precio}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={<Checkbox
                      name="visible"
                      onChange={handleInputChange}
                      value={producto.visible}
                    />} label="Publicado"
                  />
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Grid>
      <DialogActions style={{ display: "flex", justifyContent: "center" }} >
        <Button onClick={handleSubmit} variant="contained" color="secondary">
          Crear
        </Button>
        <Button onClick={cerrar} variant="outlined" color="secondary">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalProducto;
