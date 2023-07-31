import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

import { UserProvider } from "./contexts/UserContext.jsx";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import {CartProvider } from "./contexts/CartContext.jsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
       <CartProvider>
        <RouterProvider router={router} />
       </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);
