import "./pedidos.css";
import HeaderSidebar from "../../components/header-sidebar/header-sidebar";
import { Table, Pagination, PaginationProps } from "antd";

import crudEdit from "../../assets/images/Complete.svg";
import crudDelete from "../../assets/images/crud.svg";

export default function PedidosUsuario() {
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
  ];

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
            scroll={{ y: 380 }}
          ></Table>
        </div>
      </div>
    </div>
  );
}
