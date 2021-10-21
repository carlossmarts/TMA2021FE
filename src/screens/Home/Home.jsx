import React, { useEffect } from 'react'

import FiltroLocales from '../FiltroLocales/FiltroLocales';
import { BuscarPedido } from '../../components/BuscarPedido'
import {Grid} from '@material-ui/core'



const Home = (props) => {

  const {openBuscarPedido, setOpenBuscarPedido} = props
  useEffect(() => {
    localStorage.setItem("idUsuario", "0")
  }, [])

  return (
    <>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item container xs={12}> 
          <BuscarPedido 
            open={openBuscarPedido}
            setOpen={setOpenBuscarPedido}
          />
        </Grid>
        <Grid item container xs={12}>
          <FiltroLocales />
        </Grid>
      </Grid>
    </>
  );
}


export default Home