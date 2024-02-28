// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
import TopGradientDesign from "./components/design-bg/TopGradientDesign";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import About from "./components/About";
import Home from "./components/Home";
function App() {
  return (
    <>
    <TopGradientDesign/>
    <div className="bg-container">
      <div className="main-container">
      <BrowserRouter>
        <Navbar/>
         <Routes>
           <Route index element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
         </Routes>
      </BrowserRouter>
      </div>
    </div>
    </>
  );
}

export default App;
