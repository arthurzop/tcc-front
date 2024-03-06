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
import Estoque from "./pages/gerenciamento/estoque/estoque";
import Maquina from "./pages/gerenciamento/estoque/maquina";
import Material from "./pages/gerenciamento/estoque/material";
import Pedidos from "./pages/gerenciamento/pedidos/pedidos";
import CriarPerfil from "./pages/gerenciamento/perfis/criar";
import EditarPerfil from "./pages/gerenciamento/perfis/editar";
import Perfis from "./pages/gerenciamento/perfis/perfis";
import Dashboard from './pages/dashboard/dashboard';


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
      },
      {
        path: "/estoque",
        element: <Estoque/>
      },
      {
        path: '/cadastro de maquina',
        element: <Maquina/>
      },
      {
        path: '/cadastro de material',
        element: <Material/>
      },
      {
        path: '/pedidos',
        element: <Pedidos/>
      },
      {
        path: '/criar perfil',
        element: <CriarPerfil/>
      },
      {
        path: '/editar perfil',
        element:  <EditarPerfil/>
      },
      {
        path: '/perfis',
        element: <Perfis/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
