import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css"

const HeroSection = () => {
    return(
        <div class="hero">
  <div class="overlay"></div>
  <div class="content">
    <h1>A Beautiful Hero Section.</h1>
    <p>This shit looks great, huh?</p>
    <Link to={"/perro"} className="linkNV"> <Button variant="contained" color="error">Ver Productos</Button> </Link>
  </div>
</div>

    )
}

export default HeroSection