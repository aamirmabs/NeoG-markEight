import React, { useState } from "react";
import helper from "./helper";
import "./styles.css";

export default function App() {
  const [msg, setMsg] = useState("");

  // get flag list from helper
  let flags = helper.setFlagsDB();

  // handle user input
  function handleUserInput(e) {
    let userInputFlag = e.target.value.trim();
    let country = flags[userInputFlag];
    let dispMsg = "";

    if (country) {
      // console.log("Exists", country);

      dispMsg = userInputFlag + " is the flag of " + country;
      // console.log(dispMsg);
    } else {
      dispMsg = "Seems like that is not a country flag. ";
    }

    setMsg(dispMsg);
  }

  return (
    <div className="App">
      <h1>Flag Detector!</h1>
      <h2>
        Paste the Emoji Flag of your country and we'll tell you where you are
        from...
      </h2>

      <input onKeyUpCapture={handleUserInput} />
      <p>{msg}</p>
    </div>
  );
}
