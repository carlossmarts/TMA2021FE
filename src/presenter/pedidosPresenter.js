import { useState } from "react"
import { PedidosApi } from "../services/pedidosApi"

export const usePedidosPresenter = ()=>{

    const [pedidos, setPedidos] = useState([])

    const traerPedidoPorId = async(id) =>{
        const res = await PedidosApi.traerPedidosPorId(id);
        return res;
    }

    const crearPedido = async(body) =>{
        const res = await PedidosApi.crearPedido(body);
        return res;
    }

    const updatePedido = async(estado, body) =>{
        const res = await PedidosApi.updatePedido(estado, body);
        return res;
    }
    
    return {
        pedidos,
        crearPedido,
        setPedidos,
        traerPedidoPorId,
        updatePedido
    }
}