import { useParams } from "react-router-dom"
import React from "react"
import ItemGatoDetailContainer from "../components/ItemDetailContainer/ItemGatoDetailContainer"

const ProductosGatoDetalle = () => {
        const { id } = useParams();

        return(
            <div>
            <ItemGatoDetailContainer id={id} />
            </div>
        )
    }

export default ProductosGatoDetalle