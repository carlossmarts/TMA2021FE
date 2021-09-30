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

    return {
        comidas, 
        setComidas,
        traerComidasPorComercio,
        eliminarComidas
    }
}