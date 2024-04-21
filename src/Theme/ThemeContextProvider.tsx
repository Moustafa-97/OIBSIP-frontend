import { createTheme, Theme } from "@mui/material";
import { createContext, FC, PropsWithChildren, useContext } from "react";
import { useColorTheme } from "./use-color-theme";
type ThemeContextType = {
  mode: string | any;
  toggleColorMode: () => void;
  theme: Theme;
};
const mymode = localStorage.getItem("mymode");
export const ThemeContext = createContext<ThemeContextType>({
  mode: mymode,
  toggleColorMode: () => {},
  theme: createTheme(),
});
export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
