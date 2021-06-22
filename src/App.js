import React from "react";
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/Dropdown";

function App() {
  return (
    <div className='App text-gray-900 font-sans'>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
