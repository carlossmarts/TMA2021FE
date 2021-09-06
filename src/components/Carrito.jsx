import { Grid, Paper } from '@material-ui/core';
import React from 'react';

export const Carrito = (props) => {
    const { cartItems } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.precio, 0);
    const shippingPrice = 89
    const totalPrice = itemsPrice + shippingPrice;
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
                            <div className="row">
                                <button onClick={() => alert('Implement Checkout!')}>
                                    Enviar Pedido
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </Grid>
        </Paper>
    );
}

export default Carrito
