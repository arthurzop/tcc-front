import "./App.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import LandingPage from "./pages/landing-page/landing-page";
import Login from "./pages/login/login";
import EsqueciSenha from "./pages/login/esqueci-senha";
import Cadastro from "./pages/login/cadastro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/esqueciSenha",
        element: <EsqueciSenha/>
      },
      {
        path: "/cadastro",
        element: <Cadastro/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
