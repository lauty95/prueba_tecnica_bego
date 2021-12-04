import React from 'react'
import notifiador from './../assets/campana.svg'
import './../styles/notifications.css'

function Notifications({ show }) {
    return (
        <div className="notifi-box" style={
            show ?
                {
                    height: '500px',
                    opacity: '1'
                } :
                {
                    height: '0px',
                    opacity: '0'
                }}
        >
            <h2>Notifications <span>0</span></h2>
            <div className="notifi-item">
                <img src={notifiador} alt="notificaciones" />
                <div className="text">
                    <h3>No notifications</h3>
                    <p>When you have a notifications, it will show here</p>
                </div>
            </div>
        </div>
    )
}

export default Notifications
