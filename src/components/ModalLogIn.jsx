import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import {  IconButton, Box } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { useHistory } from 'react-router'
import { useUsuarioPresenter } from '../presenter/usuarioPresenter'


const ModalLogIn = (props) => {
    //******************** 
    // Props
    //********************

    const {
        open,
        setOpen,
        setIdUser
    } = props;

    //******************** 
    // Hooks
    //********************

    const {traerIdUsuario} = useUsuarioPresenter()

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

    const cerrar = () => {
        limpiarCampos();
        setOpen(false);
    }

    const limpiarCampos = () => {
        setUsername("");
        setPassword("");

        setErrUserName("");
        setErrPass("");

        setVisible(false);

    }

    const validarYEnviar = async () => {
        const formOK = validarCampos();
        if(formOK){
            try {
                const idUsuario = await traerIdUsuario(username, password);
                console.log("id de usuario recuperado en login", idUsuario);
                if(idUsuario){
                    setIdUser(idUsuario);
                    cerrar()
                } else{
                    setErrorLogin("Error, verifique usuario y contraseña")
                }
            } catch (error) {
                console.log(error)
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
        <Dialog open={open} onClose={cerrar}>
            <DialogTitle id="titulo" > LogIn Comerciantes </DialogTitle>
            <DialogContent>

            <TextField
                    style={{margin: 8, width:"80%"}}
                    id="userName"
                    label="Nombre de usuario"
                    variant="outlined"
                    value={username}
                    onChange={e=>{call_setUsername(e.target.value)}}
                    error= {errUserName!== ""? true : false}
                    helperText = {errUserName}
                    
                  />
                  <Box display="flex" alignItems="center">
                    <TextField
                      style={{margin: 8, width:"80%"}}
                      id="password"
                      label="contraseña"
                      variant="outlined"
                      type={visible ? "text" : "password"}
                      value={password}
                      onChange={e=>{call_setPassword(e.target.value)}}
                      error= {errPass!== ""? true : false}
                      helperText = {errPass}
                      
                    />
                    <IconButton onClick={()=>{setVisible(!visible)}}>
                       {
                         visible 
                          ?
                            <VisibilityIcon/>
                          :
                            <VisibilityOffIcon/>
                       }
                    </IconButton>
                  </Box>
                  
                  <Box display="flex" justifyContent="conter">
                      {
                          errorLogin?
                            <Alert severity="warning">{errorLogin} </Alert>
                        :
                        <></>
                      }
                    </Box>
            </DialogContent>
            <DialogActions style={{display:"flex", justifyContent: "space-around"}}>
                <Button onClick={validarYEnviar} variant="contained" color="secondary">
                    Aceptar
                </Button>
                <Button onClick={cerrar} variant="outlined" color="secondary">
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default  ModalLogIn;