// App.js
import React from "react";
import Navbar from "./components/Navbar";
import TopGradientDesign from "./components/design-bg/TopGradientDesign";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./components/about/About";
import Home from "./components/Home";
import Department from "./components/about/Department";
import { useState } from "react";
import LucknowFc from "./components/about/LucknowFc";

function App() {
  const [active, setActive] = useState("/");

  const handActive = (currentPath) => {
    setActive(currentPath);
  };

  return (
    <>
      <TopGradientDesign />
      <div className="bg-container">
        <div className="main-container">
          <BrowserRouter>
            <Navbar active={active} handActive={handActive} />
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="about" element={<About />} />
              </Route>
                <Route path="lucknow-fc" element={<LucknowFc />} />
                <Route path="department" element={<Department />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
