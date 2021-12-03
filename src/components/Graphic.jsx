import React from 'react'
import './../styles/graphic.css'

function Graphic() {
    return (
        <div className="graphic">
            <ul className="filters">
                <li><div className="">Day</div></li>
                <li><div className="">Week</div></li>
                <li><div className="active">Month</div></li>
                <li><div className="">Year</div></li>
            </ul>
            <div className="valor">
                <h3>$</h3>
                <h1>13,543</h1>
            </div>
        </div>
    )
}

export default Graphic
