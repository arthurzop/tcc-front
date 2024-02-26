import "../../App.css"
import "./landing-page.css"

// importando imagens
import logoSenai from "../../assets/images/logo-senai.svg"
import menuHamburguer from "../../assets/images/menu-svgrepo-com (1).svg"
import heroImage from "../../assets/images/hero-image.svg"

export default function LandingPage() {
    return (
        
        <body> 
            <header>
                <img src={logoSenai} alt="logo" className="logo-senai" />
                <div className="sub-header">
                    <h1 className="header-name">Espaço Maker <span className="span-header">3D</span></h1>
                    <img src={menuHamburguer} alt="menu hamburguer" className="menu-hamburguer" />
                </div>
            </header>
            <section className="sec1"></section>
            <div className="main">
                <div className="hero-container">
                    <h1 className="hero-title">Conheça o <br /> nosso espaço</h1>

                    <img src={heroImage} alt="" />
                </div>
            </div>
        </body>
    )
}