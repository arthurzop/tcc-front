import HeaderSidebar from "../../../components/header-sidebar/header-sidebar";
import "./material.css";
import crudDelete from "../../../assets/images/crud.svg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function Material() {
  
  const location = useLocation("");
  var pathname = location.pathname.split("/");
  var pathname = location.pathname.replace("%20", " ").replace("/", "");

  return (
    <div className="section-body">
      <HeaderSidebar />
      <div className="section-container">
        <h1 className="pedidos-title">{pathname}</h1>
        
      </div>
      
    </div>
  );
}
