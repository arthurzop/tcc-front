import HeaderSidebar from "../../../components/header-sidebar/header-sidebar";
import * as M from "@mui/material";
import * as I from "iconoir-react";
import { Upload } from "antd";

const { Dragger } = Upload;

export default function CriarMaquina() {
  return (
    <div className="section-body">
      <HeaderSidebar />
      <div className="section-container">
        <div className="cadastrar-container">
          <h1 className="cadastrar-title">Cadastrar Nova Máquina</h1>
          <div className="maquina">
            <div className="cadastrar-column">
              <div className="maquina-input">
                <p className="cadastrar-label">Nome:</p>
                <M.TextField fullWidth></M.TextField>
              </div>
              <div className="maquina-input">
                <p className="cadastrar-label">Modelo:</p>
                <M.TextField fullWidth></M.TextField>
              </div>
              <div className="maquina-input">
                <p className="cadastrar-label">Escolha a imagem:</p>
                <Dragger className="cadastrar-dragger">
                  <I.Upload />
                  <p className="dragger-text">Escolha e Arraste o arquivo</p>
                </Dragger>
              </div>
            </div>
            <div className="cadastrar-column">
            <div className="maquina-input">
                <p className="cadastrar-label">Capacidade:</p>
                <M.TextField fullWidth></M.TextField>
              </div>
              <div className="maquina-input">
                <p className="cadastrar-label">Número de série:</p>
                <M.TextField fullWidth></M.TextField>
              </div>
              <div className="maquina-input">
                <p className="cadastrar-label">Entrada de Energia:</p>
                <M.TextField fullWidth></M.TextField>
              </div>
              <div className="maquina-input">
                <p className="cadastrar-label">Especificações:</p>
                <M.TextField fullWidth></M.TextField>
              </div>
            </div>
          </div>
          <button className="system-btn cadastrar-btn">Cadastrar</button>
        </div>
      </div>
    </div>
  );
}
