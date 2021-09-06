import { useState } from "react"
import { ComidasApi } from "../services/comidasApi"

export const useComidaPresenter = () => {

    const [comidas, setComidas] = useState([])

    const traerComidasPorComercio = async (comercio) => {
        const res = await ComidasApi.traerComidasPorComercio(comercio);
        return res;
    }
    return {
        comidas, 
        setComidas,
        traerComidasPorComercio,
    }
}