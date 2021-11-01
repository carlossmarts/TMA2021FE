import React, { useEffect } from 'react'

import FiltroLocales from '../FiltroLocales/FiltroLocales';
import { BuscarPedido } from '../../components/BuscarPedido'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Estilos } from '../../style/estilos';

const useStyles = makeStyles((theme) => Estilos(theme));


const Home = (props) => {
  const classes = useStyles();
  const { openBuscarPedido, setOpenBuscarPedido, setUrl } = props
  useEffect(() => {
    setUrl(window.location.href)
    localStorage.setItem("idUsuario", "0")
  }, [])

  return (
    <>
      <Grid container spacing={4} alignItems="center" justifyContent="center" className={classes.bgImageHome}>
        <Grid item container xs={12}>
          <BuscarPedido
            open={openBuscarPedido}
            setOpen={setOpenBuscarPedido}
          />
        </Grid>
        <Grid item container xs={12}>
          <Grid item container  alignItems="center" justifyContent="center"><Typography variant="h3" style={{color:"#ffffff"}}>¡Pedí lo que quieras!</Typography></Grid>
          <Grid item container  alignItems="center" justifyContent="center"><Typography variant="h6" style={{color:"#ffffff"}}>Restaurantes, mercados, farmacias, kioscos y mucho más.</Typography></Grid>
          <FiltroLocales className={classes.buscarLocales} />
        </Grid>
      </Grid>
    </>
  );
}


export default Home