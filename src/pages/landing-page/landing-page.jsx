import "../../App.css";
import "./landing-page.css";
import { useState, useEffect } from "react";

// importando as libs
import { slide as Menu } from "react-burger-menu";
import AOS from "aos";
import "aos/dist/aos.css";

// importando imagens
import logoSenai from "../../assets/images/logo-senai.svg";
import menuHamburguer from "../../assets/images/menu-svgrepo-com (1).svg";
import heroImage from "../../assets/images/hero-image-full.svg";
import espaco1 from "../../assets/images/espaco1.svg";
import espaco2 from "../../assets/images/espaco2.svg";
import impressora1 from "../../assets/images/impressora1.svg";
import impressora2 from "../../assets/images/impressora2.svg";
import impressora3 from "../../assets/images/impressora3.svg";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <body>
      <header data-aos="fade-down">
        <img src={logoSenai} alt="logo" className="logo-senai" />
        <div className="sub-header">
          <h1 className="header-name">
            Espaço Maker <span className="span-header">3D</span>
          </h1>
          <img
            src={menuHamburguer}
            alt="menu hamburguer"
            className="icon-menu-hamburguer"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </div>
      </header>
      <Menu isOpen={menuOpen} width={"20%"} right className="menu-hamburger">
        <a id="roxo" className="menu-item" href="#login">
          Login
        </a>
        <a id="roxo" className="menu-item" href="#Registre-se">
          Registre-se
        </a>
        <a id="" className="menu-item" href="#contact">
          Sobre Nós
        </a>
        <a id="" className="menu-item" href="#horarios">
          Horários
        </a>
      </Menu>
      <section
        className="sec1"
        data-aos="fade-down"
        data-aos-duration="3000"
      ></section>
      <main>
        <div
          className="hero-container"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="hero-sub-container">
            <h1 className="hero-title">
              Conheça o <br /> nosso espaço.
            </h1>
            <button className="hero-button">Como Agendar?</button>
          </div>
          <img src={heroImage} alt="hero" />
        </div>
        <div className="divider"></div>
        <div
          className="sobre-container"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1 className="sobre-title">Sobre Nós</h1>
          <div className="sobre-sub-container">
            <h3 className="sobre-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquam purus sit amet luctus venenatis lectus. Dictumst quisque
              sagittis purus sit amet. Viverra ipsum nunc aliquet.
            </h3>
            <div className="sobre-image-container">
              <img src={espaco1} alt="a" className="sobre-image" />
              <img src={espaco2} alt="a" className="sobre-image" />
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div
          className="impressoras-container"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="impressoras-title">Nossas Impressoras</h1>
          <div className="card-container">
            <div className="card-impressora">
              <h2 className="card-title">Impressora 3D Creality CR-5 Pro</h2>
              <img src={impressora1} alt="impressora1" className="card-image" />
              <div className="card-divider"></div>
              <p className="card-text">
                Ideal para materiais de altas temperaturas, concilia um sistema
                de extrusão e uma estrutura cúbica estável efechada para manter
                a temperatura constante.
              </p>
            </div>
            <div className="card-impressora">
              <h2 className="card-title">
                Impressora 3D <br /> Resina Halot Mage
              </h2>
              <img src={impressora2} alt="impressora1" className="card-image" />
              <div className="card-divider"></div>
              <p className="card-text">
                Impressora de resina de última geração da Creality, que entrega
                impressões de alta qualidade. Com resolução de 8K, componentes
                High-End e velocidade de impressão que chega a 170mm/h.
              </p>
            </div>
            <div className="card-impressora">
              <h2 className="card-title">Impressora 3D CR-200B Creality</h2>
              <img src={impressora3} alt="impressora1" className="card-image" />
              <div className="card-divider"></div>
              <p className="card-text">
                Impressora CREALITY 3D CR-200B, requintada e de alto desempenho.
                A câmara fechada com 200x200x200mm apresenta um tamanho de
                impressão maior.
              </p>
            </div>
          </div>
        </div>
        <div className="tutorial-container">
          <h1 className="tutorial-titulo">Como Agendar</h1>
          <div className="tutorial-sub-container">
            <img src="" alt="" />
            <p>aa</p>
          </div>
          <div className="divider"></div>
          <div className="tutorial-sub-container">
            <img src="" alt="" />
            <p>aa</p>
          </div>
          <div className="divider"></div>
          <div className="tutorial-sub-container">
            <img src="" alt="" />
            <p>aa</p>
          </div>
          <div className="divider"></div>
          <div className="tutorial-sub-container">
            <img src="" alt="" />
            <p>aa</p>
          </div>
          <div className="divider"></div>
          <button className="tutorial-botao">Agende agora!</button>
        </div>
      </main>
    </body>
  );
}
