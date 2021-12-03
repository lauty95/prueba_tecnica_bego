import React from 'react'
import './../styles/statick.css'
import download from './../assets/download.svg'
import down_arrow from './../assets/down_arrow.svg'
import blocks from './../assets/blocks.svg'
import flash from './../assets/flash.svg'
import checked from './../assets/checked.svg'
import clock from './../assets/clock.svg'

function Statics() {
    return (
        <>
            <div className="statick">
                <h1>Statics</h1>
                <div className="boton">
                    <div className="botonDescargaIzq">
                        <img src={download} />
                    </div>
                    <div className="botonDescargaDer">
                        <img src={down_arrow} />
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="seccion-details up-left">
                    <div className="logotipo">
                        <img src={blocks} width="40px" height="40px" alt="logotipo" />
                    </div>
                    <div>
                        <h1>50</h1>
                        <h2>Total projects</h2>
                    </div>
                </div>
                <div className="seccion-details up-right">
                    <div className="logotipo">
                        <img src={checked} width="20px" height="20px" alt="logotipo" />
                    </div>
                    <div>
                        <h1>15</h1>
                        <h2>Completed</h2>
                    </div>
                </div>
                <div className="seccion-details down-left">
                    <div className="logotipo">
                        <img src={flash} width="17px" height="28px" alt="logotipo" />
                    </div>
                    <div>
                        <h1>10</h1>
                        <h2>In Progress</h2>
                    </div>
                </div>
                <div className="seccion-details down-right">
                    <div className="logotipo">
                        <img src={clock} width="22px" height="23px" alt="logotipo" />
                    </div>
                    <div>
                        <h1>2</h1>
                        <h2>Delayed</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statics
