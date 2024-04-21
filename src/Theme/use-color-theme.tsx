import { useState, useMemo, useEffect } from "react";
import { createTheme, PaletteMode } from "@mui/material";
import theme from "./theme";
import { blueGrey, grey } from "@mui/material/colors";

export const useColorTheme = () => {
  const mymode: String | null | any = localStorage.getItem("mymode");
  const [mode, setMode] = useState<PaletteMode>("dark");
  useEffect(() => {
    if (mymode === "light") {
      setMode("dark");
    }
  }, [mymode]);

  const toggleColorMode = () =>
    setMode((prevMod) => (prevMod === "light" ? "dark" : "light"));

  const modifiedTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: blueGrey,
                divider: blueGrey[100],
                background: {
                  default: blueGrey[50],
                  paper: blueGrey[100],
                },
                text: {
                  primary: blueGrey[500],
                  secondary: blueGrey[800],
                },
              }
            : {
                // palette values for dark mode
                primary: grey,
                divider: grey[700],
                background: {
                  default: grey[900],
                  paper: grey[900],
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
          // mode,
        },
      }),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
