import React, { useState } from "react";
import "./login.css";
import "../../App.css";
import { Form, Input, Breadcrumb } from "antd";

import HeaderLogin from "../../components/header-login/header-login";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'

export default function Cadastro() {


  const [cargo, setCargo] = useState(null);

  const opcoes = [
    { value: 'aluno', label: 'Aluno' },
    { value: 'professor', label: 'Professor' },
    { value: 'coordenador', label: 'Coordenador' },
    { value: 'funcionario', label: 'Funcionário' }
  ]


  const nav = useNavigate()

  const validateMessages = {
    required: 'Campo obrigatório!',
    types: {
      email: 'E-mail Inválido',
    }
  }
  return (
    <body className="body">
      <HeaderLogin />
      <aside>
        <div className="cadastro-container">
          <h1 className="login-title">Cadastro</h1>
          <Form
            className="cadastro-form"
            validateMessages={validateMessages}
          >

            <Form.Item className="form-label" >
              <label htmlFor="email">Nome: </label>
              <Input
                className="login-input"
                placeholder="Digite seu nome:"
                allowClear
              />
            </Form.Item>

            <Form.Item className="form-label" >
              <label htmlFor="email">Email: </label>
              <Input
                className="login-input"
                placeholder="Digite seu email:"
                allowClear
              />
            </Form.Item>
            <Form.Item className="form-label">
              <label htmlFor="email">Cargo: </label>
              <Select options={opcoes} isClearable isSearchable placeholder="Selecione seu cargo:" />
            </Form.Item>

            <Form.Item className="form-label" >
              <label htmlFor="email">Sala: </label>
              <Input
                className="login-input"
                placeholder="Digite seu email:"
                allowClear
              />
            </Form.Item>

            <Form.Item className="form-label">
              <label htmlFor="senha">Senha: </label>
              <Input.Password
                className="login-input"
                placeholder="••••••••••"

              />
            </Form.Item>
          </Form>
        </div>
        <button className="login-button">Cadastrar</button>
        <div className="login-links-container">
          <p>Já tem conta? Retorne para o <a href="/login" className="login-link">Login</a>.</p>
        </div>

      </aside>
    </body>
  );
}
