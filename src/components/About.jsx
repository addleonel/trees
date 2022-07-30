import * as React from "react";
import "../assets/styles/Footer.scss";
import { Container } from "react-bootstrap";
import "../assets/styles/About.scss";




const About = () => {
  return (
    <React.Fragment>
        <Container>
            <div className="about-content">
                <div className="about-content-text">
                    <h1>Sobre Nosotros</h1>
                 
                    
                    <p>
                    Somos alumnos de Escuela Profesional de Ingeniería Industrial de la Universidad Nacional “Hermilio Valdizan”, que tiene como finalidad realizar un programa social con el proyecto de arborización
                    </p>
                  <img src="" alt="" />
                </div>
            </div>
        </Container>
    </React.Fragment>
  );
}

export default About;