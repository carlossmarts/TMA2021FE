import { useState } from "react"
import { ComerciosApi } from "../services/comerciosApi"

export const useComercioPresenter = () => {

    const [comercios, setComercios] = useState([])

    const traerComerciosPorLocalidad = async (localidad) => {
        const res = await ComerciosApi.traerComerciosPorLocalidad(localidad);
        return res;
    }

    const traerComercioPorId = async (id) => {
        const res = await ComerciosApi.traerComercioPorId(id);
        return res;
    }

    const traerComercioPorIdDeUsuario = async (id) => {
        const res = await ComerciosApi.traerComercioPorIdDeUsuario(id);
        return res;
    }

    const actualizarComercio = async (body) => {
        const res = await ComerciosApi.actualizarComercio(body);
        return res;
    }

    return {
        comercios, setComercios,
        traerComerciosPorLocalidad, traerComercioPorIdDeUsuario,
        traerComercioPorId, actualizarComercio
    }
}