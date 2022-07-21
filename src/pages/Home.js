import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import EmblaCarousel from "../components/Carousel/js/EmblaCarousel";
import "../components/Carousel/css/embla.css"

const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Home = () => {
    
    return(
        <div>
            <div>
                <h1>Bienvenidos a FutCor!</h1>
                <h3>Nos dedicamos a la venta de camisetas de los mejores equipos de Córdoba Capital
                </h3>
                <h3>Proximos Ingresos:</h3>
                <EmblaCarousel slides={slides}/>
            </div>
            <h2>Todas las camisetas:</h2>
            <ItemListContainer />
        </div>
     )
}

export default Home;