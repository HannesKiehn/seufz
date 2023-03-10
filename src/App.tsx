import { useState } from "react";
import cloud from "./assets/cloud.jpg";
import "./App.css";
import Roman from "react-roman";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <img src={cloud} className="woodstock" alt="woodstock on cloud" />
      </div>
      <h1>Seufz Counter</h1>
      <div className="roman">
        <Roman>{count}</Roman>
      </div>
      <div className="counter">
        <button onClick={() => setCount((count) => count + 1)}>*seufz*</button>
      </div>
    </div>
  );
}

export default App;
