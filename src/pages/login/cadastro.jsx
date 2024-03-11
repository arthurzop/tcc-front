import React, { useState } from "react";
import "./login.css";
import "../../App.css";
import * as M from "@mui/material";
import * as MI from "@mui/icons-material";

import HeaderLogin from "../../components/header-login/header-login";
import { Bounce, ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const nav = useNavigate();
  const [cargo, setCargo] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [turma, setTurma] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    try {
      const response = await axios.post("http://localhost:4000/cadastro-user", {
        nome,
        email,
        cargo,
        turma,
        senha,
      });
      console.log(response.data); // Exemplo: Pode ser uma mensagem de sucesso
      toast.success("Cadastro realizado com sucesso!");
      nav("/login");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      toast.error("Erro ao cadastrar. Por favor, tente novamente.");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <body className="body">
      <HeaderLogin />
      <aside className="login-sidebar">
        <h1 className="login-title">Cadastro</h1>
        <div className="cadastro-container">
          <div className="cadastro-form">
            <div className="login-input-container">
              <label htmlFor="email">Nome: </label>
              <M.TextField
                className="cadastro-input"
                placeholder="Digite seu nome:"
                onChange={(e) => setNome(e.target.value)}
                sx={{ input: { color: "white" } }}
              />
            </div>
            <div className="login-input-container">
              <label htmlFor="email">Email: </label>
              <M.TextField
                className="cadastro-input"
                placeholder="Digite seu email:"
                sx={{ input: { color: "white" } }}
                allowClear
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-input-container">
              <label htmlFor="email">Cargo: </label>
              <M.Select
                placeholder="Selecione seu cargo:"
                onChange={(e) => setCargo(e.value)}
                className="cadastro-input"
                sx={{color: "grey"}}
                defaultValue={0}
              >
                <M.MenuItem value={0}>Selecione seu cargo:</M.MenuItem>
                <M.MenuItem value={1}>Aluno</M.MenuItem>
                <M.MenuItem value={2}>Professor</M.MenuItem>
                <M.MenuItem value={3}>Coordenador</M.MenuItem>
                <M.MenuItem value={4}>Funcionário</M.MenuItem>
              </M.Select>
            </div>
            <div className="login-input-container">
              <label htmlFor="email">Sala: </label>
              <M.TextField
                sx={{ input: { color: "white" } }}
                className="cadastro-input"
                placeholder="Digite sua sala:"
                onChange={(e) => setTurma(e.target.value)}
              />
            </div>
            <div className="login-input-container">
              <label htmlFor="senha">Senha: </label>
              <M.OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                sx={{ input: { color: 'white' } }}
                endAdornment={
                  <M.InputAdornment position="end">
                    <M.IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <MI.VisibilityOff/> : <MI.Visibility />}
                    </M.IconButton>
                  </M.InputAdornment>
                }
                label="Password"
              />
            </div>
          </div>
        </div>
        <button className="login-button" onClick={handleCadastro}>
          Cadastrar
        </button>
        <div className="login-links-container">
          <p>
            Já tem conta? Retorne para o{" "}
            <a href="/login" className="login-link">
              Login
            </a>
            .
          </p>
        </div>
      </aside>
    </body>
  );
}
