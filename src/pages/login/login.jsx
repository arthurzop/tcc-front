import React, { useState } from "react";
import "./login.css";
import "../../App.css";
import * as M from "@mui/material";
import * as MI from "@mui/icons-material";
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

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
          <div className="form">
            <div className="login-input-container">
              <label htmlFor="email">Email: </label>

              <M.TextField
                className="login-input"
                placeholder="Digite seu email:"
                allowClear
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ input: { color: "white" } }}

              />
            </div>
            <div className="login-input-container">
              <label htmlFor="senha">Senha: </label>
              <M.OutlinedInput
                type={showPassword ? "text" : "password"}
                sx={{ input: { color: "white" } }}
                placeholder="••••••••••"
                endAdornment={
                  <M.InputAdornment position="end">
                    <M.IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <MI.VisibilityOff /> : <MI.Visibility />}
                    </M.IconButton>
                  </M.InputAdornment>
                }
                label="Password"
              />
              <div className="form-label">
                <a
                  href="javascript:void(0)"
                  className="esqueci-senha"
                  onClick={() => {
                    nav("/esqueciSenha");
                  }}
                >
                  Esqueci a senha
                </a>
              </div>
            </div>
          </div>
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
