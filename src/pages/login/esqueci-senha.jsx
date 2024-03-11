import "./login.css"
import HeaderLogin from "../../components/header-login/header-login";
import { useNavigate } from "react-router-dom";


export default function EsqueciSenha() {

  const nav = useNavigate()
  return (
    <body className="body">
      <HeaderLogin />
      <aside className="login-sidebar">
        <div className="aside-sub-container">
          <h1 className="login-title">Esqueceu a <br /> sua senha?</h1>
          <div className="esqueci-container">
            <div
              className="esqueci-form"
            >
              <label htmlFor="email">Email: </label>
              <div className="form-label" >
                <input
                  className="login-input"
                  placeholder="Digite seu email de recuperação:"
                  allowClear
                />
              </div>
            </div>
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