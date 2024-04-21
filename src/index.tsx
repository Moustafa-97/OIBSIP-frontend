import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { ThemeContextProvider } from "./Pages/theme/ThemeContextProvider";
import { Provider } from "react-redux";
import store from "./Redux/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeContextProvider> */}
        <App />
      {/* </ThemeContextProvider> */}
    </Provider>
  </React.StrictMode>
);
