import React from "react";

function Content() {
  return (
    <div>
      <div>
        <div class="flex justify-center mt-2">
          <div class="block p-6 rounded-lg shadow-lg bg-gray-700 max-w-sm ">
            <div className=" flex justify-center align-center text-white">
              <h1 className="text-sm font-bold">Graph OEE</h1>
            </div>
            <div>
              <div className=" h-[100px] w-[100px] bg-red-500 rounded-[50%]"></div>
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
      </div>
    </div>
  );
}

export default Content;
