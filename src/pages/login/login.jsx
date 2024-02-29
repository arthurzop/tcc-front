import React, { useState } from "react";
import "./login.css";
import "../../App.css";
import { Form, Input } from "antd";

import HeaderLogin from "../../components/header-login/header-login";
import { useNavigate } from "react-router-dom";

export default function Login() {

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
          <h1 className="login-title">Login</h1>
          <Form
            className="form"
            validateMessages={validateMessages}
          >
            <label htmlFor="email">Email: </label>
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
              <a href="javascript:void(0)" className="esqueci-senha" onClick={() => {nav("/esqueciSenha")}}>Esqueci a senha</a>
            </Form.Item>
          </Form>

        </div>
        <button className="login-button">Entrar</button>
        <p className="login-info">
          <b>Por que fazer login?</b> <br />
          Todas as impressões feitas no Espaço Maker devem estar associadas a um perfil, para evitarmos possíveis problemas.
        </p>
        <a href="" className="login-links-container">
            <a className="login-link" onClick={() => {nav("/login")}}>Login</a>
            <a className="login-link" onClick={() => {nav("/cadastro")}}>Cadastro</a>
        </a>
      </aside>
    </body>
  );
}
