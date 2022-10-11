import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import EmblaCarousel from "../components/Carousel/js/EmblaCarousel";
import "../components/Carousel/css/embla.css"
import WppWidget from "../components/WppWidget/WppWidget";
import ItemCarousel from "../components/ItemCarousel/ItemCarousel";
import Carousel from "react-elastic-carousel";
import "../components/ItemCarousel/ItemCarousel.css";
import Item from "../components/Item/Item";
import CardCategory from "../components/CardCategory/CardCategory";
import SectionInfo from "../components/SectionInfo/SectionInfo";
import HeroSection from "../components/HeroSection/HeroSection";

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
            <HeroSection />
            <h3 className="mt-4">Destacado</h3>
            <ItemListContainer />
            <CardCategory />
            <SectionInfo />
        </div>
     )
}

export default Home;