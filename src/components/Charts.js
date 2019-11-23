import React from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";

export default class BarChart extends React.Component {
  render() {
    return (
      <div className="chart">
        <h1>Bar Chart</h1>
        <Bar
          data={this.props.data}
          width={50}
          height={50}
          options={{
            redraw: true,

            scales: {
              xAxes: [
                {
                  display: true
                }
              ],
              yAxes: [
                {
                  display: true
                }
              ]
            }
          }}
        />

        <Link to="/">Test</Link>
        <Link to="/median">Test2</Link>
        <Link to="/medianviews">Test2</Link>
      </div>
    );
  }
}
