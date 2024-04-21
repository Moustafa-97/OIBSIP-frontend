import { amber, deepOrange, grey} from "@mui/material/colors";

const mode = localStorage.getItem("mymode");
const theme = {
  palette: {
    ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: amber,
                divider: amber[200],
                
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                primary: grey,
                divider: deepOrange[700],
                background: {
                  default: grey[900],
                  paper: grey[900],
                },
                text: {
                  primary: '#fff',
                  secondary: grey[500],
                },
              }),
  },
};

export default theme;
