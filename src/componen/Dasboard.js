import React from "react";
import Sayap from "../image/syap.jpg";
import Content from "./Content";

function Dasboard() {
  return (
    <div>
      <div className="flex justify-start items-start p-2 bg-gray-600 ">
        <div className="bg-black p-1">
          <img className="rounded" src={Sayap} width="40px" height="40px" />
        </div>
        <h1 className="text-2xl font-bold text-white mr-2">Main Dasboard</h1>
        <div className="">
          <h2 className="text-xl font-bold text-white mr-2 text-right">
            {new Date().toLocaleTimeString()}.
          </h2>
        </div>
      </div>
      <Content />
    </div>
  );
}

export default Dasboard;
