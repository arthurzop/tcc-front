import "./login.css"
import {  Form, Input } from "antd";
import HeaderLogin from "../../components/header-login/header-login";
import { useNavigate } from "react-router-dom";


export default function EsqueciSenha() {

    const nav = useNavigate()
    return(
        <body className="body">
      <HeaderLogin />
      <aside>
        <div className="aside-sub-container">
        <div className="form-container">
          <h1 className="login-title">Esqueceu a <br /> sua senha?</h1>
          <Form
            className="form"
          >
            <label htmlFor="email">Email: </label>
            <Form.Item className="form-label" >
              <Input
                className="login-input"
                placeholder="Digite seu email de recuperação:"
                allowClear
              />
            </Form.Item>
          </Form>

        </div>
        <button className="login-button">Enviar Email</button>
        <p className="login-info">
          <b>O que vai acontecer?</b> <br />
          Enviaremos um e-mail para que consiga recuperar a sua senha.
        </p>
        </div>
        <div href="" className="login-links-container">
            <a className="login-link" onClick={() => {nav("/login")}}>Login</a>
            <a className="login-link" onClick={() => {nav("/cadastro")}}>Cadastro</a>
        </div>
      </aside>
    </body>
    )
}