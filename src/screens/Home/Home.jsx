import { makeStyles, CircularProgress } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import { Estilos } from '../../style/estilos';
import { useLocalidadPresenter } from '../../presenter/localidadesPresenter';
import { FiltroTexto } from '../../components/FiltroTexto';
import { DataGrid } from '@material-ui/data-grid'
import { ColumnasComercioXLocalidad } from './DatagridCols'

const useStyles = makeStyles((theme) => Estilos(theme))

const Home = ()=>{
  
  const classes = useStyles();
  //estados
  const [cargando, setCargando] = useState(true);
  const [localidad, setLocalidad] = useState("");
  const [comercios, setComercios] = useState([
                                              {id: 0, nombre: "Rotisería carlos", direccion:"mendoza 119"},
                                              {id: 1, nombre: "Pizzería sebastian", direccion: "calle falsa 123"}
                                            ])

  //hooks custom
  const {localidades, setLocalidades, traerLocalidades} = useLocalidadPresenter();

  //useEffect
  
  useEffect(()=>{
    traerLocalidades().then(data=>setLocalidades(data)).catch(err=>console.log(err))
  },[])

  useEffect(() => {
    console.log("localidad: ", localidad)
  }, [localidad])

  useEffect(() => {

    const municipios = ["Avellaneda", "Lanus", "Lomas de Zamora", "Almirante Brown"]

    if(localidades.localidades){
      let mappedLocs = []   //todas
      let locs = []         //array final
      mappedLocs = localidades.localidades.map( l => (
        {
          id: l.id,
          nombre: l.nombre,
          municipio: l.municipio.nombre
        }
      ))

      municipios.forEach( m =>{
        let locsPorMuni = mappedLocs.filter(l => l.municipio === m)
        locs = [...locs, ...locsPorMuni]
      } )
      setLocalidades(locs)
      setCargando(false)
    }
  }, [localidades])

  //funciones
return (
  <>{
    cargando 
        ?
          <CircularProgress/>
        :  
          <FiltroTexto
              opciones = {localidades}
              setValor = {setLocalidad}
              nombre = "localidad"
          />
      }
      {
        localidad && !cargando ?
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={comercios}
                columns = {ColumnasComercioXLocalidad()}
                pageSize={10}
                getRowId={row => row.id}
                className={classes.grid}
                hideFooterSelectedRowCount={true}
                autoHeight={true}
            />
        </div>
        :
        <div></div>
      }
      </>
    );
}


export default Home