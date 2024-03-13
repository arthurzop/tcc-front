import HeaderSidebar from "../../../components/header-sidebar/header-sidebar";
import * as M from "@mui/material"

export default function CriarMaterial() {
  return (
    <div className="section-body">
      <HeaderSidebar />
      <div className="section-container">
        <div className="cadastrar-container">
            <h1 className="cadastrar-title">Cadastrar Novo Material</h1>
            <div className="cadastrar-input">
                <p className="cadastrar-label">Cor:</p>
                <M.TextField fullWidth></M.TextField>
            </div>
            <div className="cadastrar-input select">
                <p className="cadastrar-label">Diâmetro:</p>
                <M.Select fullWidth>
                    <M.MenuItem>1.75mm</M.MenuItem>
                    <M.MenuItem>1.75mm</M.MenuItem>
                </M.Select>
            </div>
            <div className="cadastrar-input">
                <p className="cadastrar-label">Peso: (unitário)</p>
                <M.TextField fullWidth></M.TextField>
            </div>
            <div className="cadastrar-input">
                <p className="cadastrar-label">Quantidade:</p>
                <M.TextField fullWidth></M.TextField>
            </div>
            <div className="cadastrar-input">
                <p className="cadastrar-label">Material:</p>
                <M.TextField fullWidth></M.TextField>
            </div>
            <button className="system-btn cadastrar-btn">Cadastrar</button>
        </div>
        
      </div>
    </div>
  );
}
