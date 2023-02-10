import React from "react";
import Sayap from "../image/syap.jpg";

function Dasboard() {
  return (
    <div>
      <nav class="relative w-full flex flex-wrap items-center justify-between py-4 bg-slate-800 shadow-lg">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div class="container-fluid">
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
            <div className="flex flex-row-reverse space-x-4 space-x-reverse">
              <p className="text-2xl font-bold text-white ml-3">
                Main Dasboard
              </p>
              <p className="text-2xl font-bold text-white">
                {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Dasboard;
