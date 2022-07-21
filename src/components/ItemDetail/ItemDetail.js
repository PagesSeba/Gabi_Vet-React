import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import CartContext from "../../context/CartContext";
import "./ItemDetail.css"

function ItemDetail({item}){
    const {img, equipo, precio, stock, info, detalle, talle} = item
    const {cartProducts, addProductsToCart} = useContext(CartContext)
    const [click, setClick] = useState(true);

    

    const onAdd = (contador) => {
        if (contador > 0 ){
            setClick(!click)
            item.stock-=contador;
            item.cantidad=contador;
            addProductsToCart(item);
            console.log("agregado al carro:", item)
        
          }
    }

    
    return(
        <div className="ItemDetailCard">
            <div>
                <img src={`/assets/images/${img}`} className="ItemDetailImg"></img>
            </div>
            <div className="ItemDetailSM">
                <p className="precios">Equipo: {equipo}</p>
                <p className="precios">Información: {info}</p>
                <p className="precios">Talle: {talle}</p>
                <p className="precios">Detalle: {detalle}</p>
                <p className="precios">Precio: ${precio}</p>
                { click ? (
                    <div>
                            <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
                    </div>  
                ) : (
                    <div className="mt10">
                        <Link className="linkNV" to={"/cart"}>
                            <Button variant="contained" color="success" >Terminar Compra</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}


export default ItemDetail