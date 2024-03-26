import "./App.css";
import {  HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Miniprojects from "./Components/Miniprojects/Miniprojects";
function App() {
  return (
    <>
      <div className=" ">
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          <Footer />
        </HashRouter>
      </div>
    </>
  );
}

export default App;
