import React from "react";
import "../components/Carousel/css/embla.css"
import WppWidget from "../components/WppWidget/WppWidget";
import "../components/ItemCarousel/ItemCarousel.css";
import CardCategory from "../components/CardCategory/CardCategory";
import SectionInfo from "../components/SectionInfo/SectionInfo";
import HeroSection from "../components/HeroSection/HeroSection";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts";

const Home = () => {
    
    return(
        <div>
            <WppWidget />
            <HeroSection />
            <h3 className="mt-4">Destacado</h3>
            <TrendingProducts />
            <CardCategory />
            <SectionInfo />
        </div>
     )
}

export default Home;