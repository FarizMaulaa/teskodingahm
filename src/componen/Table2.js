import React from "react";
import ReactApexChart from "react-apexcharts";

class Table2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [120, 110, 115, 120, 125],
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
          categories: ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at"],
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
      <div className="justify-center items-center max-w-xs m-1 flex p-1 rounded-lg flex-wrap shadow-lg bg-white">
        <div className="m-1">
          <h1 className="text-sm font-bold text-black ">HARI</h1>
          <h1 className="text-xl font-bold text-black ">PRODUKSI</h1>
          <h1 className="text-3xl text-center font-bold text-black ">590</h1>
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
export default Table2;
