import React from "react"
import { Container, Grid } from "@mui/material"
import WppWidget from "../components/WppWidget/WppWidget"
import "./Faqs.css"
import Accordion from 'react-bootstrap/Accordion';

const Faqs = () => {
    return(
        <Container className="mt-4">
            <Grid>
            <h1> Preguntas Frecuentes</h1>
            </Grid>
            <Accordion defaultActiveKey="0" className="mt-5 p-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Como comprar?</Accordion.Header>
        <Accordion.Body>
        Una vez que hayas completado el formulario de compra, y generado la orden de compra de tu carrito, nos contactaremos con usted via mail para informarle el plazo de envío de sus productos. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Formas de Pago </Accordion.Header>
        <Accordion.Body>
        Podes abonar tu compra en efectivo, transferencia bancaria o con tarjetas de credito y/o debito a traves de Mercado Pago. <br/>
                    Si elegis Mercado Pago, veras en el detalle la orden generada que identifica tu compra.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Cancelación de pedido </Accordion.Header>
        <Accordion.Body>
        Podes cancelar tu orden de compra generada cuando nos contactemos con usted para informarle del envio
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            <WppWidget />
        </Container>
    )
}

export default Faqs