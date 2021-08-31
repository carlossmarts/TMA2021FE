import axios from 'axios'

export const LocalidadesApi = {
    traerLocalidades : async ()=>{
        try{
            const res = await axios.get('https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.5/download/localidades.json');
            const locs = await res.data;
            return locs 
        } catch (err){
            console.error(err)
        }

    }
}