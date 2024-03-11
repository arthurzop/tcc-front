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
import Pedidos from "./pages/gerenciamento/pedidos/pedidos";
import CriarPerfil from "./pages/gerenciamento/perfis/criar";
import EditarPerfil from "./pages/gerenciamento/perfis/editar";
import Perfis from "./pages/gerenciamento/perfis/perfis";
import Dashboard from './pages/dashboard/dashboard';
import NotFound from "./components/not-found/not-found";
import Maquina from "./pages/gerenciamento/maquina/maquina";
import CriarMaquina from "./pages/gerenciamento/maquina/criar-maquina";
import CriarMaterial from "./pages/gerenciamento/material/criar-material";
import Material from './pages/gerenciamento/material/material'



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
        path: '/cadastro de maquina',
        element: <CriarMaquina/>
      },
      {
        path: '/cadastro de material',
        element: <CriarMaterial/>
      },
      {
        path: '/maquinas',
        element: <Maquina/>
      },
      {
        path: '/materiais',
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
      },
      {
        path: '*',
        element: <NotFound/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
