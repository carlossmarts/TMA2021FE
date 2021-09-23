import { useState } from "react"
import { LocalidadesApi } from "../services/localidadesApi"

export const useLocalidadPresenter = ()=>{

    const [localidades, setLocalidades] = useState([])

    const traerLocalidades = async() =>{
        const res = await LocalidadesApi.traerLocalidades();
        return res;
    }
    
    return {
        localidades,
        setLocalidades,
        traerLocalidades
    }
}