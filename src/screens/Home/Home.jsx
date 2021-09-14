import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Comercio } from '../Comercio/Comercio';
import FiltroLocalidad from '../FiltroLocalidad/FiltroLocalidad';
import PerfilLocal from '../Perfil/PerfilLocal';


const Home = () => {

  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path={'/'}>
          <FiltroLocalidad />
        </Route>
        <Route exact path={'/comercio/:id'}>
          <Comercio />
        </Route>
        <Route exact path={'/perfil'}>
          <PerfilLocal />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default Home