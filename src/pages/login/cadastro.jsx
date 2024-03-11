import React, { useState } from "react";
import "./login.css";
import "../../App.css";

import HeaderLogin from "../../components/header-login/header-login";
import { Bounce, ToastContainer } from "react-toastify";

export default function Cadastro() {
  const [cargo, setCargo] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [sala, setSala] = useState("");
  const [senha, setSenha] = useState("");

  const opcoes = [
    { value: "aluno", label: "Aluno" },
    { value: "professor", label: "Professor" },
    { value: "coordenador", label: "Coordenador" },
    { value: "funcionario", label: "Funcionário" },
  ];

  const handleCadastro = async () => {};

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
        <h1 className="login-title">Cadastro</h1>
        <div className="cadastro-container">
          <div className="cadastro-form">
            <div className="form-label">
              <label htmlFor="email">Nome: </label>
              <input
                className="cadastro-input"
                placeholder="Digite seu nome:"
                allowClear
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="form-label">
              <label htmlFor="email">Email: </label>
              <input
                className="cadastro-input"
                placeholder="Digite seu email:"
                allowClear
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-label">
              <label htmlFor="email">Cargo: </label>
              <select
                options={opcoes}
                isClearable
                isSearchable
                placeholder="Selecione seu cargo:"
                onChange={(e) => setCargo(e.target.value)}
                className="cadastro-input"
              />
            </div>

            <div className="form-label">
              <label htmlFor="email">Sala: </label>
              <input
                className="cadastro-input"
                placeholder="Digite seu email:"
                allowClear
                onChange={(e) => setSala(e.target.value)}
              />
            </div>

            <div className="form-label">
              <label htmlFor="senha">Senha: </label>
              <input
                className="cadastro-input"
                placeholder="••••••••••"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          className="login-button"
          onClick={() => {
            handleCadastro();
          }}
        >
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
