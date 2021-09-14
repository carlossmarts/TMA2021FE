import React from 'react'

const GestionComercio = () => {

    return (
        <>
        {
            localStorage.getItem("user") === "" ?
            <p> No estas logueado</p>
            :
            <p> {`Acceso a gestion de comercio de usuario  ${localStorage.getItem("user")}`} </p>
        }
        </>       
    )
}

export default GestionComercio;