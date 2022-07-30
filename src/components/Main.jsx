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
	const bakground = "https://www.wikihow.com/images/thumb/9/9c/Grow-Pine-Trees-Step-1-Version-6.jpg/v4-728px-Grow-Pine-Trees-Step-1-Version-6.jpg.webp"
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

	const listLlantas =  llantas.slice(0, 7).map((link) =>{
        return( 
            <React.Fragment>
				<div>
					<ProductItem 
						key={link.id}
						name={link.name}
						image={link.image}
						price={link.price}
						mark={link.mark}
						in_=""
					/>
				</div>
            </React.Fragment>
        )
    });

	return (
		<React.Fragment>
			<section className="section-m section-1"
				style={{backgroundImage: `url(${bakground})`, backgroundSize: "cover", backgroundPosition: "center"}}
			>
				<Container>
					<div className="section-1-content" 
						
					>
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
						</div>
					
					</div>
				</Container>
			</section>
			<section className="section-m section-2">
				<Container fluid="xxl">
					
					<div className="c-container">
						<Slider {...sliderState}>
							{listLlantas}
						</Slider>
						
					</div>
				</Container>
			</section>
		</React.Fragment>
  );
}

export default Main;