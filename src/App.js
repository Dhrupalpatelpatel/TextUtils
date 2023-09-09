import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import React, { useState } from "react";
import Textform from "./components/Textform";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Alert from './components/Alert';

// import Textform from './components/Textform';

// this app is shows the use of props and proptypes and default props and states are in textform and also shows the dark mode in aboutus

function App() {
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
<Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <div className="containor my-3">
          <Routes>
            <Route exact path="/" element={<Textform />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>   
    </>
  );
}

export default App;
