import React from "react";
import Seta from "./Seta";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 45,
    pv: 80,
    amt: 80,
  },
  {
    name: "Feb",
    uv: 95,
    pv: 90,
    amt: 95,
  },
  {
    name: "Mar",
    uv: 70,
    pv: 60,
    amt: 70,
  },
  {
    name: "Apr",
    uv: 85,
    pv: 30,
    amt: 85,
  },
  {
    name: "May",
    uv: 70,
    pv: 60,
    amt: 70,
  },
  {
    name: "Jun",
    uv: 95,
    pv: 80,
    amt: 95,
  },
];

function Content() {
  return (
    <div>
      <div>
        <div class="flex justify-center mt-2">
          <div class="block p-6 rounded-lg shadow-lg bg-gray-700 max-w-sm ">
            <div>
              <Seta />
            </div>
            <div className="text-white">
              <div className="flex">
                <div className="flex">
                  <div className=" h-[10px] w-[10px] bg-green-500 rounded-[50%]"></div>
                  <p>Running</p>
                </div>
                <div className="flex">
                  <div className=" h-[10px] w-[10px] bg-red-500 rounded-[50%]"></div>
                  <p>Area Polling 3</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex">
                  <div className=" h-[10px] w-[10px] bg-yellow-500 rounded-[50%]"></div>
                  <p>Area Polling 2</p>
                </div>
                <div className="flex">
                  <div className=" h-[10px] w-[10px] bg-orange-500 rounded-[50%]"></div>
                  <p>Area Polling 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* production Daily */}
        <div class="block p-6 rounded-lg shadow-lg bg-gray-700 max-w-sm text-white ">
          <div className="flex flex-row">
            <div className="basis-1/2">
              <h1 className="text-l font-bold">Production Daily</h1>
            </div>
            <div className="basis-1/2">
              <div className="flex">
                <h4 className="mr-2">Type</h4>
                <select className="text-black">
                  <option value=""></option>
                  <option value="areaPolling1">Area Polling 1</option>
                  <option value="areaPolling2">Area Polling 2</option>
                  <option value="areaPolling3">Area Polling 3</option>
                  <option value="areaPolling4">Area Polling 4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex flex-row">
              <p className="basis-1/2">Area Polling 1</p>
              <p className="basis-1/2 text-end">0/2200</p>
            </div>
            <div className="bg-gray-300 p-2"></div>
          </div>
          <div className="mt-3">
            <div className="flex flex-row">
              <p className="basis-1/2">Area Polling 2</p>
              <p className="basis-1/2 text-end">0/2200</p>
            </div>
            <div className="bg-gray-300 p-2"></div>
          </div>
          <div className="mt-3">
            <div className="flex flex-row">
              <p className="basis-1/2">Area Polling 3</p>
              <p className="basis-1/2 text-end">0/2200</p>
            </div>
            <div className="bg-gray-300 p-2"></div>
          </div>
          <div className="mt-3">
            <div className="flex flex-row">
              <p className="basis-1/2">Area Polling 4</p>
              <p className="basis-1/2 text-end">0/2200</p>
            </div>
            <div className="bg-gray-300 p-2"></div>
          </div>
        </div>
        {/* terakhir bawah */}
        <div class=" block  mt-5 rounded-lg shadow-lg bg-gray-700 max-w-sm text-white ">
          <div className="justify-center items-center flex p-10 mr-7">
            <BarChart
              width={400}
              height={250}
              data={data}
              margin={{
                top: 5,
                right: 5,
                left: 5,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" stroke="#FFFF" />
              <YAxis stroke="#FFFF" />
              <Tooltip stroke="#FFFF" />
              <Bar dataKey="pv" fill="#00FF00" />
              <Bar dataKey="uv" fill="#FFFF00" />
            </BarChart>
          </div>
        </div>
      </div>
      {/* terakhir kanan */}
      <div class="block p-2 mt-5 rounded-lg shadow-lg bg-gray-700 max-w-sm text-white ">
        <div className="mt-14">
          <div class="flex flex-row">
            <p className="basis-1/3">Area Polling 1</p>
            <div className="basis-1/2">
              <div className="bg-red-500 p-2 rounded-full w-[130%]"></div>
              <div className="bg-yellow-300 p-2 rounded-full mt-2 w-[75%]"></div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div class="flex flex-row">
            <p className="basis-1/3">Area Polling 2</p>
            <div className="basis-1/2">
              <div className="bg-red-500 p-2 rounded-full w-[100%]"></div>
              <div className="bg-yellow-300 p-2 rounded-full mt-2 w-[110%]"></div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div class="flex flex-row">
            <p className="basis-1/3">Area Polling 3</p>
            <div className="basis-1/2">
              <div className="bg-red-500 p-2 rounded-full w-[60%]"></div>
              <div className="bg-yellow-300 p-2 rounded-full mt-2 w-[70%]"></div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div class="flex flex-row">
            <p className="basis-1/3">Area Polling 4</p>
            <div className="basis-1/2">
              <div className="bg-red-500 p-2 rounded-full w-[100%]"></div>
              <div className="bg-yellow-300 p-2 rounded-full mt-2 w-[110%]"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-row m-5">
          <div className="basis-1/3"></div>
          <div className="basis-1/2 flex text-sm font-bold space-x-12 ">
            <p className="">0</p>
            <p className="">50</p>
            <p className="">100</p>
            <p className="">150</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
