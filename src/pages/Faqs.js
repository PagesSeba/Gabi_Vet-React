import React from "react"
import { Container, Grid } from "@mui/material"
import WppWidget from "../components/WppWidget/WppWidget"
import "./Faqs.css"

const Faqs = () => {
    return(
        <Container>
            <WppWidget />
            <Grid>
            <h1> Preguntas Frecuentes</h1>
            </Grid>
            <ul className="boxInstrucciones">
                <li>
                    ¿Como comprar?
                    <p>Una vez que hayas completado el formulario de compra, y generado la orden de compra de tu carrito, nos contactaremos con usted via mail para informarle el plazo de envío de sus productos. </p>
                </li>
                <li>
                    Formas de Pago 
                    <p>Podes abonar tu compra en efectivo, transferencia bancaria o con tarjetas de credito y/o debito a traves de Mercado Pago. <br/>
                    Si elegis Mercado Pago, veras en el detalle la orden generada que identifica tu compra. </p>
                </li>
                <li>
                    Cancelación de pedido
                    <p>Podes cancelar tu orden de compra generada cuando nos contactemos con usted para informarle del envio</p>
                </li>
            </ul>
        </Container>
    )
}

export default Faqs