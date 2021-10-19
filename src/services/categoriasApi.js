import axios from 'axios'

export const CategoriasApi = {

    traerCategorias: async () => {
        try {
            const res = await axios.get(`https://dry-thicket-39505.herokuapp.com/api/Categoria`);
            const locs = await res.data;
            return locs
        } catch (err) {
            console.error(err)
        }
    },

}