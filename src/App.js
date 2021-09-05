import React from 'react'
import Home from './screens/Home/Home'
import FiltroLocalidad from './screens/FiltroLocalidad/FiltroLocalidad'

import Navbar from './components/Navbar'
import { ThemeProvider } from '@material-ui/styles'
import theme from './style/themeConfig'

const App = ()=>{
  return (
    <ThemeProvider theme = {theme}>
      <Navbar/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
