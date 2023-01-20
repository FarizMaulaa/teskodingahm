import logo from "./logo.svg";
import "./App.css";
import Halutama from "./componen/Halutama";
import Login from "./componen/Login";
import Dasboard from "./componen/Dasboard";
import Setb from "./componen/Setb";
import Setbb from "./componen/Setbb";

function App() {
  return (
    <div className="App">
      <div className="bg-grey-500">
        <Halutama />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Dasboard />
      </div>
      <div>
        <Setb />
        <Setbb />
      </div>
    </div>
  );
}

export default App;
