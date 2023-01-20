import React from "react";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

const data = [
  {
    name: "",
    pv: 0,
    amt: 0,
  },
  {
    name: "Jan",
    pv: 80,
    amt: 80,
  },
  {
    name: "Feb",
    pv: 60,
    amt: 60,
  },
  {
    name: "Mar",
    pv: 40,
    amt: 40,
  },
  {
    name: "Apr",
    pv: 50,
    amt: 50,
  },
  {
    name: "Mei",
    pv: 75,
    amt: 75,
  },
  {
    name: "Jun",
    pv: 90,
    amt: 90,
  },
];

function Setbb() {
  return (
    <div>
      <div className="justify-center items-center max-w-lg flex p-[80px] rounded-lg flex-wrap shadow-lg bg-gray-700">
        <LineChart width={300} height={100} data={data}>
          <XAxis dataKey="name" stroke="#FFFF" />
          <Tooltip stroke="#FFFF" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
  );
}

export default Setbb;
