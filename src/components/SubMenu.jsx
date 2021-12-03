import React from 'react'
import './../styles/submenu.css'

function SubMenu() {
    return (
        <>
            <div className="submenuTitulo">
                <h1>CREATE +</h1>
            </div>

            <ul className="submenu">
                <li className="active">All</li>
                <li>In Progress</li>
                <li>Started</li>
                <li>Completed</li>
            </ul>
        </>
    )
}

export default SubMenu
