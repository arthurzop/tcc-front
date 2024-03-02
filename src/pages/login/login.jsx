import React, { useState } from "react";
import "./login.css";
import "../../App.css";
import { Form, Input } from "antd";

import HeaderLogin from "../../components/header-login/header-login";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login(props) {

  const nav = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleLogin = async () => {
    setEmail("")
    setSenha("")

    if (email === "" || senha === "") {
      console.log(email, senha)
      toast.warning("Email ou Senha não preenchidos!", {icon: "⚠"})
    }
    else {
      setEmail("")
      setSenha("")
      nav("/agendamento")
    }
  }
  return (
    <body className="body">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        transition={Bounce}
        theme="dark"
        />

      <HeaderLogin />
      <aside className="login-sidebar">
        <div className="form-container">
          <h1 className="login-title">Login</h1>
          <Form
            className="form"
          >
            <div className="input-container">
              <label htmlFor="email">Email: </label>
              <Form.Item className="form-label" >
                <Input
                  className="login-input"
                  placeholder="Digite seu email:"
                  allowClear
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className="input-container">
              <label htmlFor="senha">Senha: </label>
              <Form.Item className="form-label">
                <Input.Password
                  className="login-input"
                  placeholder="••••••••••"
                  onChange={(e) => setSenha(e)}
                />
                <a href="javascript:void(0)" className="esqueci-senha" onClick={() => { nav("/esqueciSenha") }}>Esqueci a senha</a>
              </Form.Item>
            </div>
          </Form>
          <button className="login-button" onClick={() => handleLogin()}>Entrar</button>

        </div>
        <div className="login-links-container">
          <p>Ainda não tem conta? Faça seu <a href="/cadastro" className="login-link">Cadastro</a>.</p>
        </div>
      </aside>
    </body>
  );
}
