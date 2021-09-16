import React, { useState, useEffect } from 'react'

import { ThemeProvider } from '@material-ui/styles'
import theme from './style/themeConfig'

import Home from './screens/Home/Home'
import Comercio from './screens/Comercio/Comercio'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import ModalRegComercio from './components/ModalRegComercio'
import ModalLogIn from './components/ModalLogIn'
import GestionComercio from './screens/GestionComercio/GestionComercio'

const App = () => {

  const [openModalLogIn, setOpenModalLogIn] = useState(false)
  const [openModalRegistro, setOpenModalRegistro] = useState(false)
  const [user, setUser] = useState("")


  useEffect(() => {
    console.log(user);
    localStorage.setItem("user", user);
  }, [user])

  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter basename="/">
        <Navbar
            setOpenLogin={setOpenModalLogIn}
            setOpenRegistro={setOpenModalRegistro}
            setUser={setUser}
        />
         <ModalRegComercio
          open={openModalRegistro}
          setOpen={setOpenModalRegistro}
          setUser={setUser}
        />
        <ModalLogIn
          open={openModalLogIn}
          setOpen={setOpenModalLogIn}
          setUser={setUser}
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

      <ModalRegComercio
        open={openModalRegistro}
        setOpen={setOpenModalRegistro}
        setUser={setUser}
      />
      <ModalLogIn
        open={openModalLogIn}
        setOpen={setOpenModalLogIn}
        setUser={setUser}
      />

    </ThemeProvider>
  );
}

export default App;
