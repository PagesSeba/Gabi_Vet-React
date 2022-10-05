import React from "react";
import "./SectionInfo.css"
import SecurityIcon from '@mui/icons-material/Security';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const SectionInfo = () => {
    return(
        <section className="containerSection container-fluid p-2 mt-6">
            <div className="containerCardS">
                <div className="cardCS">
                        <div className="iconCont">
                                <DeliveryDiningIcon className="icon"></DeliveryDiningIcon>
                        </div>
                                <h5 className="mt-2">Envíos</h5>
                                <p>Envios en ciudad de Córdoba</p>
                </div>
                <div className="cardCS">
                        <div className="iconCont">
                                <WhatsAppIcon className="icon"></WhatsAppIcon>
                        </div>
                                <h5 className="mt-2">Whatsapp</h5>
                                <p>Lunes a Viernes de 9 a 20hs</p>
                </div>
                <div className="cardCS">
                        <div className="iconCont">
                                <SecurityIcon className="icon"></SecurityIcon>
                        </div>
                                <h5 className="mt-2">Sitio Seguro</h5>
                                <p>Protegemos tus datos</p>
                </div>
            </div>
        </section>
    )
}

export default SectionInfo