import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/Dropdown";
import Skills from "./Components/Skills/Skiil";

function App() {
  return (
    <div className='App text-gray-900 font-sans'>
      <Navbar />
      <Header />
      <Skills />
    </div>
  );
}

export default App;
