import * as React from "react";
import "../assets/styles/Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="home-footer">
        <ul className="home-footer__ul">
            <li className="home-footer__li"><Link  to="/about/" className="home-footer__link">Sobre Nosotros</Link></li>
            <li className="home-footer__li"><span  className="home-footer__link">Contacto <FontAwesomeIcon icon={["fab", "whatsapp"]} className="home-footer__icon" />: 985400756</span></li>
            
        </ul>
    </div>
    <p className="home-footer__copyright">
      2022 © Todos los derechos reservados.
    </p>
    </React.Fragment>
  );
}

export default Footer;