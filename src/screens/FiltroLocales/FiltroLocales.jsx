import { LinearProgress, Grid } from '@material-ui/core';
import React, { useState, useEffect, Fragment } from 'react'
import { useLocalidadPresenter } from '../../presenter/localidadesPresenter';
import { useComercioPresenter } from '../../presenter/comerciosPresenter';
import { useCategoriasPresenter } from '../../presenter/categoriasPresenter';

import { FiltroTexto } from '../../components/FiltroTexto';
import { ListaComercios } from '../../components/ListaComercios';
import { ListaCategorias } from '../../components/ListaCategorias';


const FiltroLocales = () => {

  //estados
  const [cargando, setCargando] = useState(true);
  const [cargandoComercios, setCargandoComercios] = useState(true);
  const [localidad, setLocalidad] = useState("");
  const [categoria, setCategoria] = useState("");


  //hooks custom
  const { localidades, setLocalidades, traerLocalidades } = useLocalidadPresenter();
  const { comercios, setComercios, traerComerciosPorLocalidad, traerComerciosPorLocalidadYCategoria } = useComercioPresenter();
  const { categorias, setCategorias, traerCategorias } = useCategoriasPresenter();


  //useEffect

  useEffect(() => {
    traerLocalidades().then(data => setLocalidades(data)).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log(localidades)
    setCargando(false)
  }, [localidades])

  useEffect(() => {
    if (localidad) {
      setCargandoComercios(true)
      traerComerciosPorLocalidad(localidad.nombre).then((data) => {
        setComercios(data)
        traerCategorias().then((data) => {
          setCategorias(data)
          setCargandoComercios(false)
        })
      }
      ).catch(err => console.log(err))
    } else
      setCargandoComercios(true)
  }, [localidad])

  useEffect(() => {
    if (localidad) {
      setCargandoComercios(true)
      traerCategorias().then((data) => {
        setCategorias(data)
      }
      ).catch(err => console.log(err))
    } else
      setCargandoComercios(true)
  }, [localidad])

  useEffect(() => {
    if (localidad) {
      setCargandoComercios(true)
      traerComerciosPorLocalidadYCategoria(localidad.nombre, categoria.idCategoria).then((data) => {
        setComercios(data)
        setCargandoComercios(false)
      }
      ).catch(err => console.log(err))
    } else
      setCargandoComercios(true)
  }, [categoria])

  //funciones                 

  return (
    <Fragment>
      {
        cargando
          ?
          <Grid container
            direction="column"
            alignItems="center" >
            <LinearProgress />
          </Grid>
          :
          <FiltroTexto
            opciones={localidades}
            setValor={setLocalidad}
            nombre="localidad"
          />
      }
      {
        localidad ?
          cargandoComercios ?
            <LinearProgress />
            :
            <Grid style={{ width: '100%' }} container direction="row" alignItems="center" justify="center" spacing={5}>
              <Grid item xs={1}></Grid>
              <Grid item xs={8}><ListaComercios comercios={comercios} /></Grid>
              <Grid item xs={3}><ListaCategorias categorias={categorias} seleccionada={categoria} setCategoria={setCategoria} /></Grid>
            </Grid>
          :
          <div></div>
      }
    </Fragment>
  );
}


export default FiltroLocales