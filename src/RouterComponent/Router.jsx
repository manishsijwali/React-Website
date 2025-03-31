import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Services from "../Components/Services"
import Home from "../Components/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { path: "", element: <Home /> },
      { path: "/services", element: <Services /> },

    ],
  },
]);

export default router;
