import { useState } from "react"
import { CategoriasApi } from "../services/categoriasApi"

export const useCategoriasPresenter = ()=>{

    const [categorias, setCategorias] = useState([])

    const traerCategorias = async() =>{
        const res = await CategoriasApi.traerCategorias()
        return res;
    }
    
    return {
        categorias,
        setCategorias,
        traerCategorias
    }
}