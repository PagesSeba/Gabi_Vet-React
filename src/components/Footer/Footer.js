import React from "react";
import "./Footer.css"
import logoVisa from "./visaLogo.jpg"
import logoMaster from "./mastercard.jpg"
import logoMercadoPago from "./mercadoPago.jpg"
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return(
    <section id="footer footerComponent">
        <div className="main-footer">
            <div className="logoinfo" data-aos="fade-up">
            <div className="mb-2 d-flex flex-column">
                        <h3 className="textBlanco">Nuestras Redes</h3>
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
                                <IconButton className="fb iconsFooter">
                                    <FacebookIcon />
                                </IconButton>
                            </Link>
                        </div>
                        </div>

            <div className="contact-details">
                <h3 className="textBlanco" >Contacto</h3>
                <li className="d-flex justify-content-evenly align-items-start">
                <IconButton> <PhoneIcon /> </IconButton><p>+54 351 3 786521</p>
                </li>
                <li className="d-flex justify-content-evenly align-items-start">
                <IconButton> <EmailIcon /> </IconButton><p>rodisalinas12@gmail.com</p>
                </li>
                </div>
            </div>
        <div className="com ">
            <h3 className="textBlanco">Mapa</h3>
            <ul className="px-0">
            <li><Link to={"/"} >Inicio</Link></li>
            <li><Link to={"/perro"} >Perros</Link></li>
            <li><Link to={"/gato"} >Gatos</Link></li>
            <li><Link to={"/accesorios"} >Accesorios</Link></li>
            <li><Link to={"/faqs"} >Preguntas Frecuentes</Link></li>
            <li><Link to={"/contacto"} >Contacto</Link></li>
            </ul>
        </div>
        <div className="mb-2 d-flex flex-column sociallogos">
                        <h4 className="textBlanco">Métodos de Pago</h4>
                        <div className="positionPaymentImg logobox">
                            <img src={logoVisa} className="imgPayment" alt="visa"></img>
                            <img className="imgPayment" alt="mastercard" src={logoMaster}></img>
                            <img className="imgPayment" alt="mercadopago" src={logoMercadoPago}></img>
                        </div>
                    </div>
        </div>
              
        <footer>© Pet Club Córdoba 2022</footer>
</section>
)
}
export default Footer