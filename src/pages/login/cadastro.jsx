import React, { useState } from "react";
import "./login.css";
import "../../App.css";
import { Form, Input, Select } from "antd";

import HeaderLogin from "../../components/header-login/header-login";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {

    const [cargo, setCargo] = useState(null);

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
        <div className="form-container">
          <h1 className="login-title">Cadastro</h1>
          <Form
            className="form"
            validateMessages={validateMessages}
          >
            <label htmlFor="email">Nome: </label>
            <Form.Item className="form-label" >
              <Input
                className="login-input"
                placeholder="Digite seu nome:"
                allowClear
              />
            </Form.Item>
            <label htmlFor="email">Email: </label>
            <Form.Item className="form-label" >
              <Input
                className="login-input"
                placeholder="Digite seu email:"
                allowClear
              />
            </Form.Item>
            <label htmlFor="email">Cargo: </label>
            <Form.Item className="form-label" >
            <Select
                defaultValue="Aluno"
                className="select-input"
                onChange={e => setCargo(e)}
                options={[
                    { value: '1', label: 'Aluno' },
                    { value: '2', label: 'Professor' },
                    { value: '3', label: 'Funcionário' },
                    { value: '4', label: 'Coordenador' },
                ]}
            />
            </Form.Item>
            <label htmlFor="email">Sala: </label>
            <Form.Item className="form-label" >
            <Input
                className="login-input"
                placeholder="Digite seu email:"
                allowClear
              />
            </Form.Item>
            <label htmlFor="senha">Senha: </label>
            <Form.Item className="form-label">
              <Input.Password
                className="login-input"
                placeholder="••••••••••"

              />
            </Form.Item>
          </Form>

        </div>
        <button className="login-button">Cadastrar</button>
        <a href="" className="login-links-container">
            <a className="login-link" onClick={() => {nav("/login")}}>Login</a>
            <a className="login-link" onClick={() => {nav("/cadastro")}}>Cadastro</a>
        </a>
      </aside>
    </body>
  );
}
