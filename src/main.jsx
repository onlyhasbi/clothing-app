import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context";
import { CategoriesProvider } from "./context/categories.context";
import { CartProvider } from "./context/cart.context";
import { Provider } from "react-redux";
import { store } from "./store/store";
import GlobalStyles from "./main.styles";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <UserProvider>
        <CartProvider>
          <CategoriesProvider>
            <GlobalStyles />
            <App />
          </CategoriesProvider>
        </CartProvider>
      </UserProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
