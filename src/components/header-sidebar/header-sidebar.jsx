import "./header-sidebar.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar } from "antd";
import iconSair from "../../assets/images/icon-sair.svg";

export default function HeaderSidebar() {
  const location = useLocation("");

  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setsubMenuOpen] = useState(true);

  const nav = useNavigate();

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
          <h1 className="hs-menu-item" id="agendamento">
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
          <h1 className="hs-title">{location.pathname.split(`/`)[1]}</h1>
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
            <div
              className="modal-sair-container"
              onClick={() => {
                nav("/");
              }}
            >
              <img src={iconSair} alt="" className="modal-sair-icon" />
              <h1 className="modal-sair-text">Sair</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
