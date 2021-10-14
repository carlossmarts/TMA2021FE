import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import { useLocalidadPresenter } from '../presenter/localidadesPresenter'
import Typography from '@material-ui/core/Typography'
import { LinearProgress, MenuItem, IconButton, Box } from '@material-ui/core'

const ModalrRegComercio = (props) => {

  //******************** 
  // Props
  //********************

  const {
    open,
    setOpen,
    setUser
  } = props;



  //******************** 
  // Estados
  //********************
  const { localidades, setLocalidades, traerLocalidades } = useLocalidadPresenter();
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

  const call_setNombre = (val) => {
    if (val === "") {
      setErrNombre("este campo no puede estar vacio")
    } else {
      setErrNombre("")
    }
    setNombre(val)
  }

  const call_setDireccion = (val) => {
    if (val === "") {
      setErrDireccion("este campo no puede estar vacio")
    } else {
      setErrDireccion("")
    }
    setDireccion(val)
  }

  const call_setLocalidad = (val) => {
    if (val === "") {
      setErrLocalidad("este campo no puede estar vacio")
    } else {
      setErrLocalidad("")
    }
    setLocalidad(val)
  }

  const call_setTelefono = (val) => {

    const regexNum = /^[0-9]+$/;

    if (val !== "") {
      if (!regexNum.test(val)) {
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

  const cerrar = () => {
    limpiarCampos();
    setOpen(false);
  }

  const limpiarCampos = () => {
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

  const validarCampos = () => {
    let retorno = true;
    if (nombre === "") {
      setErrNombre("Este campo es requerido");
      retorno = false;
    }
    if (direccion === "") {
      setErrDireccion("Este campo es requerido");
      retorno = false;
    }
    if (localidad === "") {
      setErrLocalidad("Este campo es requerido");
      retorno = false;
    }
    if (telefono === "") {
      setErrTelefono("Este campo es requerido");
      retorno = false;
    }
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

  const validarYEnviar = () => {
    const formOK = validarCampos();
    if (formOK) {
      setUser(username); //Esto se tiene que cambiar por una llamada a la api y se debe loguear 
      cerrar()
    }
  }


  return (
    <Dialog open={open} onClose={cerrar}>
      <DialogTitle id="titulo"> Registro de comercio </DialogTitle>
      <DialogContent>

        <TextField
          style={{ margin: 8, width: "80%" }}
          id="userName"
          label="Nombre de usuario"
          variant="outlined"
          value={username}
          onChange={e => { call_setUsername(e.target.value) }}
          error={errUserName !== "" ? true : false}
          helperText={errUserName}

        />
        <Box display="flex" alignItems="center">
          <TextField
            style={{ margin: 8, width: "80%" }}
            id="password"
            label="contraseña"
            variant="outlined"
            type={visible ? "text" : "password"}
            value={password}
            onChange={e => { call_setPassword(e.target.value) }}
            error={errPass !== "" ? true : false}
            helperText={errPass}

          />
          <IconButton onClick={() => { setVisible(!visible) }}>
            {
              visible
                ?
                <VisibilityIcon />
                :
                <VisibilityOffIcon />
            }
          </IconButton>
        </Box>

        <hr style={{ margin: 20 }} />
        <TextField
          style={{ margin: 8, width: "95%" }}
          id="nombre"
          label="Nombre de comercio"
          variant="outlined"
          value={nombre}
          onChange={e => { call_setNombre(e.target.value) }}
          error={errNombre !== "" ? true : false}
          helperText={errNombre}

        />

        <TextField
          style={{ margin: 8, width: "95%" }}
          id="direccion"
          label="Direccion"
          variant="outlined"
          value={direccion}
          onChange={e => { call_setDireccion(e.target.value) }}
          error={errDireccion !== "" ? true : false}
          helperText={errDireccion}

        />

        {
          cargando
            ?
            <LinearProgress />
            :
            <TextField
              style={{ margin: 8, width: "95%" }}
              variant="outlined"
              id="localidad"
              label="localidad"
              value={localidad}
              onChange={(e) => { call_setLocalidad(e.target.value) }}
              select
              error={errLocalidad !== "" ? true : false}
              helperText={errLocalidad}
            >
              {
                localidades.map((l) => (
                  <MenuItem key={l.idLocalidad} value={l.nombre}>
                    {l.nombre}
                  </MenuItem>
                ))
              }
            </TextField>
        }

        <TextField
          style={{ margin: 8, width: "95%" }}
          id="telefono"
          label="Telefono"
          variant="outlined"
          value={telefono}
          onChange={e => { call_setTelefono(e.target.value) }}
          error={errTelefono !== "" ? true : false}
          helperText={errTelefono}

        />

      </DialogContent>
      <DialogActions style={{ display: "flex", justifyContent: "center" }} >
        <Button onClick={validarYEnviar} variant="contained" color="secondary">
          Registrarme
        </Button>
        <Button onClick={cerrar} variant="outlined" color="secondary">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalrRegComercio;
