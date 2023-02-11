import React, { useState, useContext } from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@pankod/refine-mui";
import Router from "./routes";
import { ContextProvider } from "./config/Context";

function App() {
  //defining light and dark theme for the app
  const lightTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#00BA7C",
        light: "#16E9A2",
      },
      background: {
        default: "#FFFFFF",
      },
      typography: {
        fontFamily: "Poppins",
      },
      text: {
        normal: "#0F1419",
        light: "#E6E7E9",
      },
      hover: "#F7F7F7",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#00BA7C",
        light: "#16E9A2",
      },
      background: {
        default: "#15202B",
      },
      typography: {
        fontFamily: "Poppins",
      },
      text: {
        normal: "#F7F9F9",
        light: "#5B6773",
      },
      hover: "#1C2732",
    },
  });

  //use context to get the theme state
  const { t } = useContext(ContextProvider);
  const [theme, setTheme] = t;
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
