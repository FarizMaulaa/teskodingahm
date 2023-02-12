import React from "react";
import ReactApexChart from "react-apexcharts";

class Table1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [36, 45, 57, 70, 120],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
            tools: {
              download: false,
            },
          },
          type: "area",
          height: 350,
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
        xaxis: {
          categories: ["08.00", "10.00", "12.00", "14.00", "16.00"],
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      },
    };
  }
  render() {
    return (
      <div className="justify-center items-center max-w-xs flex m-1 p-1 rounded-lg flex-wrap shadow-lg bg-white">
        <div className="m-1">
          <h1 className="text-sm font-bold text-black ">JAM</h1>
          <h1 className="text-xl font-bold text-black ">PRODUKSI</h1>
          <h1 className="text-3xl text-center font-bold text-black ">120</h1>
        </div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={200}
            width={200}
          />
        </div>
      </div>
    );
  }
}
export default Table1;
