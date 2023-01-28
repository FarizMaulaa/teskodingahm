import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "00:00",
    uv: 50,
    amt: 500,
  },
  {
    name: "00:02",
    uv: 80,
    amt: 80,
  },
  {
    name: "00:04",
    uv: 100,
    amt: 100,
  },
  {
    name: "06:00",
    uv: 145,
    amt: 145,
  },
  {
    name: "08:00",
    uv: 150,
    amt: 150,
  },
  {
    name: "10:00",
    uv: 180,
    amt: 180,
  },
  {
    name: "12:00",
    uv: 190,
    amt: 190,
  },
  {
    name: "14:00",
    uv: 195,
    amt: 195,
  },
  {
    name: "16:00",
    uv: 198,
    amt: 198,
  },
  {
    name: "12:00",
    uv: 195,
    amt: 195,
  },
  {
    name: "12:00",
    uv: 196,
    amt: 196,
  },
  {
    name: "22:00",
    uv: 198,
    amt: 198,
  },
];

function Setb() {
  return (
    <div class="">
      <div className="justify-center items-center max-w-lg flex p-5 rounded-lg flex-wrap shadow-lg bg-gray-700">
        <div className="flex justify-end items-end">
          <h1 className="text-l font-bold text-white mt-4 mb-5">
            Production Daily
          </h1>
        </div>

        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" stroke="#FFFF" />
          <YAxis stroke="#FFFF" />
          <Tooltip stroke="#FFFF" />
          <Line type="monotone" dataKey="uv" stroke="#FFFF00" />
        </LineChart>
      </div>
    </div>
  );
}
export default Setb;
