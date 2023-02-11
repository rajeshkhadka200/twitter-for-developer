import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "@pankod/refine-react-router-v6";
import App from "./App";
import "./css/global.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
