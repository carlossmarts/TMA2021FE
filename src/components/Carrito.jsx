import { Grid, Paper, TextField, Button, Box } from '@material-ui/core';
import React, { useState, useEffect, Fragment } from 'react'

export const Carrito = (props) => {
    const { telefono, cartItems } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.precio, 0);
    const shippingPrice = 89
    const totalPrice = itemsPrice + shippingPrice;
    const [direccion, setDireccion] = useState('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        let text =
            "Hola, vi tu menu en PedidosYa y quiero hacer el siguiente pedido: \n "
        cartItems.map((item) => (
            text = text.concat(`${item.nombre} (${item.qty} x $${item.precio.toFixed(2)}) \n `)
        ))
        text = text.concat(`*Total:* $${totalPrice}. \n Mi dirección es: ${direccion}. Gracias`)

        setMensaje(`https://wa.me/549${telefono}?text=${encodeURI(text)}`)
    }, [cartItems, direccion])

    return (
        <Box height="75%" width='35%' px={2}>
            <Paper>
                <Box p={3} pb={4} style={{ minHeight: 150 }}>
                    <h2 style={{ 'text-align': 'center' }}>Tu pedido</h2>
                    <div>
                        {cartItems.length === 0 && <div>Tu pedido está vacío</div>}
                        {cartItems.map((item) => (
                            <div key={item.idProducto} className="row">
                                <div className="col-2">{item.name}</div>
                                <div className="col-2 text-right">
                                    {item.nombre} {item.qty} x ${item.precio.toFixed(2)}
                                </div>
                            </div>
                        ))}

                        {cartItems.length !== 0 && (
                            <div style={{ 'text-align': 'right' }}>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-2">Subtotal:</div>
                                    <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                                </div>
                                <div className="row">
                                    <div className="col-2">Envío:</div>
                                    <div className="col-1 text-right">
                                        ${shippingPrice.toFixed(2)}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-2">
                                        <strong>Total:</strong>
                                    </div>
                                    <div className="col-1 text-right">
                                        <strong>${totalPrice.toFixed(2)}</strong>
                                    </div>
                                </div>
                                <hr />
                                <Grid container direction="column" item xs>
                                    <Box my={1}>
                                        <TextField
                                            m={50}
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={4}
                                            fullWidth
                                            label="Ingrese su dirección"
                                            variant="outlined"
                                            value={direccion}
                                            onChange={e => setDireccion(e.target.value)} />
                                    </Box>
                                    <Box >
                                        <Button variant="contained" size="small" onClick={() => {
                                            direccion === '' ?
                                                alert('No te olvides de agregar la dirección ;)')
                                                :
                                                window.open(mensaje, "_blank")
                                        }}>
                                            Enviar Pedido
                                        </Button>
                                    </Box>

                                </Grid>
                            </div>
                        )}
                    </div>
                </Box>
            </Paper >
        </Box>);
}

export default Carrito
