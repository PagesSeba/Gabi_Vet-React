import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./CardCategory.css"
// import perro from "./images/perro.jpg"
// import gato from "../assets/images/gato.jpg"
// import accesorios from "./mercadoPago.jpg"

const CardCategory = () => {
    return(
        <section className="containerGen container-fluid mt-5 p-2">
            <h2 className="text-white">NUESTROS PRODUCTOS</h2>
            <div className="containerCard">
                <div className="cardC">
                        <div >
                            <Link to={"/perro"}  className="hov">
                                <img src="./images/perro.jpg" alt="perro" className="cardImg border"  />
                                <h4 className="mt-2 hov">PERROS</h4>
                            </Link>
                        </div>
                </div>
                <div className="cardC">
                        <div >
                            <Link to={"/gato"} className="hov">
                                <img src="./images/gato.jpg" alt="gato" className="cardImg border" ></img>
                            <h4 className=" mt-2 hov">GATOS</h4>
                            </Link>
                        </div>
                </div>
                <div className="cardC">
                        <div>
                            <Link to={"/accesorios"}  className="hov">
                                <img src="./images/accesorios.jpg" alt="accesorios" className="cardImg border" ></img>
                                <h4 className="mt-2 hov">ACCESORIOS</h4>
                            </Link>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default CardCategory