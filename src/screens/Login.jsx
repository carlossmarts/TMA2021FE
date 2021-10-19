import React, {useState} from 'react'
import { Estilos } from '../style/estilos'
import {
    Icon,
    Grid,
    Typography,
    makeStyles,
    Container,
    Paper,
    TextField,
    IconButton, 
    Box,
    Button 
} 
from '@material-ui/core/'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';

import { Alert } from '@material-ui/lab'

import { useHistory } from 'react-router'

import { useUsuarioPresenter } from '../presenter/usuarioPresenter'


const useStyles = makeStyles((theme) => Estilos(theme));

const Login = () => {

    const classes = useStyles();


     //******************** 
    // Hooks
    //********************

    const {traerIdUsuario} = useUsuarioPresenter()

    const history = useHistory();

    //******************** 
    // Estados
    //********************
    const [visible, setVisible] = useState(false);

    const [username, setUsername] = useState("");
    const [errUserName, setErrUserName] = useState("");

    const [password, setPassword] = useState("");
    const [errPass, setErrPass] = useState("");

    const [errorLogin, setErrorLogin] = useState("");

    //******************** 
    // setters
    //********************
    const call_setUsername = (val) => {
        if (val === "") {
            setErrUserName("este campo no puede estar vacio")
        } else {
            setErrUserName("")
        }
        setUsername(val)
    }

    const call_setPassword = (val) => {
        if (val === "") {
            setErrPass("este campo no puede estar vacio")
        } else {
            setErrPass("")
        }
        setPassword(val)
    }

    //******************** 
    // Funciones
    //********************


    const limpiarCampos = () => {
        setUsername("");
        setPassword("");

        setErrUserName("");
        setErrPass("");

        setVisible(false);

    }

    const irAHome = ()=>{
        limpiarCampos()
        history.push("/")
    }

    const validarYEnviar = async () => {
        const formOK = validarCampos();
        if(formOK){
            try {
                const idUsuario = await traerIdUsuario(username, password);
                console.log("id de usuario recuperado en login", idUsuario);
                if(idUsuario){
                    history.push({
                        pathname:"/gestion",
                        state: {idUsuario}
                    })
                } else{
                    setErrorLogin("error, verifique usuario y contraseña")
                }
            } catch (error) {
                console.log(error)
                setErrorLogin("error, verifique usuario y contraseña")
            }
        }
    }

    const validarCampos = () => {
        let retorno = true;
        if (username === "") {
            setErrUserName("Este campo es requerido");
            retorno = false;
        }
        if (password === "") {
            setErrPass("Este campo es requerido");
            retorno = false;
        }

        return retorno;
    }

    return (
        <Container maxWidth="sm" >

            <Box display="flex" justifyContent="center" m={8} >
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid container item justifyContent="center" >
                            <Box m={3}>
                                <Typography variant="h5" color="initial"> Iniciar sesi&oacute;n</Typography>
                            </Box>
                        </Grid>
                        <Grid container item >
                            <TextField
                                style={{margin: 8, width:"95%"}}
                                id="userName"
                                label="Nombre de usuario"
                                variant="outlined"
                                value={username}
                                onChange={e=>{call_setUsername(e.target.value)}}
                                error= {errUserName!== ""? true : false}
                                helperText = {errUserName}
                                
                            />
                        </Grid>
                        <Grid container item >                          
                                <TextField
                                    style={{margin: 8, width:"95%"}}
                                    id="password"
                                    label="contraseña"
                                    variant="outlined"
                                    type={visible ? "text" : "password"}
                                    value={password}
                                    onChange={e=>{call_setPassword(e.target.value)}}
                                    error= {errPass!== ""? true : false}
                                    helperText = {errPass}
                                    
                                />
                        </Grid>
                        <Grid container item justifyContent="center" >
                            <IconButton onClick={()=>{setVisible(!visible)}}>
                            {
                                visible 
                                ?
                                    <VisibilityIcon/>
                                :
                                    <VisibilityOffIcon/>
                            }
                            </IconButton>
                          
                        </Grid>

                    </Grid>
                  
                  <Box display="flex" justifyContent="center">
                      {
                          errorLogin?
                            <Alert severity="warning">{errorLogin} </Alert>
                        :
                        <></>
                      }
                    </Box>
                    <Box m={2} display="flex" justifyContent="space-around">
                        <Button onClick={validarYEnviar} variant="contained" color="secondary">
                            Aceptar
                        </Button>
                        <Button onClick={irAHome} variant="outlined" color="secondary">
                            Cancelar
                        </Button>

                    </Box>
                </Paper >
            </Box>

        </Container>

          

    )
}

export default Login
