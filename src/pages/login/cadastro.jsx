import React, { useState } from "react";
import "./login.css";
import "../../App.css";
import { Form, Input } from "antd";

import HeaderLogin from "../../components/header-login/header-login";
import Select from "react-select";
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

  const opcoes = [
    { value: "aluno", label: "Aluno" },
    { value: "professor", label: "Professor" },
    { value: "coordenador", label: "Coordenador" },
    { value: "funcionario", label: "Funcionário" },
  ];

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
      nav("/login")
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      toast.error("Erro ao cadastrar. Por favor, tente novamente.");
    }
  };

  return (
    <body className="body">


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
                onChange={(e) => setCargo(e.value)}
                className="cadastro-input"
              />
            </Form.Item>

            <Form.Item className="form-label">
              <label htmlFor="email">Sala: </label>
              <Input
                className="cadastro-input"
                placeholder="Digite sua sala:"
                allowClear
                onChange={(e) => setTurma(e.target.value)}
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
