import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import EmblaCarousel from "../components/Carousel/js/EmblaCarousel";
import "../components/Carousel/css/embla.css"
import WppWidget from "../components/WppWidget/WppWidget";
import ItemCarousel from "../components/ItemCarousel/ItemCarousel";
import Carousel from "react-elastic-carousel";
import "../components/ItemCarousel/ItemCarousel.css";
import Item from "../components/Item/Item";

const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const Home = () => {
    
    return(
        <div>
            <WppWidget />
            <div>
                <h1>Bienvenidos a FutCor!</h1>
                <h3>Nos dedicamos a la venta de camisetas de los mejores equipos de Córdoba Capital
                </h3>
                <h3>Proximos Ingresos:</h3>
                <EmblaCarousel slides={slides}/>
            </div>
            <h2>Todas las camisetas:</h2>
            <ItemListContainer />
            {/* <div className="App">
                <Carousel breakPoints={breakPoints}>
                <ItemListContainer></ItemListContainer>
                </Carousel>
            </div> */}
        </div>
     )
}

export default Home;