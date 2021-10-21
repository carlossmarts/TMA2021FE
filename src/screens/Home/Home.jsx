import React, { useEffect } from 'react'

import FiltroLocales from '../FiltroLocales/FiltroLocales';
import { BuscarPedido } from '../../components/BuscarPedido'



const Home = () => {

  useEffect(() => {
    localStorage.setItem("idUsuario", "0")
  }, [])

  return (
    <>
      <BuscarPedido />
      <FiltroLocales />
    </>
  );
}


export default Home