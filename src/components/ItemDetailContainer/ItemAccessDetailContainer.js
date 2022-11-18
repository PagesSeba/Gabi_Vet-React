import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"



function ItemAccessDetailContainer() {
    
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate()



    const getProduct = async() => {
        const docRef = doc(db, "accesorios", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
    
        } else {
            navigate("*")

        }
    }

    useEffect( () => {
        getProduct();
    }, [id])

    return(
        <div>
            <ItemDetail item={product}/>
        </div>
    );
}



export default ItemAccessDetailContainer