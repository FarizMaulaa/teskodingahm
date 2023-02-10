import React from "react";
import ReactApexChart from "react-apexcharts";

class Table2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [18, 36, 75, 21, 20, 80],
          labels: {
            show: false,
          },
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
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          labels: {
            show: false,
          },
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
      <div className="justify-center items-center max-w-xs ml-1 mt-3 flex p-1 rounded-lg flex-wrap shadow-lg bg-gradient-to-l from-slate-300 via-red-800  to-slate-800">
        <div className="mr-2">
          <h1 className="text-2xl font-bold text-white ">
            {this.state.series.length}
          </h1>
          <h1 className="text-2xl font-bold text-white ">VIEWERS</h1>
        </div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            height={200}
            width={200}
          />
        </div>
      </div>
    );
  }
}
export default Table2;