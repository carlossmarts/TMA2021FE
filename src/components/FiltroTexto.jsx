import { TextField, makeStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Estilos } from '../style/estilos';

const useStyles = makeStyles((theme) => Estilos(theme))

export const FiltroTexto = (props) => {
    //Estilos
    const classes = useStyles();

    //parametros
    const {
        opciones,
        setValor,
        nombre
    } = props

    return (
        <div className={classes.root}>
              <Autocomplete 
              id={nombre}
              options={opciones}
              getOptionLabel={op => op.nombre}
              style={{margin: 8, width:'50%'}}
              renderInput={(params) => <TextField {...params} label={`ingresar ${nombre}`} variant="outlined"/>}
              onChange = {(event, value)=>setValor(value)}
              >
            </Autocomplete>
          </div>
    )
}
