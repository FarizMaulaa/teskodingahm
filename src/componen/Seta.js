import React from "react";
import { PieChart, Pie } from "recharts";

const testMeasurments = [
  {
    data: [
      { name: "glucose", value: 6, color: "#57c0e8" },
      { name: "SpO2", value: 5, color: "#FF6565" },
      { name: "Blood Pressure", value: 4, color: "#FFDA83" },
      { name: "Body Weight", value: 2, color: "purple" },
    ],
  },
];

function Seta() {
  return (
    <div>
      <div className=" flex justify-center align-center text-white">
        <h1 className="text-sm font-bold">Graph OEE</h1>
      </div>
      {testMeasurments.map((s) => (
        <PieChart width={400} height={400}>
          <Pie
            data={s.data}
            dataKey="value"
            cx={200}
            cy={200}
            outerRadius={60}
            fill={s.color}
          />
        </PieChart>
      ))}
    </div>
  );
}

export default Seta;
