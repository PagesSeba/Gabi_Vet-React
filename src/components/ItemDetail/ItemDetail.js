import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import CartContext from "../../context/CartContext";
import "./ItemDetail.css"


function ItemDetail({item}){
    const {img, marca, precio, stock, info, nombre, peso} = item
    const {cartProducts, addProductsToCart} = useContext(CartContext)
    const [click, setClick] = useState(true);

    

    const onAdd = (contador, kg) => {
        if (contador > 0 ){
            setClick(!click)
            item.stock-=contador;
            item.cantidad=contador;
            item.peso = kg;
            addProductsToCart(item);
            console.log("agregado al carro:", item)
        
          }
    }

    
    return(
        <div className="ItemDetailCard">
            <div className="ItemDetailImgContainer">
                <img src={`/assets/images/${img}`} className="ItemDetailImg"></img>
            </div>
            <div className="ItemDetailSM">
                <div className="container-1">
                <h2 className="precios">{nombre}</h2>
                <h6 className="equip">{marca}</h6>
                </div>
                <div className="gap-det">
                    <h5 className="precios">Peso: {peso}</h5>
                    <h5 className="precios">Información: {info}</h5>
                    <h5 className="precios">Precio: ${precio}</h5>
                    <h5 className="precios">Stock: {stock}</h5>
                </div>

                { click ? (
                    <div className="m-3">
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