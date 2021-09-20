import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import { Estilos } from '../style/estilos'
import { Alert } from '@material-ui/lab'

import { useHistory } from 'react-router'

import { useLocalidadPresenter } from '../presenter/localidadesPresenter'
import { useUsuarioPresenter } from '../presenter/usuarioPresenter'
import { useComercioPresenter } from '../presenter/comerciosPresenter'
import { 
        Grid,
        Typography,
        LinearProgress,
        MenuItem, 
        IconButton, 
        Box,
        Container,
        Paper,
        TextField, 
        makeStyles
    } from '@material-ui/core'


const useStyles = makeStyles((theme) => Estilos(theme));

const Registro = () => {


    const classes = useStyles()

    //******************** 
    // Hooks
    //********************
    const history = useHistory();
   
    const { localidades, setLocalidades, traerLocalidades } = useLocalidadPresenter();

    const {traerUsuarioPorUsername, traerIdUsuario } = useUsuarioPresenter();

    const {altaComercioYUsuario } = useComercioPresenter();

     //******************** 
    // Estados
    //********************
    const [cargando, setCargando] = useState(true);
    const [visible, setVisible] = useState(false);

    const [nombre, setNombre] = useState("");
    const [errNombre, setErrNombre] = useState("");

    const [direccion, setDireccion] = useState("");
    const [errDireccion, setErrDireccion] = useState("");
    
    const [localidad, setLocalidad] = useState("");
    const [errLocalidad, setErrLocalidad] = useState("");
    
    const [telefono, setTelefono] = useState("");
    const [errTelefono, setErrTelefono] = useState("");

    const [username, setUsername] = useState("");
    const [errUserName, setErrUserName] = useState("");

    const [password, setPassword] = useState("");
    const [errPass, setErrPass] = useState("");

    const [alertMsg, setAlertMsg] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("")



     //******************** 
    // setters
    //********************
    const call_setUsername = (val)=>{
      if(val === ""){
        setErrUserName("este campo no puede estar vacio")
      } else{
        setErrUserName("")
      }
      setUsername(val)
    }

    const call_setPassword = (val)=>{
      if(val === ""){
        setErrPass("este campo no puede estar vacio")
      } else{
        setErrPass("")
      }
      setPassword(val)
    }

    const call_setNombre = (val)=>{
      if(val === ""){
        setErrNombre("este campo no puede estar vacio")
      } else{
        setErrNombre("")
      }
      setNombre(val)
    }

    const call_setDireccion = (val)=>{
      if(val === ""){
        setErrDireccion("este campo no puede estar vacio")
      } else{
        setErrDireccion("")
      }
      setDireccion(val)
    }

    const call_setLocalidad = (val)=>{
      if(val === ""){
        setErrLocalidad("este campo no puede estar vacio")
      } else{
        setErrLocalidad("")
      }
      setLocalidad(val)
    }

    const call_setTelefono = (val)=>{

      const regexNum = /^[0-9]+$/;

      if (val !== ""){
        if(!regexNum.test(val)){
          setErrTelefono("Ingrese solo valores numericos");
        } else {
          setErrTelefono("");
          setTelefono(val);
        }
      } else {
        setErrTelefono("este campo no puede estar vacio");
        setTelefono(val);
      }
    }

    //******************** 
    // Effects
    //********************

    useEffect(() => {
      traerLocalidades().then(data => setLocalidades(data)).catch(err => console.log(err))
    }, [])

    useEffect(() => {
      setCargando(false)
    }, [localidades])
    
    
    //******************** 
    // Funciones
    //********************


    const limpiarCampos = ()=>{
      setNombre("");
      setDireccion("");
      setLocalidad("");
      setTelefono("");
      setUsername("");
      setPassword("");

      setErrNombre("");
      setDireccion("");
      setErrLocalidad("");
      setErrTelefono("");
      setErrUserName("");
      setErrPass("");

      setVisible(false);

    }

    const validarCampos = ()=>{
      let retorno = true;
      if (nombre===""){
        setErrNombre("Este campo es requerido");
        retorno = false;
      }
      if (direccion===""){
        setErrDireccion("Este campo es requerido");
        retorno = false;
      }
      if (localidad===""){
        setErrLocalidad("Este campo es requerido");
        retorno = false;
      }
      if (telefono===""){
        setErrTelefono("Este campo es requerido");
        retorno = false;
      }
      if (username===""){
        setErrUserName("Este campo es requerido");
        retorno = false;
      }
      if (password===""){
        setErrPass("Este campo es requerido");
        retorno = false;
      }

      return retorno;
    }

    const validarYEnviar = async() => {
      const formOK = validarCampos();
      if(formOK){

        try {
            const existeUsuario = await traerUsuarioPorUsername(username)
            if(existeUsuario){
                console.log("id de usuario recuperado", existeUsuario.id);
                setAlertSeverity("info")
                setAlertMsg("Ya existe un usuario con ese nombre")
            } else {
                const nuevoComercio = {
                    "idComercio": 0,
                    "nombre": nombre,
                    "direccion": direccion,
                    "localidad": localidad,
                    "telefono": telefono.toString(),
                    "calificacion": 0,
                    "logo": "",
                    "descripcion": "",
                    "usuario": {
                      "id": 0,
                      "username": username,
                      "password": password
                    },
                    "categorias": []
                  }

                await altaComercioYUsuario(nuevoComercio)

                const idUsuario = await traerIdUsuario(username, password);
                 history.push({
                    pathname:"/gestion",
                    state: {idUsuario}
                })
            }
        } catch (error) {
            console.log(error)
            setAlertSeverity("error")
            setAlertMsg("Error, intente nuevamente")
        }

      }
  }
  const irAHome = ()=>{
    limpiarCampos()
    history.push("/")
}
        
    return (
        <>
        <Box m={8}/>
            <Container maxWidth="sm" >

                <Paper className={classes.paper}>
                    <Box m={4}>

                        <Grid container spacing={2}>

                            <Grid container item justifyContent="center" >
                                <Box m={3}>
                                    <Typography variant="h5" color="initial"> Registrarme</Typography>
                                </Box>
                            </Grid>

                            <Grid item container>
                                <TextField
                                    fullWidth
                                    id="userName"
                                    label="Nombre de usuario"
                                    variant="outlined"
                                    value={username}
                                    onChange={e=>{call_setUsername(e.target.value)}}
                                    error= {errUserName!== ""? true : false}
                                    helperText = {errUserName}
                                    
                                    />
                            </Grid>
                            <Grid item container>
                                <TextField
                                    fullWidth
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

                            <Grid item container justifyContent="center" >

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
                            
                            
                            <hr style={{width: "100%"}} />
                            

                            <Grid container item>
                                <TextField
                                    fullWidth
                                    id="nombre"
                                    label="Nombre de comercio"
                                    variant="outlined"
                                    value={nombre}
                                    onChange={e=>{call_setNombre(e.target.value)}}
                                    error= {errNombre!== ""? true : false}
                                    helperText = {errNombre}
                                    
                                />
                            </Grid>

                            <Grid container item>
                                <TextField
                                    fullWidth
                                    id="direccion"
                                    label="Direccion"
                                    variant="outlined"
                                    value={direccion}
                                    onChange={e=>{call_setDireccion(e.target.value)}}
                                    error= {errDireccion!== ""? true : false}
                                    helperText = {errDireccion}
                                    
                                />
                            </Grid>

                            <Grid container item>                            
                                {
                                cargando 
                                ? 
                                    <LinearProgress/>
                                :
                                <TextField
                                fullWidth
                                variant="outlined"
                                id="localidad"
                                label="localidad"
                                value={localidad}
                                onChange={(e)=>{call_setLocalidad(e.target.value)}}
                                select
                                error= {errLocalidad !== "" ? true : false}
                                helperText={errLocalidad}
                                >
                                    {
                                        localidades.map((l)=>(
                                            <MenuItem key={l.idLocalidad} value={l.nombre}>
                                                {l.nombre}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                                }
                            </Grid>

                            <Grid container item>
                                <TextField
                                    fullWidth
                                    id="telefono"
                                    label="Telefono"
                                    variant="outlined"
                                    value={telefono}
                                    onChange={e=>{call_setTelefono(e.target.value)}}
                                    error= {errTelefono!== ""? true : false}
                                    helperText = {errTelefono}
                                    
                                />
                            </Grid>

                        </Grid>
                    </Box>


                    <Box display="flex" justifyContent="center">
                      {
                          alertMsg?
                            <Alert severity={alertSeverity}>{alertMsg} </Alert>
                        :
                        <></>
                      }
                    </Box>
                    <Box m={2} display="flex" justifyContent="space-around" alignItems="center">
                        <Button onClick={validarYEnviar} variant="contained" color="secondary">
                            Aceptar
                        </Button>
                        <Button onClick={irAHome} variant="outlined" color="secondary">
                            Cancelar
                        </Button>

                    </Box>


                </Paper >
            </Container>
        </>
       

    )
}

export default Registro
