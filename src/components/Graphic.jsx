import React from 'react'
import './../styles/graphic.css'
import { Line } from 'react-chartjs-2'

function Graphic() {

    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, '#594200');
        gradient.addColorStop(0.6, '#040B11');
        gradient.addColorStop(1, '#10161C');

        return {
            labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
            datasets: [{
                data: [12, 15, 10, 18, 15, 20],
                fill: 'start',
                backgroundColor: gradient,
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
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: true
                                },
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                            display: false
                                        }
                                    }
                                ]
                            }
                        }
                    }
                />
            </div>
        </div>
    )
}

export default Graphic
