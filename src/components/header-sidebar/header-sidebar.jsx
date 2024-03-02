import "./header-sidebar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Avatar } from "antd";
import iconSair from "../../assets/images/icon-sair.svg";
import { icons } from "antd/es/image/PreviewGroup";

export default function HeaderSidebar() {
  const location = useLocation("");

  const [isOpen, setIsOpen] = useState(false);

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
          <h1 className="hs-menu-item">Agendamento</h1>
          <h1 className="hs-menu-item">Dashboard</h1>
          <h1 className="hs-menu-item">Gerenciamento</h1>
        </div>
      </div>
      <div className="hs-header">
        <div className="hs-header-container">
          <h1 className="hs-title">{location.pathname.split(`/`)[1]}</h1>
          <Avatar size={50}>A</Avatar>
        </div>
      </div>
    </div>
  );
}
