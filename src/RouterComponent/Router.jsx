import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Services from "../Components/Services"
import Home from "../Components/Home";
import AboutUs from "../Components/AboutUs";
import Projects from "../Components/Projects";

// ["Home", "About Us", "Services", "Project", "Blog", "Contact"]
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { path: "", element: <Home /> },      
      { path: "/home", element: <Home /> },      
      { path: "/about-us", element: <AboutUs /> },      
      { path: "/services", element: <Services /> },
      { path: "/project", element: <Projects /> },
    //   { path: "/blog", element: <Services /> },
    //   { path: "/contact", element: <Services /> },

    ],
  },
]);

export default router;
