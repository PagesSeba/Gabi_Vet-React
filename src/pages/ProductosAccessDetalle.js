import { useParams } from "react-router-dom"
import React from "react"
import ItemAccessDetailContainer from "../components/ItemDetailContainer/ItemAccessDetailContainer"

const ProductosAcessDetalle = () => {
        const { id } = useParams();

        return(
            <div>
            <ItemAccessDetailContainer id={id} />
            </div>
        )
    }

export default ProductosAcessDetalle