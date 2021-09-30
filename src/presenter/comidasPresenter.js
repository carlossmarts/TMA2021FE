import { useState } from "react"
import { ComidasApi } from "../services/comidasApi"

export const useComidaPresenter = () => {

    const [comidas, setComidas] = useState([])

    const traerComidasPorComercio = async (comercio) => {
        const res = await ComidasApi.traerComidasPorComercio(comercio);
        return res;
    }

    const eliminarComidas = async (id) => {
        const res = await ComidasApi.eliminarComidas(id);
        return res;
    }

    const crearComidas = async (body, id) => {
        const res = await ComidasApi.crearComidas(body, id);
        return res;
    }

    const editarComidas = async (body, id) => {
        const res = await ComidasApi.editarComidas(body, id);
        return res;
    }

    return {
        comidas, 
        setComidas,
        traerComidasPorComercio,
        crearComidas,
        eliminarComidas,
        editarComidas
    }
}