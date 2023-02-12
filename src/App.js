import React from "react";
import "./App.css";
import Dasboard from "./componen/Dasboard";
import Db from "./componen/Db";

function App() {
  return (
    <div className="App">
      <div className="bg-grey-500">
        <Db />
      </div>
      <Dasboard />
    </div>
  );
}

export default App;
