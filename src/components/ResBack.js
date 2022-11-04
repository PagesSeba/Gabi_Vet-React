import { Button } from "@mui/material";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const ResBack = () => {
    const [initialState, setInitialState] = useState([])

    useEffect(async () => {
       await fetch('http://localhost:3002/payment').then(response => 
            response.json().then(data => ({
                data: data,
                status: response.status
            })
        ).then(res => {
            console.log(res.status, res.data)
            setInitialState(res.data)
        }));
    }, [])

    console.log("valor " + initialState)
     return(
        <div>
            <a className="linkNV" href={initialState} Target="_blank">
                <Button variant="contained">Pagar con Mercado Pago</Button>
            </a>
        </div>
    )
}

export default ResBack