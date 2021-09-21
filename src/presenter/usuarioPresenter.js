import { useState } from "react"
import { UsuarioApi } from "../services/usuarioApi"

export const useUsuarioPresenter = ()=>{

    const [user, setUser] = useState([])

    const traerIdUsuario = async(username, password) =>{
        const res = await UsuarioApi.traerIdUsuario(username, password)
        return res;
    }

    const traerUsuarioPorUsername = async (username)=>{
        const res = await UsuarioApi.traerUsuarioPorUsername(username);
        return res;
    }
    
    return {
        user,
        setUser,
        traerIdUsuario,
        traerUsuarioPorUsername
    }
}