import axios from 'axios'

export const ComidasApi = {
    traerComidasPorComercio: async (comercio) => {
        try {
            const res = await axios.get(`https://dry-thicket-39505.herokuapp.com/api/Producto/comercio/${comercio}`);
            const locs = await res.data;
            return locs
        } catch (err) {
            console.error(err)
        }
    },

    eliminarComidas: async (id) => {
        try {
            const res = await axios.delete(`https://dry-thicket-39505.herokuapp.com/api/Producto/${id}`);
            const status = res.status;
            return status
        } catch (err) {
            console.error(err)
        }
    },

    crearComidas: async (body, id) => {
        try {
            const res = await axios.post(`https://dry-thicket-39505.herokuapp.com/api/Producto/${id}`, body);
            const locs = await res.status;
            return locs
        } catch (err) {
            console.error(err)
        }
    },

    editarComidas: async (body) => {
        try {
            const res = await axios.put(`https://dry-thicket-39505.herokuapp.com/api/Producto/`, body);
            const locs = await res.status;
            return locs
        } catch (err) {
            console.error(err)
        }
    },
}