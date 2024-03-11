import React, { useState } from "react";
import "./login.css";
import "../../App.css";
import { Form, Input } from "antd";

import HeaderLogin from "../../components/header-login/header-login";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Login(props) {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    setEmail("");
    setSenha("");

    if (email === "" || senha === "") {
      console.log(email, senha);
      toast.warning("Email ou Senha não preenchidos!", { icon: "⚠" });
    } else {
      setEmail("");
      setSenha("");
      nav("/agendamento");
    }

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,

        senha,
      });
      console.log(response.data);
      toast.success("Login realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao logar:", error);
      toast.error("Usuário ou senha incorretos. Por favor, tente novamente.");
    }
  };
  return (
    <body className="body">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        limit={1}
        closeOnClick
        draggable
        pauseOnHover={false}
        transition={Bounce}
      />

      <HeaderLogin />
      <aside className="login-sidebar">
        <div className="form-container">
          <h1 className="login-title">Login</h1>
          <Form className="form">
            <div className="login-input-container">
              <label htmlFor="email">Email: </label>
              <Form.Item className="form-label">
                <Input
                  className="login-input"
                  placeholder="Digite seu email:"
                  allowClear
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className="login-input-container">
              <label htmlFor="senha">Senha: </label>
              <Form.Item className="form-label">
                <Input.Password
                  className="login-input"
                  placeholder="••••••••••"
                  onChange={(e) => setSenha(e.target.value)}
                />
                <a
                  href="javascript:void(0)"
                  className="esqueci-senha"
                  onClick={() => {
                    nav("/esqueciSenha");
                  }}
                >
                  Esqueci a senha
                </a>
              </Form.Item>
            </div>
          </Form>
          <button className="login-button" onClick={() => handleLogin()}>
            Entrar
          </button>
        </div>
        <div className="login-links-container">
          <p>
            Ainda não tem conta? Faça seu{" "}
            <a href="/cadastro" className="login-link">
              Cadastro
            </a>
            .
          </p>
        </div>
      </aside>
    </body>
  );
}
