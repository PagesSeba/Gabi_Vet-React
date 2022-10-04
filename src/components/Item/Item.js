import React  from 'react'
import Button from '@mui/material/Button';
import "./Item.css"


function Item(props) {
    const{img , nombre } = props
    
    return(
        <div className="sombras cardM">
            <img src={img} alt={img} className="imagenesCard"></img>
            <h4>{nombre}</h4>
            <Button>Más Información</Button>
        </div>
    )
}

export default Item