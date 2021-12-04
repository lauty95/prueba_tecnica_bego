import React from 'react'
import './../styles/graphic.css'
import { Line } from 'react-chartjs-2'

function Graphic() {

    const month = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
    const values = [12, 15, 10, 18, 15, 20]

    const tooltipLine = {
        id: 'tooltipLine',
        afterDraw: chart => {
            if (chart.tooltip._active && chart.tooltip._active.length) {
                const ctx = chart.ctx;
                ctx.save();
                const activePoint = chart.tooltip._active[0];
                ctx.beginPath();
                ctx.moveTo(activePoint.tooltipPosition().x, activePoint.tooltipPosition().y);
                ctx.lineTo(activePoint.tooltipPosition().x, chart.chartArea.bottom);
                ctx.lineWidth = '0.1em';
                ctx.strokeStyle = 'white';
                ctx.stroke();
                ctx.restore()
            }
        }
    }

    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, '#594200');
        gradient.addColorStop(0.6, '#10161C');
        gradient.addColorStop(1, '#10161C');

        return {
            labels: month,
            datasets: [{
                data: values,
                stroke: 'start',
                backgroundColor: gradient,
                borderColor: '#FFBE00',
                borderWidth: 1
            }]
        }
    }

    const options = {
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
        },
        tooltips: {
            xPadding: 20,
            yPadding: 10,
            displayColors: false,
            bodyFontSize: 16,
            bodyFontStyle: 'bold',
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'index',
            intersect: false
        },
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
                    options={options}
                    plugins={[tooltipLine]}
                />
            </div>
        </div>
    )
}

export default Graphic
