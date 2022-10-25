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
                            <Link to={"/perro"} className="linkNV">
                                <img src="./images/bulldog.png" alt="perro" className="cardImg"  />
                                <h4 className="mt-2 hov">PERROS</h4>
                            </Link>
                        </div>
                </div>
                <div className="cardC">
                        <div >
                            <Link to={"/gato"} className="linkNV">
                                <img src="./images/persian-cat.png" alt="gato" className="cardImg" ></img>
                            <h4 className=" mt-2 hov">GATOS</h4>
                            </Link>
                        </div>
                </div>
                <div className="cardC">
                        <div>
                            <Link to={"/accesorios"} className="linkNV">
                                <img src="./images/collar.png" alt="accesorios" className="cardImg" ></img>
                                <h4 className="mt-2 hov">ACCESORIOS</h4>
                            </Link>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default CardCategory