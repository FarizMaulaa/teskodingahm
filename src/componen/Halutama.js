import React from "react";
import AHM from "../image/AHM-removebg-preview.png";

function Halutama() {
  return (
    <div className="h-screen w-screen bg-gray-800">
      <div className="items-center justify-center p-20">
        <div className="items-center justify-center flex flex-col">
          <img className="w-[400px]" src={AHM} />
          <h1 className="text-white text-3xl font-bold -mt-20 text-center">
            PT. ASTRA HONDA MOTOR
          </h1>
        </div>
        <div className="flex justify-center items-center mt-7"></div>
        <div className="text-white text-center ">
          <h1 className="text-2xl font-bold">Digitalization</h1>
          <h1 className="text-2xl font-bold">Assembly Frame Plant 6</h1>
        </div>
        <div className="flex justify-center mt-10 items-center">
          <div className="flex items-center gap-2 text-gray-500">
            <span className="h-10 w-10 block rounded-full border-4 border-t-red-400 animate-spin"></span>
            loading...
          </div>
        </div>
      </div>
      {/* <div className="flex h-10 w-10 justify-center items-center rounded-full border-4 border-t-red-500 animate-spin text-white">
        testing
      </div> */}
    </div>
  );
}

export default Halutama;
