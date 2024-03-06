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
import Agendamento from "./pages/agendamento/agendamento";
import PedidosUsuario from "./pages/pedidos-usuario/pedidos";

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
      },
      {
        path: "/agendamento",
        element:  <Agendamento />,
      },
      {
        path: "/meus pedidos",
        element: <PedidosUsuario/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
