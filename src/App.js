import React from "react";
import helper from "./helper";
import "./styles.css";

export default function App() {
  helper.helper1();
  helper.helper2();
  helper.helper3();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <input />
    </div>
  );
}
