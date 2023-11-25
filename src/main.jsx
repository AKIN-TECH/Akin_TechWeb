import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Akin from "./akin";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "@mui/material";
import Spline from '@splinetool/react-spline';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
         
      <div className="relative z-0 bg primary">
        <div className="  bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* <Spline scene="https://prod.spline.design/cLaUct9bnQWsrDZA/scene.splinecode" /> */}
         
          
          </div> 
          <App /> 
          </div>
          
     
    
      
  </React.StrictMode>
);
