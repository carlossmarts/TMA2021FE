import axios from 'axios'

export const LocalesApi = {
    traerLocalesPorLocalidad: async (localidad) => {
        try {
            const res = await axios.get(`https://dry-thicket-39505.herokuapp.com/api/Comercio/buscar/${localidad}`);
            const locs = await res.data;
            return locs
        } catch (err) {
            console.error(err)
        }

    }
}