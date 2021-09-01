import { makeStyles, LinearProgress } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { Estilos } from '../../style/estilos';
import { useLocalidadPresenter } from '../../presenter/localidadesPresenter';
import { useLocalPresenter } from '../../presenter/localesPresenter';
import { FiltroTexto } from '../../components/FiltroTexto';
import { ListaLocales } from '../../components/ListaLocales';


const useStyles = makeStyles((theme) => Estilos(theme))

const Home = () => {

  const classes = useStyles();
  //estados
  const [cargando, setCargando] = useState(true);
  const [cargandoLocales, setCargandoLocales] = useState(true);
  const [localidad, setLocalidad] = useState("");

  //hooks custom
  const { localidades, setLocalidades, traerLocalidades } = useLocalidadPresenter();
  const { comercios, setComercios, traerLocalesPorLocalidad } = useLocalPresenter();

  //useEffect

  useEffect(() => {
    traerLocalidades().then(data => setLocalidades(data)).catch(err => console.log(err))
  }, [])

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

  useEffect(() => {
    if (localidad) {
      setCargandoLocales(true)
      traerLocalesPorLocalidad(localidad.nombre).then((data) => {
        setComercios(data)
        setCargandoLocales(false)
      }
      ).catch(err => console.log(err))
    } else
      setCargandoLocales(true)
  }, [localidad])


  //funciones                 

  return (
    <>{
      cargando
        ?
        <div container
          direction="column"
          alignItems="center" >
          <LinearProgress />
        </div>
        :
        <FiltroTexto
          opciones={localidades}
          setValor={setLocalidad}
          nombre="localidad"
        />
    }
      {
        localidad ?
          cargandoLocales ?
            <LinearProgress />
            :
            <ListaLocales comercios={comercios} />
          :
          <div>
          </div>
      }
    </>
  );
}


export default Home