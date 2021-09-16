import Home from './screens/Home/Home'
import Navbar from './components/Navbar'
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './style/themeConfig'
import Comercio from './screens/Comercio/Comercio'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ModalRegComercio from './components/ModalRegComercio'
import ModalLogIn from './components/ModalLogIn'
import GestionComercio from './screens/GestionComercio/GestionComercio'

const App = () => {

  const [openModalLogIn, setOpenModalLogIn] = useState(false)
  const [openModalRegistro, setOpenModalRegistro] = useState(false)

  const [idUser, setIdUser] = useState(0);


  useEffect(() => {
    console.log("IdUsuario almacenado en local storage: ", idUser);
    localStorage.setItem("idUsuario", idUser);
  }, [idUser])

  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter basename="/">
        <Navbar
            setOpenLogin={setOpenModalLogIn}
            setOpenRegistro={setOpenModalRegistro}
            setIdUser={setIdUser}
        />
         <ModalRegComercio
          open={openModalRegistro}
          setOpen={setOpenModalRegistro}
          setIdUser={setIdUser}
        />
        <ModalLogIn
          open={openModalLogIn}
          setOpen={setOpenModalLogIn}
          setIdUser={setIdUser}
        />
        
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/comercio/:id'}>
            <Comercio />
          </Route>
          <Route exact path={'/gestion'}>
            <GestionComercio />
          </Route>

        </Switch>

       
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
