import { useParams } from "react-router-dom"
import React from "react"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"

const CamisetasDetalle = () => {
        const { id } = useParams();

        return(
            <div>
            <ItemDetailContainer id={id} />
            </div>
        )
    }

export default CamisetasDetalle