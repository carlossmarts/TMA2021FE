import { makeStyles, CircularProgress, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { Estilos } from '../../style/estilos';
import { useLocalidadPresenter } from '../../presenter/localidadesPresenter';
import { useLocalPresenter } from '../../presenter/localesPresenter';
import { FiltroTexto } from '../../components/FiltroTexto';
import { CardLocal } from '../../components/CardLocal';


const useStyles = makeStyles((theme) => Estilos(theme))

const Home = () => {

  const classes = useStyles();
  //estados
  const [cargando, setCargando] = useState(true);
  const [localidad, setLocalidad] = useState("");

  //hooks custom
  const { localidades, setLocalidades, traerLocalidades } = useLocalidadPresenter();

  //useEffect

  useEffect(() => {
    traerLocalidades().then(data => setLocalidades(data)).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log("localidad: ", localidad)
  }, [localidad])

  useEffect(() => {

    const municipios = ["Avellaneda", "Lanus", "Lomas de Zamora", "Almirante Brown"]

    if (localidades.localidades) {
      let mappedLocs = []   //todas
      let locs = []         //array final
      mappedLocs = localidades.localidades.map(l => (
        {
          id: l.id,
          nombre: l.nombre,
          municipio: l.municipio.nombre
        }
      ))

      municipios.forEach(m => {
        let locsPorMuni = mappedLocs.filter(l => l.municipio === m)
        locs = [...locs, ...locsPorMuni]
      })
      setLocalidades(locs)
      setCargando(false)
    }
  }, [localidades])

  const { comercios, setComercios, traerLocalesPorLocalidad } = useLocalPresenter();

  useEffect(() => {
    if (localidad)
      traerLocalesPorLocalidad(localidad.nombre).then(data => setComercios(data)).catch(err => console.log(err))
  }, [localidad])


  //funciones                 

  return (
    <>{
      cargando
        ?
        <CircularProgress />
        :
        <FiltroTexto
          opciones={localidades}
          setValor={setLocalidad}
          nombre="localidad"
        />
    }
      {
        localidad && !cargando ?

          <div style={{ height: 400, width: '100%' }}>
            <Grid
              container
              direction="column"
              alignItems="center"
            >
              {comercios.map(comercio => {
                return <CardLocal 
                nombreLocal={comercio.nombre}
                telefono={comercio.telefono}  />
              })}
            </Grid>
          </div>
          :
          <div style={{ height: 400, width: '100%' }}>
          </div>
      }
    </>
  );
}


export default Home