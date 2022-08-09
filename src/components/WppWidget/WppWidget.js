import React from "react";
import './WppWidget.css';
import { Link } from "react-router-dom";

// Icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WppWidget = () => {
    return(
       
            <Link to={""} className="linkNV">
                <button className="wpp iconStatic">
                    <WhatsAppIcon />
                </button>
            </Link>

    )
}

export default WppWidget