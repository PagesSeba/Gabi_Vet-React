import React, {useState} from "react";
import Item from "../Item/Item";
import "./ItemList.css"



function ItemList() {

    const [products, setProducts] = useState([])

    return (
        <div className="">
            {
            products.map((product) => {
                return(
                    <div className="cardM" key={product.id}>
                        <Item 
                        img={`/assets/images/${product.img}`}
                        nombre={product.nombre}
                        info={product.info}
                        precio={product.precio}
                        id={product.id}
                        stock={product.stock}
                        />
                    </div>
                )
            })
        }
        </div>
    )

}





export default ItemList