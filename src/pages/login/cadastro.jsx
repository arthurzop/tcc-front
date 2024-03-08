import React, { useState } from "react";
import "./login.css";
import "../../App.css";
import { Form, Input } from "antd";

import HeaderLogin from "../../components/header-login/header-login";
import Select from "react-select";
import { Bounce, ToastContainer, toast } from "react-toastify";

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
          <Form className="cadastro-form">
            <Form.Item className="form-label">
              <label htmlFor="email">Nome: </label>
              <Input
                className="cadastro-input"
                placeholder="Digite seu nome:"
                allowClear
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Item>

            <Form.Item className="form-label">
              <label htmlFor="email">Email: </label>
              <Input
                className="cadastro-input"
                placeholder="Digite seu email:"
                allowClear
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item className="form-label">
              <label htmlFor="email">Cargo: </label>
              <Select
                options={opcoes}
                isClearable
                isSearchable
                placeholder="Selecione seu cargo:"
                onChange={(e) => setCargo(e.target.value)}
                className="cadastro-input"
              />
            </Form.Item>

            <Form.Item className="form-label">
              <label htmlFor="email">Sala: </label>
              <Input
                className="cadastro-input"
                placeholder="Digite seu email:"
                allowClear
                onChange={(e) => setSala(e.target.value)}
              />
            </Form.Item>

            <Form.Item className="form-label">
              <label htmlFor="senha">Senha: </label>
              <Input.Password
                className="cadastro-input"
                placeholder="••••••••••"
                onChange={(e) => setSenha(e.target.value)}
              />
            </Form.Item>
          </Form>
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
