import axios from 'axios'

export const PedidosApi = {

    traerPedidosPorId: async (id) => {
        try {
            const res = await axios.get(`https://dry-thicket-39505.herokuapp.com/api/Pedido/porid/${id}`);
            const locs = await res.data;
            return locs
        } catch (err) {
            console.error(err)
        }
    },

}