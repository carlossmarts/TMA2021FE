import { useState } from "react"
import { ComerciosApi } from "../services/comerciosApi"

export const useComercioPresenter = () => {

    const [comercios, setComercios] = useState([])

    const traerComerciosPorLocalidad = async (localidad) => {
        const res = await ComerciosApi.traerComerciosPorLocalidad(localidad);
        return res;
    }

    const traerComerciosPorLocalidadYCategoria = async (localidad, categoria) => {
        const res = await ComerciosApi.traerComerciosPorLocalidadYCategoria(localidad, categoria);
        return res;
    }

    const traerComercioPorId = async (id) =>{
        const res = await ComerciosApi.traerComercioPorId(id);
        return res;
    }

    return {
        comercios, setComercios,
        traerComerciosPorLocalidad,
        traerComerciosPorLocalidadYCategoria,
        traerComercioPorId
    }
}