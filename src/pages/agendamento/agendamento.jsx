import "./agendamento.css";
import HeaderSidebar from "../../components/header-sidebar/header-sidebar";
import "react-widgets/styles.css";
import DatePicker from "react-widgets/DatePicker";
import NumberPicker from "react-widgets/NumberPicker";
import { Input, Upload } from "antd";
import { useState } from "react";

import fileUpload from "../../assets/images/Vector.svg";
import upload from "../../assets/images/upload.svg";
import asideImage from "../../assets/images/aside-image.svg";
import { is } from "@babel/types";

const { Dragger } = Upload;
const { TextArea } = Input;

export default function Agendamento() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="agendamento-body">
      <HeaderSidebar />
      <div className="agendamento-container">
        <div className="agendamento-form-container">
          <h1 className="agendamento-title">1. Agende a Impressão</h1>
          <div className="input-container">
            <p className="label">Escolha a data: </p>
            <DatePicker placeholder="dd/mm/aaaa" />
            <p className="label">Tempo estimado de impressão: </p>
            <div className="tempo-container">
              <NumberPicker
                placeholder="Horas"
                className="number-picker"
              ></NumberPicker>
              <NumberPicker
                placeholder="Minutos"
                className="number-picker"
              ></NumberPicker>
            </div>
          </div>
          <h1 className="agendamento-title">2. Detalhes da Impressão</h1>
          <div className="input-container">
            <p className="label">Nome do Projeto: </p>
            <Input
              placeholder="Ex: Peça para apoio de celular."
              className="antd-input"
            />
            <p className="label">Escolha o arquivo:</p>
            <Dragger className="dragger-container">
              <img src={upload} alt="" />
              <h2 className="dragger-text">Arraste e solte o arquivo.</h2>
              <p className="dragger-info">
                Envie um arquivo que mostre claramente o que deseja imprimir, em
                formato pdf ou imagem. <br />
                (.pdf, .png, .jpeg, etc.)
              </p>
            </Dragger>
            <p className="label">Descrição do Projeto:</p>
            <TextArea
              rows={4}
              placeholder="Escreva uma breve descrição do projeto:"
              className="antd-input"
            />
          </div>
          <button
            className="default-button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Enviar Projeto
          </button>
        </div>
      </div>
      <img src={asideImage} alt="" className="aside-image" />
      {isOpen && 
      <>
        <div className="hs-overlay" onClick={()=>{setIsOpen(!isOpen)}}></div>
        <div className="confirmacao-modal-container">
        
            <h1 className="modal-title">Seu pedido foi agendado!</h1>
            <div className="modal-divider"></div>
            <p className="modal-info">Agora só esperar a confirmação e o tempo estimado de impressão.</p>
            <button className="modal-button"></button>
        </div>
       
      </>
      }
    </div>
  );
}
