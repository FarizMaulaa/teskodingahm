import React from "react";
import Sayap from "../image/syap.jpg";

function Db() {
  return (
    <div>
      <div className="bg-slate-800">
        <div className="flex justify-between">
          <div className="flex justify-center items-center p-3">
            <a
              class="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1"
              href="#"
            >
              <div className="bg-black p-1">
                <img
                  className="rounded"
                  src={Sayap}
                  width="40px"
                  height="40px"
                />
              </div>
            </a>
            <p className="text-2xl font-bold text-white ml-3">Main Dasboard</p>
          </div>
          <div className="flex justify-center items-center p-3">
            <p className="text-lg font-bold text-white">
              {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Db;
