import "./login.css"
import { Form, Input } from "antd";
import HeaderLogin from "../../components/header-login/header-login";
import { useNavigate } from "react-router-dom";


export default function EsqueciSenha() {

  const nav = useNavigate()
  return (
    <body className="body">
      <HeaderLogin />
      <aside>
        <div className="aside-sub-container">
          <h1 className="login-title">Esqueceu a <br /> sua senha?</h1>
          <div className="esqueci-container">
            <Form
              className="esqueci-form"
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
        </div>
        <div className="login-links-container">
          <p>Voltar para o <a href="/login" className="login-link">Login</a>.</p>
        </div>
      </aside>
    </body>
  )
}