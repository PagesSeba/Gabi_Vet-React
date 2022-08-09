
import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import logoVisa from "./visaLogo.jpg"
import logoMaster from "./mastercard.jpg"
import logoMercadoPago from "./mercadoPago.jpg"

// Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from "@mui/material";


function Footer() {
    return(
    <footer className="footerComponent">
        <div className="container-fluid footerbgcolor">
            <div>

            </div>
            <div className="inFooterPs">
                <div className="positionText">
                    <h6 className="">© Plus Pet Córdoba</h6>
                </div>
                <div className="d-flex flex-column">
                        <h6 className="">Métodos de Pago</h6>
                        <div className="positionPaymentImg">
                            <img src={logoVisa} className="imgPayment" alt="visa"></img>
                            <img className="imgPayment" alt="mastercard" src={logoMaster}></img>
                            <img className="imgPayment" alt="mercadopago" src={logoMercadoPago}></img>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <h6 className="">Nuestras Redes</h6>
                        <div className="positionIconsGroup">
                            <Link to={""}  className="linkNV">
                                <IconButton className="ig iconsFooter">
                                    <InstagramIcon />
                                </IconButton>
                            </Link>
                            <Link to={""} className="linkNV">
                                <IconButton className="tw iconsFooter">
                                    <TwitterIcon />
                                </IconButton>
                            </Link>
                            <Link to={""} className="linkNV">
                                <IconButton className="mail iconsFooter">
                                    <EmailIcon />
                                </IconButton>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
</footer>
    )
}

export default Footer;