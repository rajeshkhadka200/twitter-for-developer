import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "@pankod/refine-react-router-v6";
import { ThemeProvider, CssBaseline, createTheme } from "@pankod/refine-mui";
import App from "./App";
import "./css/global.css";

//defining light and dark theme for the app
const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF",
    },
    text: "#0F1419",
    lightText: "#E6E7E9",
    hover: "#F7F7F7",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#15202B",
    },
    text: "#F7F9F9",
    lightText: "#5B6773",
    hover: "#1C2732",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
