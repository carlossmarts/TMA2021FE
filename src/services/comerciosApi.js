import axios from 'axios'

export const ComerciosApi = {
    traerComerciosPorLocalidad: async (localidad) => {
        try {
            const res = await axios.get(`https://dry-thicket-39505.herokuapp.com/api/Comercio/buscar/${localidad}`);
            const locs = await res.data;
            return locs
        } catch (err) {
            console.error(err)
        }
    },

    traerComerciosPorLocalidadYCategoria: async (localidad, categoria) => {
        try {
            const res = await axios.get(`https://dry-thicket-39505.herokuapp.com/api/Comercio/buscar/${localidad}?idCategoria=${categoria}`);
            const locs = await res.data;
            return locs
        } catch (err) {
            console.error(err)
        }
    },

    traerComercioPorId: async (id) => {
        try {
            const res = await axios.get(`https://dry-thicket-39505.herokuapp.com/api/Comercio/${id}`);
            const locs = await res.data;
            return locs
        } catch (err) {
            console.error(err)
        }
    }
}