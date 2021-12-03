import React from 'react'
import './../styles/nav.css'
import notifiador from './../assets/campana.svg'
import back from './../assets/back.svg'

function Nav() {
    return (
        <div className="navbar">
            <img src={back} alt="boton de retroceso" />
            <h1>Tasks</h1>
            <img src={notifiador} alt="campana de notificaciones" />
        </div>
    )
}

export default Nav
