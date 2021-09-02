import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Estilos } from '../style/estilos';

const useStyles = makeStyles((theme) => Estilos(theme))

export const CardLocal = (props) => {
  //Estilos
  const classes = useStyles();

  //parametros
  const {
    nombreLocal,
    telefono,
    urlLogo
  } = props

  return (
    <div class={classes.cardHorizontal}>
      <img class={classes.imgLocal} src={urlLogo} alt="test"></img>
      <div class={classes.textoCardLocal}>
        <div class='titulo-local'>{nombreLocal}</div>
        <div class='entrega-local'> Entrega entre 20 y 30 minutos</div>
        <div class='telefono'>Teléfono: {telefono}</div>
      </div>
    </div>
  );
};

export default CardLocal