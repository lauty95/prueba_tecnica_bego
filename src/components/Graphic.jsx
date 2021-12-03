import React from 'react'
import './../styles/graphic.css'
import { Line } from 'react-chartjs-2'

function Graphic() {

    const data = (canvas) => {

        const degrade = ({ gradient, a, b, c, d }) => {
            const ctx = canvas.getContext("2d");
            gradient = ctx.createLinearGradient(a, b, c, d);
            gradient.addColorStop(0, '#594200');
            gradient.addColorStop(0.6, '#040B11');
            gradient.addColorStop(1, '#10161C');
            return gradient
        }

        return {
            labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
            datasets: [{
                data: [12, 15, 10, 18, 15, 20],
                fill: 'start',
                backgroundColor: [
                    degrade({ gradient: '', a: 0, b: 0, c: 0, d: 100 }),
                    degrade({ gradient: '', a: 0, b: 0, c: 0, d: 80 }),
                    degrade({ gradient: '', a: 0, b: 0, c: 0, d: 120 }),
                    degrade({ gradient: '', a: 0, b: 0, c: 0, d: 50 }),
                    degrade({ gradient: '', a: 0, b: 0, c: 0, d: 100 }),
                    degrade({ gradient: '', a: 0, b: 0, c: 0, d: 180 }),
                    degrade({ gradient: '', a: 0, b: 0, c: 0, d: 100 }),
                ],
                borderColor: '#FFBE00',
                borderWidth: 1
            }]
        }
    }

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
            <div className="grafico">
                <Line
                    data={data}
                    height={200}
                    width={200}
                    options={
                        {
                            elements: {
                                point: {
                                    radius: 0
                                }
                            },
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [
                                    {
                                        gridLines: {
                                            drawBorder: true,
                                            display: false
                                        },
                                        ticks: {
                                            beginAtZero: true,
                                            display: false
                                        }
                                    }
                                ],
                                xAxes: [{
                                    gridLines: {
                                        drawBorder: true,
                                        display: false
                                    }
                                }]
                            }
                        }
                    }
                />
            </div>
        </div>
    )
}

export default Graphic
