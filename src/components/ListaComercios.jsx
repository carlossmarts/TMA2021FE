import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Estilos } from '../style/estilos';
import { Grid } from '@material-ui/core';
import { CardLocal } from './CardLocal'



const useStyles = makeStyles((theme) => Estilos(theme))

export const ListaComercios = (props) => {

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
              idComercio= {comercio.idComercio}
              nombreLocal={comercio.nombre}
              telefono={comercio.telefono}
              urlLogo= {comercio.logo}
              key={comercio.idComercio} />
          })

        }
      </Grid>
    </div>
  );
};

export default ListaComercios
