import "./pedidos.css";
import HeaderSidebar from "../../components/header-sidebar/header-sidebar";
import { Table } from "antd";
import crudDelete from "../../assets/images/crud.svg";
import { useState } from "react";

export default function PedidosUsuario() {
  //data  para a tabela
  const dataSource = [
    {
      key: "1",
      usuario: "Peça",
      nome: 32,
      data: "10/12/2023",
    },
    {
      key: "2",
      usuario: "Vaso 2",
      nome: 42,
      data: "22/04/2022",
    },
    {
      key: "2",
      usuario: "Vaso 2",
      nome: 42,
      data: "22/04/2022",
    },
    {
      key: "2",
      usuario: "Vaso 2",
      nome: 42,
      data: "22/04/2022",
    },
    {
      key: "2",
      usuario: "Vaso 2",
      nome: 42,
      data: "22/04/2022",
    },
  ];

  //colunas da tabela
  const columns = [
    {
      title: "User",
      dataIndex: "usuario",
      key: "usuario",
    },
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Data",
      dataIndex: "data",
      key: "data",
    },
    {
      title: "#",
      key: "deletar",
      width: 100,
      render: () => (
        <a
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src={crudDelete} alt="" />
        </a>
      ),
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleExcluir = async () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section-body">
      <HeaderSidebar />
      <div className="section-container">
        <h1 className="pedidos-title">Pedidos</h1>
        <div className="table-container">
          <Table
            className="table"
            dataSource={dataSource}
            columns={columns}
            scroll={{ y: "60%" }}
          ></Table>
        </div>
      </div>
      {isOpen && (
        <div className="modal-container">
          <div
            className="hs-overlay"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></div>
          <div className="modal-excluir-container">
            <h1 className="modal-title">Tem Certeza?</h1>
            <div className="modal-divider"></div>
            <p className="modal=excluir-text">
              Deseja realmente excluir este pedido? Essa ação é irreversível.
            </p>
            <div className="modal-btn-container">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="modal-btn btn-cancelar"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  handleExcluir();
                }}
                className="modal-btn btn-confirmar"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
