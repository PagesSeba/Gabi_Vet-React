import React, {useState, useEffect} from "react";

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
            <h6>Response</h6>
            <li>{initialState}</li>
        </div>
    )
}

export default ResBack