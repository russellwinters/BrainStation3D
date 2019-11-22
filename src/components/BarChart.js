import React from 'react';
import { Bar } from 'react-chartjs-2';
import toptendata from '../data/data'


export default class BarChart extends React.Component {
    state= {
        data: toptendata
    }
    changeData = (data) => {
       this.setState({
           data: data
       })
    }
    
    render() {
    
        return (
            <div className="chart">
            <h1>Bar Chart</h1>
            <Bar
                data={this.state.data}
                width="400"
                height="400"
                options={{
                    maintainAspectRatio: false
                }}
            />
             
        </div>
        )
    }
}
