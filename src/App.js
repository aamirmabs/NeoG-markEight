import React, { useState } from "react";
import helper from "./helper";
import "./styles.css";

export default function App() {
  const [msg, setMsg] = useState("");
  const [bg, setBG] = useState("#F2F2F2");

  // get flag list from helper
  let flags = helper.setFlagsDB();

  // change background of result when called background
  let bgSet = helper.allBG();
  function getRandomBGHex() {
    setBG(bgSet[Math.floor(Math.random() * bgSet.length)]);
  }

  // handle user input
  function handleUserInput(e) {
    // console.log(e.target.value);
    getRandomBGHex();
    let userInputFlag = e.target.value.trim();
    let country = flags[userInputFlag];
    let dispMsg = "";

    if (country) {
      dispMsg = userInputFlag + " is the flag of " + country;
    } else {
      dispMsg = "Seems like that is not a country flag. ";
    }

    setMsg(dispMsg);
  }

  function handleFlagClick(e) {
    // console.log(e.target.innerText);
    getRandomBGHex();
    let userInputFlag = e.target.innerText;
    let country = flags[userInputFlag];
    let dispMsg = "";

    if (country) {
      dispMsg = userInputFlag + " is the flag of " + country;
    } else {
      dispMsg = "Seems like that is not a country flag. ";
    }

    setMsg(dispMsg);
  }

  return (
    <div className="App">
      <h1>Flag Detector!</h1>
      <input onKeyUpCapture={handleUserInput} />
      <h4>
        Paste the Emoji Flag... <br />
        We'll guess where you are from 😉 <br /> Or <br /> choose one of these
        flags
      </h4>
      <ul id="flag-row">
        <li onClick={handleFlagClick}>🇦🇺</li>
        <li onClick={handleFlagClick}>🇨🇽</li>
        <li onClick={handleFlagClick}>🇬🇷</li>
        <li onClick={handleFlagClick}>🇰🇪</li>
        <li onClick={handleFlagClick}>🇸🇯</li>
      </ul>
      <div id="result-box" style={{ backgroundColor: bg }}>
        <h6>RESULT</h6>
        <p>{msg}</p>
      </div>
    </div>
  );
}
