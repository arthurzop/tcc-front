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
import tutorial1 from "../../assets/images/tutorial1.svg";
import tutorial2 from "../../assets/images/tutorial2.svg";
import tutorial3 from "../../assets/images/tutorial3.svg";
import tutorial4 from "../../assets/images/tutorial4.svg";

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
        <div className="tutorial-container" data-aos="fade-up"
          data-aos-duration="2000" >
          <h1 className="tutorial-title">Como Agendar</h1>
          <div className="tutorial-divider-up"></div>
          <div className="tutorial-sub-container" data-aos="fade-right"
          data-aos-duration="3000" >
            <img className="tutorial-image" src={tutorial1} alt="" />
            <p className="tutorial-text">
              <span className="background-text">1. </span> Registre-se (ou faça
              login, se já tiver uma conta). Para agendar é necessário estar
              registrado.
            </p>
          </div>
          <div className="tutorial-divider"></div>
          <div className="tutorial-sub-container" data-aos="fade-left"
          data-aos-duration="3000">
            <p className="tutorial-text">
              <span className="background-text">2. </span>Separe seu projeto em
              PDF ou Imagem! Saiba para quando quer agendar e o tempo estimado de
              impressão.
            </p> 
            <img className="tutorial-image" src={tutorial4} alt="" />
          </div>
          <div className="tutorial-divider"></div>
          <div className="tutorial-sub-container" data-aos="fade-right"
          data-aos-duration="3000">
            <img className="tutorial-image" src={tutorial3} alt="" />
            <p className="tutorial-text">
              <span className="background-text">3. </span> Escolha a data, o
              tempo estimado e envie o arquivo (imagem ou pdf) na área de
              agendamento.
            </p>
          </div>
          <div className="tutorial-divider"></div>
          <div className="tutorial-sub-container" data-aos="fade-left"
          data-aos-duration="3000">
            <p className="tutorial-text">
              <span className="background-text">4. </span> Tudo pronto! Agora
              só esperar a data e o tempo determinado para a impressão.
            </p>
            <img className="tutorial-image" src={tutorial2} alt="" />
          </div>
          <button className="tutorial-botao" data-aos="fade-up"
          data-aos-duration="3000">Agende agora!</button>
        </div>
        <div className="horario-container">
          <h1 className="horario-titulo">Horários</h1>
          <div className="horario-sub-container">
            <div className="horario-left">
              <h2>Seg. a Sex.</h2>
              <h2>Sábado</h2>
              <h2>Domingo</h2>
            </div>
            <div className="horario-middle">
              <h2>-</h2>
              <h2>-</h2>
              <h2>-</h2>
            </div>
            <div className="horario-left">
              <h2>8h às 20h</h2>
              <h2>Fechado</h2>
              <h2>Fechado</h2>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
