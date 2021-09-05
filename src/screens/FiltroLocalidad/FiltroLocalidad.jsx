import { makeStyles, LinearProgress, Grid } from '@material-ui/core';
import React, { useState, useEffect, Fragment } from 'react'
import { Estilos } from '../../style/estilos';
import { useLocalidadPresenter } from '../../presenter/localidadesPresenter';
import { useComercioPresenter } from '../../presenter/comerciosPresenter';
import { FiltroTexto } from '../../components/FiltroTexto';
import { ListaComercios } from '../../components/ListaComercios';


const useStyles = makeStyles((theme) => Estilos(theme))

const FiltroLocalidad = () => {

  const classes = useStyles();
  //estados
  const [cargando, setCargando] = useState(true);
  const [cargandoComercios, setCargandoComercios] = useState(true);
  const [localidad, setLocalidad] = useState("");

  //hooks custom
  const { localidades, setLocalidades, traerLocalidades } = useLocalidadPresenter();
  const { comercios, setComercios, traerComerciosPorLocalidad } = useComercioPresenter();

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
        setCargandoComercios(false)
      }
      ).catch(err => console.log(err))
    } else
      setCargandoComercios(true)
  }, [localidad])


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
            <ListaComercios comercios={comercios} />
          :
          <div>
          </div>
      }
    </Fragment>
  );
}


export default FiltroLocalidad