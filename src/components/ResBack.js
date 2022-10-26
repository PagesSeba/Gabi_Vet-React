import React, {useState, useEffect} from "react";

const ResBack = () => {
    const [initialState, setInitialState] = useState([])

    useEffect(() => {
      fetch('/').then(res => {
          if(res.ok){
              return res.json()
          }
      }).then(jsonResponse=> setInitialState(jsonResponse))
    }, [])

    console.log("valor " + initialState)
    return(
        <div>
            <h6>Response</h6>
            {initialState.length > 0 && initialState.map((e,i) => <li key={i}>{e}</li> )}
        </div>
    )
}

export default ResBack