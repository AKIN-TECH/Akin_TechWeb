import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Akin from "./akin";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "@mui/material";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      {/* <Switch> */}
         <Akin />
         <App />
      {/* </Switch> */}
    
      
  </React.StrictMode>
);
