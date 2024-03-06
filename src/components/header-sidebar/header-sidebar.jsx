import "./header-sidebar.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar } from "antd";
import iconSair from "../../assets/images/icon-sair.svg";
import pedidos from "../../assets/images/pedidos.svg";

export default function HeaderSidebar() {
  const location = useLocation("");

  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setsubMenuOpen] = useState(false);

  const nav = useNavigate();

  // tirando caracteres especiais do pathname da pagina
  var pathname = location.pathname.split("/");
  var pathname = location.pathname.replace("%20", " ").replace("/", "");

  return (
    <div className="hs-container">
      <div className="hs-sidebar-container">
        <div className="hs-logo-container">
          <h1 className="hs-logo">
            EM <span className="hs-logo-highlight">3D</span>
          </h1>
          <div className="vertical-divider"></div>
        </div>
        <div className="horizontal-divider"></div>
        <div className="hs-sidebar-menu-container">
          <h1
            className="hs-menu-item"
            id="agendamento"
            onClick={() => {
              nav("/agendamento");
            }}
          >
            Agendamento
          </h1>
          <h1 className="hs-menu-item" id="dashboard">
            Dashboard
          </h1>
          <h1
            className="hs-menu-item"
            id="gerenciamento"
            onClick={() => {
              setsubMenuOpen(!subMenuOpen);
            }}
          >
            Gerenciamento
          </h1>
        </div>
        {subMenuOpen && (
          <>
            <div
              className="hs-overlay"
              onClick={() => {
                setsubMenuOpen(!subMenuOpen);
              }}
            ></div>
            <div className="sub-container">
              <h1 className="sub-text">Estoque</h1>
              <div className="modal-divider"></div>
              <h1 className="sub-text">Pedidos</h1>
              <div className="modal-divider"></div>
              <h1 className="sub-text">Perfis</h1>
            </div>
          </>
        )}
      </div>
      <div className="hs-header">
        <div className="hs-header-container">
          <h1 className="hs-title">
            {pathname}
            <span className="hs-subtitle">
              {location.pathname.split("/")[2]}
            </span>
          </h1>
          <p
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            className="hs-active"
          >
            <Avatar size={50} style={{ background: "darkgreen" }}>
              A
            </Avatar>
          </p>
        </div>
      </div>
      {menuOpen && (
        <>
          <div
            className="hs-overlay"
            onClick={() => {
              setMenuOpen(false);
            }}
          ></div>
          <div className="hs-modal-container">
            <h1 className="modal-name">Manuela Vaz</h1>
            <h3 className="modal-cargo">Admin</h3>
            <div className="modal-divider"></div>
            <div className="modal-sair-container">
              <div
                className="hs-sub-container"
                onClick={() => {
                  nav("/meus pedidos");
                }}
              >
                <img src={pedidos} alt="" className="modal-icon" />
                <h1 className="modal-text">Meus Pedidos</h1>
              </div>
              <div className="sub-divider"></div>
              <div
                className="hs-sub-container"
                onClick={() => {
                  nav("/");
                }}
              >
                <img src={iconSair} alt="" className="modal-icon" />
                <h1 className="modal-text">Sair</h1>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
