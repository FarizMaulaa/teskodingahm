import React from "react";
import { AiOutlineUser, AiFillFolderAdd } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

function Dasboard() {
  return (
    <div className="flex">
      <div className="text-3xl max-w-[45px] p-1 h-screen font-bold text-white bg-slate-800">
        <div className="mt-3">
          <AiOutlineUser />
        </div>
        <div className="mt-3">
          <AiFillFolderAdd />
        </div>
        <div className="mt-3">
          <BiLogOutCircle />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <Table1 />
        <Table2 />
        <Table3 />
      </div>
    </div>
  );
}

export default Dasboard;
