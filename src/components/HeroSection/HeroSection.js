import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css"

const HeroSection = () => {
    return(
        <div class="hero">
  <div class="overlay"></div>
  <div class="content">
    <h1>Bienvenidos a PetClub</h1>
    <p>Todo para tus mascotas</p>
    <a href="#categories" className="linkNV"> <Button variant="contained" color="error">Ver Productos</Button> </a>
  </div>
</div>

    )
}

export default HeroSection