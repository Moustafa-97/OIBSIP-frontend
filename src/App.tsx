import React from "react";
import "./App.css";
import MainApp from "./Routes/MainApp";
// import { PaletteMode } from "@mui/material";
// import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
// import { useThemeContext } from "./Pages/theme/ThemeContextProvider";

// for cookies::
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  // const { theme, mode } = useThemeContext();
  // localStorage.setItem("mymode", mode);
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  // if (
  //   mode === "dark" ||
  //   (!mode && window.matchMedia(`(prefers-color-scheme: ${mode})`).matches)
  // ) {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }

  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />
        <MainApp />
        
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
