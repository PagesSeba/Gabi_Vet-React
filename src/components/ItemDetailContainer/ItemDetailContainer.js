import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"



function ItemDetailContainer() {
    
    const { id } = useParams();
    const [casaca, setCasaca] = useState({});
    const navigate = useNavigate()



    const getProduct = async() => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let product = docSnap.data()
            product.id = docSnap.id
            setCasaca(product)
    
        } else {
            navigate("*")

        }
    }

    useEffect( () => {
        getProduct();
    }, [id])

    return(
        <div>
            <h2>Detalle de la Camiseta:</h2>
            <ItemDetail item={casaca}/>
        </div>
    );
}



export default ItemDetailContainer