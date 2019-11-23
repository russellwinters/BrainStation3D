import React from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";

export default class BarChart extends React.Component {
  render() {
    return (
      <div className="chart">
        <h1>Median Views Per Talk</h1>
        <Bar
          data={this.props.data}
          height={100}
          width={300}
          options={{
            redraw: true,
            maintainAspectRatio: false,
            maintainAspectRatio: false,
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
        <Link className="button" to="/">
          {" "}
          Categories
        </Link>
        <Link className="button" to="/medianviews">
          Median Views
        </Link>
        <Link className="button" to="/median">
          Median Duration
        </Link>
      </div>
    );
  }
}
