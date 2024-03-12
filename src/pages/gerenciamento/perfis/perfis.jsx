import HeaderSidebar from "../../../components/header-sidebar/header-sidebar";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as M from "@mui/material";
import * as I from "iconoir-react";
import Paper from "@mui/material/Paper";

export default function Perfis() {
  const location = useLocation("");
  var pathname = location.pathname.split("/");
  var pathname = location.pathname.replace("%20", " ").replace("/", "");

  function createData(nome, email, cargo) {
    return { nome, email, cargo };
  }

  const rows = [
    createData("Ágatha Costa", "email.exemplo@email.com", "Aluno"),
    createData("Luan Almeida", "email.exemplo@email.com", "Professor"),
    createData("Martim Santos", "email.exemplo@email.com", "Coordenador"),
    createData("Letícia Ferreira ", "email.exemplo@email.com", "Funcionário"),
    createData("Joao Ferreira", "email.exemplo@email.com", "Aluno"),
  ];

  const [modalOpen, setModalOpen] = useState(false);

  const nav = useNavigate();

  return (
    <div className="section-body">
      <HeaderSidebar />
      <div className="section-container">
        <div className="top-container">
          <h1 className="pedidos-title">{pathname}</h1>
          <button
            className="system-btn"
            onClick={() => nav("/cadastrar material")}
          >
            Cadastrar Perfil
          </button>
        </div>

        <M.TableContainer component={Paper} className="table-container">
          <M.Table aria-label="simple table">
            <M.TableHead>
              <M.TableRow>
                <M.TableCell>Nome</M.TableCell>
                <M.TableCell align="left">Email</M.TableCell>
                <M.TableCell align="left">Cargo</M.TableCell>
                <M.TableCell align="center">
                  <I.EditPencil />
                </M.TableCell>
                <M.TableCell align="center">
                  <I.Trash />
                </M.TableCell>
              </M.TableRow>
            </M.TableHead>
            <M.TableBody>
              {rows.map((row) => (
                <M.TableRow key={row.nome}>
                  <M.TableCell component="th" scope="row">
                    {row.nome}
                  </M.TableCell>
                  <M.TableCell align="left">{row.email}</M.TableCell>
                  <M.TableCell align="left">{row.cargo}</M.TableCell>
                  <M.TableCell align="center" style={{ cursor: "pointer" }}>
                    <I.EditPencil
                      onClick={() => {
                        nav("/editar perfil");
                      }}
                    />
                  </M.TableCell>
                  <M.TableCell align="center" style={{ cursor: "pointer" }}>
                    <I.Trash
                      onClick={() => {
                        setModalOpen(!modalOpen);
                      }}
                    />
                  </M.TableCell>
                </M.TableRow>
              ))}
            </M.TableBody>
          </M.Table>
        </M.TableContainer>
      </div>
      {modalOpen && (
        <>
          <div className="modal-excluir-container">
            <h1 className="modal-title">Tem certeza?</h1>
            <div className="modal-divider"></div>
            <h3 className="modal-excluir-text">
              Essa ação não poderá ser revertida!
            </h3>
            <div className="modal-btn-container">
              <button
                className="modal-btn btn-cancelar"
                onClick={() => {
                  setModalOpen(!modalOpen);
                }}
              >
                Cancelar
              </button>
              <button
                className="modal-btn btn-confirmar"
                onClick={() => {
                  setModalOpen(!modalOpen);
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
          <div
            className="hs-overlay"
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
          ></div>
        </>
      )}
    </div>
  );
}
