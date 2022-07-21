
import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

// Icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { Container, IconButton } from "@mui/material";


function Footer() {
    return(
    <footer className="footerComponent">
        <Container className="footerbgcolor">
            <div className="inFooterPs">
                <div className="positionText">
                    <h4 className="">Copyright FutCor - 2021. Todos los derechos reservados.</h4>
                </div>
                <div className="positionIconsGroup">
                    <Link to={""} className="linkNV">
                        <IconButton className="wpp iconsFooter">
                            <WhatsAppIcon />
                        </IconButton>
                    </Link>
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
        </Container>
</footer>
    )
}

export default Footer;