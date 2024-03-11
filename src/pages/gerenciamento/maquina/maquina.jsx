import HeaderSidebar from "../../../components/header-sidebar/header-sidebar";
import "./maquina.css";
import crudDelete from "../../../assets/images/crud.svg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Maquina() {

  const location = useLocation("");
  var pathname = location.pathname.split("/");
  var pathname = location.pathname.replace("%20", " ").replace("/", "");

  return (
    <div className="section-body">
      <HeaderSidebar />
      <div className="section-container">
        <div className="top-container">
          <h1 className="pedidos-title">{pathname}</h1>
          <button>Adicionar Maquina</button>
        </div>
      </div>
    </div>
  );
}
