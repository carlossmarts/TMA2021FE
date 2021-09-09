import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Estilos } from '../style/estilos';
import PhoneIcon from '@material-ui/icons/Phone';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import StarIcon from '@material-ui/icons/Star';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => Estilos(theme));

export const CardLocal = (props) => {
  //Estilos
  const classes = useStyles();

  //parametros
  const {idComercio, nombreLocal, telefono, urlLogo } = props;

  //hooks
  const history = useHistory()

  const irAComercio = ()=>{
   history.push(`/comercio/${idComercio}`)
  }

  return (
    <Box className={classes.cardHorizontal} width='50%' onClick={irAComercio}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="logo" src={urlLogo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.tituloLocal}
                >
                  {nombreLocal}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Entrega entre 20 y 30 minutos
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <PhoneIcon fontSize="small" />
                  Teléfono: {telefono}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                4.1 <StarIcon />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
    </Box>
  );
};

export default CardLocal;
