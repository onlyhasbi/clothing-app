import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ScrollToTop from "./utils/helper/scroll-to-top";
import GlobalStyles from "./main.styles";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        <GlobalStyles />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
