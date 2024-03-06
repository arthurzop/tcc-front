import "./agendamento.css";
import HeaderSidebar from "../../components/header-sidebar/header-sidebar";
import "react-widgets/styles.css";
import DatePicker from "react-widgets/DatePicker";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Input, Upload } from "antd";
import { useState } from "react";

import upload from "../../assets/images/upload.svg";
import asideImage from "../../assets/images/aside-image.svg";


const { Dragger } = Upload;
const { TextArea } = Input;

export default function Agendamento() {

  const [pNome, setPNome] = useState('')
  const [pData, setPData] = useState('')
  const [pTempo, setPTempo] = useState('')
  const [pDescricao, setPDescricao] = useState('')

  const setNull = () => {
    setPNome('')
    setPData('')
    setPTempo('')
    setPDescricao('')
  }

  const handleEnviar = async () => {
    if (pNome === '' || pData === '' || pTempo === '' || pDescricao === '') {
      console.log(pNome, pData, pTempo, pDescricao)
      toast.warn("Preencha todos os campos")
    } else {
      
    }
  }

  return (
    <div className="section-body">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        limit={1}
        closeOnClick
        draggable
        pauseOnHover={false}
        transition={Bounce}
      />

      <HeaderSidebar />
      <div className="agendamento-container">
        <div className="agendamento-form-container">
          <h1 className="agendamento-title">Agende a Impressão</h1>
          <div className="input-container">
            <p className="label">Nome do Projeto: </p>
            <Input
              placeholder="Ex: Peça para apoio de celular."
              className="antd-input"
              allowClear
              maxLength={110}
              onChange={(e) => setPNome(e.target.value)}
            />
            <div className="datetime-container">
              <div className="datetime-sub-container">
                <p className="label">Escolha a data: </p>
                <DatePicker placeholder="dd/mm/aaaa" className="datepicker" onChange={(e) => setPData(e.target.value)}
                />
              </div>
              <div className="datetime-sub-container">
                <p className="label">Tempo estimado de impressão: </p>
                <input type="time" className="timepicker" onChange={(e) => setPTempo(e.target.value)}
                />
              </div>
            </div>
            <p className="label">Descrição do Projeto:</p>
            <TextArea
              allowClear
              rows={3}
              maxLength={100}
              draggable="false"
              placeholder="Escreva uma breve descrição do projeto:"
              className="antd-input"
              onChange={(e) => setPDescricao(e.target.value)}
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
            <button
              className="default-button"
              onClick={() => {
                handleEnviar();
              }}
            >
              Enviar Projeto
            </button>
          </div>

        </div>
      </div>
      <img src={asideImage} alt="" className="aside-image" />
    </div>
  );
}
