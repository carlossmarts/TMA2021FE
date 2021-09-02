import axios from 'axios'

export const LocalidadesApi = {
    traerLocalidades : async ()=>{
        try{
            const res = await axios.get('https://dry-thicket-39505.herokuapp.com/api/Localidad');
            const locs = await res.data;
            return locs 
        } catch (err){
            console.error(err)
        }

    }
}