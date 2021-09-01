import { useState } from "react"
import { LocalesApi } from "../services/localesApi"

export const useLocalPresenter = () => {

    const [comercios, setComercios] = useState([])

    const traerLocalesPorLocalidad = async (localidad) => {
        const res = await LocalesApi.traerLocalesPorLocalidad(localidad);
        return res;
    }

    return {
        comercios, setComercios,
        traerLocalesPorLocalidad
    }
}