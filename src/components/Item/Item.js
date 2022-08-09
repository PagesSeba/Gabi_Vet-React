import React  from 'react'
import Button from '@mui/material/Button';
import "./Item.css"


function Item(props) {
    const{img , equipo , info , precio} = props
    
    return(
        <div className="sombras cardM">
            <img src={img} alt={img} className="casacas"></img>
            <h2>{equipo}</h2>
            <p className='small'>{info}</p>
            <p className="precios">${precio}</p>
            <Button>Más Información</Button>
        </div>
    )
}

export default Item