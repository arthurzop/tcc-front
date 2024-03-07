import './not-found.css'
import { useNavigate } from 'react-router-dom'

import notfound from '../../assets/images/not-found.gif'

export default function NotFound() {
    const nav = useNavigate()

    return (
        <div className="nf-container">
            <div className="nf-info">
                <div className="nf-text-container">
                    <h1 className="nf-title">Erro <span className="nf-title-highlight">404</span></h1>
                    <h2 className="nf-subtitle">Página não encontrada :/</h2>
                </div>
                <button className="button2" onClick={() => {nav('/')}}>Voltar para Home</button>
            </div>
            <div className="nf-design">
                <img src={notfound} alt="" className='nf-image nf-hero'/>
            </div>
        </div>
    )
}