import React, {useEffect} from "react";

import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../assets/styles/Header.scss';
import buttonURL from "../utils";

const Header = () => {
  const contactURL = buttonURL;
  // Change background color on scroll
  const changeBackground = () => {
    if (window.scrollY >= 66){
      let nb = document.getElementById('navbarroot-id');
      nb.style.background = '#fff';
      nb.style.boxShadow = '0px 3px 3px rgba(27, 51, 78, 0.09)';
    }else {
      let nb = document.getElementById('navbarroot-id');
      nb.style.background = '#fff';
      nb.style.boxShadow = 'none';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground); 
  })

  
  
  const hideCompanyOptions = () => {
    let options = document.getElementById('nav-bar-options-company-id');
    let optionsContainer = document.getElementById('nav-bar-options-company-container-id');
    options.style.display = 'none';
    optionsContainer.style.display = 'none';
    document.getElementById('navbarroot-id').style.background = '#fff';
  }

  // reponsive options
  const displayResponsive = (e) => {
    e.preventDefault();
    let responsiveBlock = document.getElementById("nav-bar__responsive");
    if (responsiveBlock.className === "nav-bar__responsive--none") {
        responsiveBlock.className = "nav-bar__responsive--block";
    } else if (responsiveBlock.className === "nav-bar__responsive--block") {
        responsiveBlock.className = "nav-bar__responsive--none";
    }
  }

  const disableMenu = (e) => {

      let responsiveBlock = document.getElementById("nav-bar__responsive");
      if (responsiveBlock.className === "nav-bar__responsive--block") {
          responsiveBlock.className = "nav-bar__responsive--none";
      }
  }

  const enableMenu = (e) => {
      e.stopPropagation();
      let menu = document.getElementById("nav-bar__responsive-list-id");
      menu.style.display = "block";
  }

  return (
    <React.Fragment>
      <nav id="navbarroot-id" className="navbarroot">
        <Container fluid="xxl" className="nav-bar"> 
            <a className="nav-bar__logo" href="/">
              <img className="nav-bar__logo-image" src="https://raw.githubusercontent.com/addleonel/trees/main/public/logo.jpeg"alt=""/>
                 <span className="nav-bar__logo-text">Proyecto de Arbolización</span>
            </a>
             
            <div className="nav-bar__display" id="nav-bar__display-id" onClick={ displayResponsive }>
                <img className="nav-bar__display-icon" src="https://raw.githubusercontent.com/addleonel/trees/main/src/assets/static/icons/bars.svg" alt=""/> 
            </div>
            
            <div className="nav-bar__buttons">
            <Link className="nav-bar__buttons-item nav-bar__buttons-item--business"  to="/plant/">Plantación y Riego</Link>
            <Link className="nav-bar__buttons-item nav-bar__buttons-item--business"  to="/info/">información</Link>
              <Link className="nav-bar__buttons-item nav-bar__buttons-item--business"  to="/about/">Sobre nosotros</Link>                                                                                                     
            </div>
        </Container>         
      </nav>
        <div id="nav-bar-options-company-container-id">
          <div id="nav-bar-options-company-id" className="nav-bar-options">
              <Container className="options-items">
                <Fade cascade direction="right" duration={500}>
                  <Link className="nav-bar__buttons-item items-container" to="/about/" onClick={hideCompanyOptions}>
                    <FontAwesomeIcon className="items-icon" icon="fa-solid fa-address-card"/>
                    <h3 className="items-title">Sobre nosotros</h3>
                    <p className="items-text"></p>
                  </Link>
                  <Link className="nav-bar__buttons-item items-container" to="/contact/" onClick={() => window.location.href = contactURL}>
                    <FontAwesomeIcon className="items-icon" icon="fa-solid fa-address-book"/>
                    <h3 className="items-title">Contacto</h3>
                    <p className="items-text"></p>
                  </Link>
                </Fade> 
              </Container>
          </div>
        </div>
      <section id="nav-bar__responsive" className="nav-bar__responsive--none"  onClick={ disableMenu }>
        <ul id="nav-bar__responsive-list-id" className="nav-bar__responsive-list" onClick={ enableMenu }>
        <li className="nav-bar__responsive-li" ><Link id="about-res"  onClick={ disableMenu } className="nav-bar__responsive-item" to="/about/">Plantación y Riego</Link></li>
            <li className="nav-bar__responsive-li" ><Link id="about-res"  onClick={ disableMenu } className="nav-bar__responsive-item" to="/about/">Sobre Nosotros</Link></li>
            <li className="nav-bar__responsive-li" ><Link id="products-res"  onClick={ disableMenu } className="nav-bar__responsive-item" to="/products/">Productos</Link></li>
        </ul>                                                       
      </section>
    </React.Fragment>
  );
}

export default Header;