import { Grid, Paper, TextField } from '@material-ui/core';
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
        <Paper style={{ height: 400, width: '35%' }}>
            <Grid
                container
                direction="column"
                alignItems="center"
                spacing={50}
            >
                <h2>Tu pedido</h2>
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
                        <>
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

                            <div className="col-2">
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    label="Ingrese su dirección"
                                    variant="outlined"
                                    value={direccion}
                                    onChange={e => setDireccion(e.target.value)} />
                            </div>
                            <button onClick={() => {
                                direccion == '' ?
                                    alert('No te olvides de agregar la dirección ;)')
                                    :
                                    window.open(mensaje, "_blank")
                            }}>
                                Enviar Pedido
                            </button>
                        </>
                    )}
                </div>
            </Grid>
        </Paper>
    );
}

export default Carrito
