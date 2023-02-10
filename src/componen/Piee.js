import React from "react";
import ReactApexChart from "react-apexcharts";

class Piee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 41],

      options: {
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        fill: {
          colors: ["#F44336", "#E91E63", "#9C27B0"],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="300px"
        />
      </div>
    );
  }
}

export default Piee;
