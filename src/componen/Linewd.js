import React from "react";
import ReactApexChart from "react-apexcharts";

class Linewd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51],
        },
      ],
      options: {
        chart: {
          height: 150,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Product Trends by Month",
          align: "center",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr"],
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div className="text-red-500">
          <h1>123</h1>
          <h1>DATA</h1>
        </div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={150}
          />
        </div>
      </div>
    );
  }
}
export default Linewd;
