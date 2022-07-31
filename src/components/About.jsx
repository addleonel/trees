import * as React from "react";
import { Container,
    Tab, 
    Row, 
    Nav, 
    Col,

} from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../assets/styles/Main.scss";
import ProductItem from "./ProductItem";
import { HashLink } from "react-router-hash-link";
import {llantas,
} from "../productsList.js";
const Products = () => {
    const listLlantas =  llantas.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    image={link.image}
                    in_="in-products"
                />
            </React.Fragment>
        )
    });

    return (
    <React.Fragment>
        <section className="section-p section-1">
            <Container fluid="xxl">
                <div className="portal-phrase">
                    <h1 className="portal-title">
                        Sobre Nosotros
                    </h1>
                    <p className="portal-subtitle">
                    Somos alumnos de Escuela Profesional de Ingeniería Industrial de la Universidad Nacional “Hermilio Valdizan”, que tiene como finalidad realizar un programa social con el proyecto de arborización en la comunidad de Libertadores de Pichipampa distrito de Pillco Marca Provincia y Departamento de Huánuco
                    
                    </p>
                </div>
            </Container>
        </section>
   
        <Container fluid="xxl" >
        <div className="products">   
            {listLlantas}
        </div>
         
        </Container>
    </React.Fragment>
  );
}

export default Products;