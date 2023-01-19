import React from "react";
import AHM from "../image/bgahm.jpg";

function Halutama() {
  return (
    <div className="h-screen w-screen bg-gray-800">
      <div className="items-center justify-center p-20">
        <div className="items-center justify-center flex">
          <img src={AHM} />
        </div>
        <div className="text-white text-center pt-8">
          <h1 className="text-3xl font-bold">Digitalization</h1>
          <h1 className="text-3xl font-bold">Assembly Frame Plant 6</h1>
        </div>
      </div>
    </div>
  );
}

export default Halutama;
