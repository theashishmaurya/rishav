import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Contact from "./Components/contact/contact";
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/Dropdown";
import Projects from "./Components/Projects/project";
import Skills from "./Components/Skills/Skiil";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className='App text-gray-900 font-sans'>
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
