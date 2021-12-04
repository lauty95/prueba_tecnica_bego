import React, { useState } from 'react'
import './../styles/nav.css'
import notifiador from './../assets/campana.svg'
import back from './../assets/back.svg'
import Notifications from './Notifications'

function Nav() {
    const [show, setShow] = useState(false)
    return (
        <div className="navbar">
            <img src={back} alt="boton de retroceso" />
            <h1>Tasks</h1>
            <img src={notifiador} alt="campana de notificaciones" onClick={() => setShow(!show)} />
            <Notifications show={show} />
        </div>
    )
}

export default Nav
