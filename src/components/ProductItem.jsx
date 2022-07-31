import React, {useState} from "react";
import "../assets/styles/Main.scss";
import buttonURL from "../utils.js";
import { Button, Modal} from "react-bootstrap";

const ProductItem= (props) => {
    const contactURL = buttonURL;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
    const class_= "c-item" + ` ${props.in_}`;

    const [multiply, setMultiply] = useState(1);

    const decreaseMultiply = () => {
        if (multiply <= 1) {
            setMultiply(1);
        }else {
            setMultiply(multiply - 1);
        }
    }

    const increaseMultiply = () => {
            setMultiply(multiply + 1);
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <React.Fragment>
            <div className={class_}>
                <Button 
                style={{backgroundColor: "transparent", border: "none"}}
                variant="primary" onClick={handleShow}>
                <div className="c-image">
                    <img src={props.image} width="300px" alt="" />
                </div>
                </Button>
            </div>


            <Modal show={show} onHide={handleClose} size="lg" centered  style={{ borderRadius: "10px !important",}}>
                    <Modal.Header closeButton>
                
                    </Modal.Header>
                    <Modal.Body >
                        <div className="content-modal-elements">
                            <img className="modal-image" src={props.image} width="250px" alt="" />
                        </div>
                       
                    </Modal.Body>
                    
                </Modal>
        </React.Fragment>
    );
}

export default ProductItem;