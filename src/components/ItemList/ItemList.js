import React, {useState} from "react";
import Item from "../Item/Item";
import "./ItemList.css"



function ItemList() {

    const [camisetas, setCamisetas] = useState([])

    return (
        <div className="cInicio">
            {
            camisetas.map((camiseta) => {
                return(
                    <div className="cardM" key={camiseta.id}>
                        <Item 
                        img={`/assets/images/${camiseta.img}`}
                        equipo={camiseta.equipo}
                        info={camiseta.info}
                        precio={camiseta.precio}
                        id={camiseta.id}
                        stock={camiseta.stock}
                        />
                    </div>
                )
            })
        }
        </div>
    )

}





export default ItemList