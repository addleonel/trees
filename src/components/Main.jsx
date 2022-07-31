import React , { useState, useEffect } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "../assets/styles/Main.scss";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import buttonURL from "../utils.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// products
import ProductItem from "./ProductItem";
import { llantas, 
 } from "../productsList.js";

const Main = () => {
	const contactURL = buttonURL;
	const [showp, setShowp] = useState(5);
	const bakground = "https://raw.githubusercontent.com/addleonel/trees/main/src/assets/static/products/t1.jpeg";
	const sliderState = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: showp,
		slidesToScroll: 1
	}

	useEffect(()=>{	
		window.addEventListener('load', () => {
			if (window.innerWidth <= 450) {
				setShowp(1);
			}
		});
	}, []);

	useEffect(()=>{	
		window.addEventListener('locationchange', ()=> {
			if (window.innerWidth <= 450) {
				setShowp(1);
			}
		});
	}, []);
	
	useEffect(()=>{	
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 1160) {
				setShowp(4);
			}
		});
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 923) {
				setShowp(3);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 710) {
				setShowp(2);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 450) {
				setShowp(1);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth > 1160) {
				setShowp(5);
			}
		});
	}, []);


	return (
		<React.Fragment>
			<section className="section-m section-1"
				style={{backgroundImage: `url(${bakground})`, backgroundSize: "cover", backgroundPosition: "center"}}
			>
				<Container>
					<div className="section-1-content">
						<div className="portal-phrase">
							<h1 className="portal-title">
								UNIVERSIDAD NACIONAL HERMILIO VALDIZAN
							</h1>
							<p className="portal-subtitle">
								FACULTAD DE INGENIERIA INDUSTRIAL Y SISTEMAS
							</p>
							<p className="portal-subtitle">
								PROYECTO DE ALBOLIZACIÓN
							</p>

							<p className="portal-subtitle">
								CURSO: DERECHO EMPRESARIAL
							</p>
							<p className="portal-subtitle">
								DOCENTE: ING. Pedro Villavicencio Guardia
							</p>
						</div>
					</div>
				</Container>
			</section>
			<section className="section-m section-2">
				<Container fluid="xxl">
					<div className="c-container">
						<div style={
							{
								position: "absolute",
								marginTop: "30px",
								marginLeft: "40px",
							}
						}>
							<h2>INTEGRANTES:</h2>
							<p style={{fontSize:"20px", fontWeight:"bold"}}>Alvarado Vicente Edgar Franco</p>
							<p style={{fontSize:"20px", fontWeight:"bold"}}>Huacho Tacuchi Levi</p>
							<p style={{fontSize:"20px", fontWeight:"bold"}}>Ramirez Anaya Arol</p>
							<p style={{fontSize:"20px", fontWeight:"bold"}}>Aguirre Obregon Yosep</p>
						</div>
						<img 
							style={{width: "100%", height: "auto"}}
						src="https://raw.githubusercontent.com/addleonel/trees/main/src/assets/static/products/t5.jpeg" alt="" />
							
					
					</div>
				</Container>
			</section>
		</React.Fragment>
  );
}

export default Main;