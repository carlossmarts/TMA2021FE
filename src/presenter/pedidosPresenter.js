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
    
    return {
        pedidos,
        crearPedido,
        setPedidos,
        traerPedidoPorId
    }
}