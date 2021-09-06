import React from 'react';
import { Grid } from '@material-ui/core';
import CardComida from './CardComida';

export const ListaProductos = (props) => {
    //parametros
    const { comidas, onAdd } = props;


    return (
        <div style={{ height: 400, width: '60%' }}>
            <Grid
                container
                direction="column"
                alignItems="center"
            >
                {comidas.map(comida => {
                    return <CardComida comida={comida} onAdd={onAdd} />
                })
                }
            </Grid>
        </div>
    );
};

export default ListaProductos

