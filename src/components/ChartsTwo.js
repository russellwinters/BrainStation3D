import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Link} from 'react-router-dom'

export default class BarChart extends React.Component {

    
    render() {
        
            return (
                <div className="chart">
                <h1>Median Talk Duration</h1>
                <Bar className = "test"
                    height = {300}
                    width = {300}
                    data={this.props.data}
                    width={500}
                    height={400}
                    options={{
                        redraw: true,
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                display: true
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true,
                                    min: 0,
                                    max: 20
                                }
                              }]
                          }
                    }}

                    
                />
           
                <Link className = "button" to = "/"> Categories</Link>
                <Link  className = "button" to = "/medianviews">Median Views</Link>
                <Link  className = "button"to = "/median">Median Duration</Link>
            </div>
            ) 
        }
        
}
