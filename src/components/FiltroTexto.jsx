import { TextField, makeStyles, Grid, Box } from '@material-ui/core';
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
        <Grid
            container
            spacing={8}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"

        >
            <Grid item xs={10} sm={8} md={6} >
                <Box m={4}>
                    <Autocomplete
                        fullWidth
                        id={nombre}
                        options={opciones}
                        getOptionLabel={op => op.nombre}
                        renderInput={(params) => <TextField {...params} label={`ingresar ${nombre}`} variant="outlined" />}
                        onChange={(event, value) => setValor(value)}
                    >
                    </Autocomplete>
                </Box>

            </Grid>

        </Grid>


    )
}
