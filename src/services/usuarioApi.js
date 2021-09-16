import axios from 'axios'

export const UsuarioApi = {
    traerIdUsuario : async (username, password)=>{
        try{
            console.log("llamando al servicio usuarioLogin con username", username, "y contraseña", password);
            const res = await axios.post('https://dry-thicket-39505.herokuapp.com/api/Usuario/login',
                                            {
                                                "username": username,
                                                "password": password
                                            }
                                        );
            const locs = await res.data;
            return locs 
        } catch (err){
            console.error(err)
        }

    }
}