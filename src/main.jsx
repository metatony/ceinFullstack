import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/about/About.jsx";
import Products from "./Pages/products/Products.jsx";
import Contact from "./Pages/contact/Contact.jsx";
import Login from "./Pages/auth/login/Login.jsx";
import SignUp from "./Pages/auth/signup/SignUp.jsx";
import CartPage from "./Pages/cart/CartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Products",
    element: <Products />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },
  {
    path: "CartPage",
    element: <CartPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
