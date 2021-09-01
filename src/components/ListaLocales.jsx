import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Estilos } from '../style/estilos';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => Estilos(theme))

const CardLocal = (props) => {
  //Estilos
  const classes = useStyles();

  //parametros
  const {
    nombreLocal,
    telefono,
    minEntrega,
    MaxEntrega,
    logo
  } = props

  return (
    <div className={classes.cardHorizontal}>
      <img className={classes.imgLocal} src="local-logo.png" alt="test"></img>
      <div className={classes.textoCardLocal}>
        <div className='titulo-local'>{nombreLocal}</div>
        <div className='entrega-local'> Entrega entre 20 y 30 minutos</div>
        <div className='telefono'>Teléfono: {telefono}</div>
      </div>
    </div>
  );
};

export const ListaLocales = (props) => {

  //Estilos
  const classes = useStyles();

  //parametros
  const {
    comercios
  } = props

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        {!comercios.length
          ?
          <div>No hay resultados</div>
          :
          comercios.map(comercio => {
            return <CardLocal
              nombreLocal={comercio.nombre}
              telefono={comercio.telefono} />
          })

        }
      </Grid>
    </div>
  );
};

export default ListaLocales

