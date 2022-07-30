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
    sistemaArrastre,
    sistemaElectrico,
    sistemaMotor,
    luces,
    accesoriosMotor, 
    accesoriosPiloto,
    sistemaFrenos
} from "../productsList.js";
const Products = () => {
    const listLlantas =  llantas.map((link) =>{
        return( 
            <React.Fragment>
                <ProductItem 
                    key={link.id}
                    name={link.name}
                    image={link.image}
                    price={link.price}
                    mark={link.mark}
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
                        Descubre nuestros productos
                    </h1>
                    <p className="portal-subtitle">
                        Explora nuestro catalogo
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