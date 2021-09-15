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

    traerComercioPorId: async (id) => {
        try {
            const res = await axios.get(`https://dry-thicket-39505.herokuapp.com/api/Comercio/${id}`);
            const locs = await res.data;
            return locs
        } catch (err) {
            console.error(err)
        }
    },

    traerComercioPorIdDeUsuario: async (id) => {
        try {
            const res = await axios.get(`https://dry-thicket-39505.herokuapp.com/api/Comercio/buscarXIdUsuario/${id}`);
            const locs = await res.data;
            return locs
        } catch (err) {
            console.error(err)
        }
    },

    actualizarComercio: async (body) => {
        try {
            const res = await axios.put('https://dry-thicket-39505.herokuapp.com/api/Comercio', body)
            const locs = await res;
            return locs
        } catch (err) {
            console.error(err)
        }
    }
}