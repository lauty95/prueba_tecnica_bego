import React from 'react'
import './../styles/tasks.css'

function Tasks() {
    return (
        <>
            <div className="upcoming">
                <p>Upcoming Tasks</p><p className="cantidad_tasks">5</p>
            </div>
            <div className="displayTasks">
                <div className="task">
                    <h1>Order #890PO90</h1>
                    <h2>Bryan Williams</h2>
                    <div className="progress">
                        <h2>Progress</h2>
                        <h3>20%</h3>
                    </div>
                    <progress max="100" value="20" />
                    <h3 className="day-left">1 day left</h3>
                </div>
                <div className="task">
                    <h1>Order #890PO90</h1>
                    <h2>Markus Klaus</h2>
                    <div className="progress">
                        <h2>Progress</h2>
                        <h3>95%</h3>
                    </div>
                    <progress max="100" value="95" />
                    <h3 className="day-left">3 day left</h3>
                </div>
                <div className="task">
                    <h1>Order #890PO90</h1>
                    <h2>Robert Williams</h2>
                    <div className="progress">
                        <h2>Progress</h2>
                        <h3>40%</h3>
                    </div>
                    <progress max="100" value="40" />
                    <h3 className="day-left">2 day left</h3>
                </div>
                <div className="task">
                    <h1>Order #890PO90</h1>
                    <h2>Another Williams</h2>
                    <div className="progress">
                        <h2>Progress</h2>
                        <h3>80%</h3>
                    </div>
                    <progress max="100" value="80" />
                    <h3 className="day-left">7 day left</h3>
                </div>
                <div className="task">
                    <h1>Order #890PO90</h1>
                    <h2>No Williams</h2>
                    <div className="progress">
                        <h2>Progress</h2>
                        <h3>45%</h3>
                    </div>
                    <progress max="100" value="45" />
                    <h3 className="day-left">2 day left</h3>
                </div>
            </div>
        </>
    )
}

export default Tasks
