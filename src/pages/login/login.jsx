import React, { useState } from "react";
import "./login.css";
import "../../App.css";
import { Button, Form, Input } from "antd";

import HeaderLogin from "../../components/header-login/header-login";

export default function Login() {
  return (
    <body className="body">
      <HeaderLogin />
      <main></main>
      <aside>
        <h1 className="login-title">Login</h1>
        <Form layout="vertical">
          <Form.Item label="E-mail">
            <Input
              placeholder="Digite seu email"
              rules={[{ required: true }]}
            ></Input>
          </Form.Item>
          <Form.Item label="Senha">
            <Input placeholder="*****"></Input>
          </Form.Item>
        </Form>
      </aside>
    </body>
  );
}
