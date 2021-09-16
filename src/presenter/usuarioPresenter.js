import { useState } from "react"
import { UsuarioApi } from "../services/usuarioApi"

export const useUsuarioPresenter = ()=>{

    const [user, setUser] = useState([])

    const traerIdUsuario = async(username, password) =>{
        const res = await UsuarioApi.traerIdUsuario(username, password)
        return res;
    }
    
    return {
        user,
        setUser,
        traerIdUsuario
    }
}