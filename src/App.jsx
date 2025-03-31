import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ThemeToggle from "./Components/Toggle";


function App() {
  return (
    <div>
      {/* <ThemeToggle /> */}
      <Navbar /> 
      <main>
        <Outlet /> 
      </main>
      <Footer />  
    </div>
  );
}

export default App;
