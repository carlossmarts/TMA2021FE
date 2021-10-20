import { useState } from "react"
import { PedidosApi } from "../services/pedidosApi"

export const usePedidosPresenter = ()=>{

    const [pedidos, setPedidos] = useState([])

    const traerPedidoPorId = async(id) =>{
        const res = await PedidosApi.traerPedidosPorId(id);
        return res;
    }
    
    return {
        pedidos,
        setPedidos,
        traerPedidoPorId
    }
}