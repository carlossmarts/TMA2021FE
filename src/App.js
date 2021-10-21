import Home from './screens/Home/Home'
import Navbar from './components/Navbar'
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './style/themeConfig'
import Comercio from './screens/Comercio/Comercio'
import Pedido from './screens/Pedido/Pedido'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GestionComercio from './screens/GestionComercio/GestionComercio'
import Login from './screens/Login'
import Registro from './screens/Registro'

const App = () => {

  const [openBuscarPedido, setOpenBuscarPedido] = useState(false)
  const [url, setUrl] = useState(window.location.href)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <Navbar
          setOpenBuscarPedido={setOpenBuscarPedido}
          url={url}
        />
        <Switch>
          <Route exact path={'/'}>
            <Home 
              openBuscarPedido={openBuscarPedido}
              setOpenBuscarPedido={setOpenBuscarPedido}
              setUrl={setUrl}
            />
          </Route>
          <Route exact path={'/comercio/:id'}>
            <Comercio />
          </Route>
          <Route exact path={'/pedido/:id'}>
            <Pedido 
              setUrl={setUrl}
            />
          </Route>
          <Route exact path={'/gestion'}>
            <GestionComercio />
          </Route>
          <Route exact path={'/login'}>
            <Login />
          </Route>
          <Route exact path={'/registro'}>
            <Registro />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
