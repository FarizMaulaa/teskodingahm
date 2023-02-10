import React from "react";
import "./App.css";
import Db from "./componen/Db";
import Table1 from "./componen/Table1";
import Table2 from "./componen/Table2";
import Table3 from "./componen/Table3";
import Table4 from "./componen/Table4";

function App() {
  return (
    <div className="App">
      <div className="bg-grey-500">
        <Db />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <Table1 />
        <Table2 />
        <Table3 />
        <Table4 />
      </div>
    </div>
  );
}

export default App;
