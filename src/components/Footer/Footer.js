import React from "react";
import "./Footer.css"
import logoVisa from "./visaLogo.jpg"
import logoMaster from "./mastercard.jpg"
import logoMercadoPago from "./mercadoPago.jpg"
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    return(
    <section id="footer footerComponent">
        <div className="main-footer">
            <div className="logoinfo" data-aos="fade-up">
            <div className="mb-2 d-flex flex-column">
                        <h3 className="textBlanco txtSm">Nuestras Redes</h3>
                        <div className="positionIconsGroup">
                            <a href="https://www.instagram.com/petclub_cba/" target="_blank"  className="linkNV">
                                <IconButton className="ig iconsFooter">
                                    <InstagramIcon />
                                </IconButton>
                            </a>
                            <a href="https://goo.gl/maps/W3ESghUEeWaa1xyB7" className="linkNV" target="_blank">
                                <IconButton className="tw iconsFooter">
                                    <LocationOnIcon />
                                </IconButton>
                            </a>
                            <a href="https://www.facebook.com/people/Pet-Club/100087925233602/?mibextid=LQQJ4d" target="_blank" className="linkNV">
                                <IconButton className="fb iconsFooter">
                                    <FacebookIcon />
                                </IconButton>
                            </a>
                        </div>
                        </div>

            <div className="contact-details">
                <h3 className="textBlanco txtSm" >Contacto</h3>
                <li className="d-flex justify-content-evenly align-items-start">
                <IconButton> <PhoneIcon /> </IconButton><p className="iSm">+54 351 3 786521</p>
                </li>
                <li className="d-flex justify-content-evenly align-items-start">
                <IconButton> <EmailIcon /> </IconButton><p className="iSm">rodisalinas12@gmail.com</p>
                </li>
                </div>
            </div>
        <div className="com ">
            <h3 className="textBlanco txtSm">Búsqueda</h3>
            <ul className="px-0 align-links">
            <li className="iSm" ><Link to={"/"} >Inicio</Link></li>
            <li className="iSm"><Link to={"/perro"} >Perros</Link></li>
            <li className="iSm"><Link to={"/gato"} >Gatos</Link></li>
            <li className="iSm"><Link to={"/accesorios"} >Accesorios</Link></li>
            <li className="iSm"><Link to={"/faqs"} >Preguntas Frecuentes</Link></li>
            <li className="iSm"><Link to={"/contacto"} >Contacto</Link></li>
            </ul>
        </div>
        <div className="mb-2 d-flex flex-column sociallogos">
                        <h4 className="textBlanco txtSm">Métodos de Pago</h4>
                        <div className="positionPaymentImg logobox">
                            <img src={logoVisa} className="imgPayment" alt="visa"></img>
                            <img className="imgPayment" alt="mastercard" src={logoMaster}></img>
                            <img className="imgPayment" alt="mercadopago" src={logoMercadoPago}></img>
                        </div>
                    </div>
        </div>
              
        <footer >© Pet Club Córdoba 2022</footer>
</section>
)
}
export default Footer