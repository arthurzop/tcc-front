import "./header-login.css";
import logoSenai from "../../assets/images/logo-senai.svg";

export default function HeaderLogin() {
  return (
    <>
      <div className="header">
        <h1 className="header-title">
          Espaço Maker <span>3D</span>
        </h1>
        <img src={logoSenai} alt="" />
      </div>
    </>
  );
}
