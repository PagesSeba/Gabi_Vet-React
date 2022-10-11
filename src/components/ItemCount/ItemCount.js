import React, {useState} from "react"
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./ItemCount.css"

    function ItemCount({initial, stock, onAdd}) {


    const [contador , setCount] = useState(initial)


    const add = () => {
        if(contador < stock) { 
            setCount(contador + 1)
        }
    }
    const removeAdd = () => {
          if(contador > 1) {
            setCount(contador - 1)
        }
    }
    
    return(
        <div>
        <div className="enCards">
            <div className="contador m-3">
                <Button onClick={removeAdd} color="error" className="btnContador">-</Button>
                <p>{contador}</p>
                <Button onClick={add} color="success" className="btnContador">+</Button>
            </div>
            <div>
                <Button color="primary" aria-label="add to shopping cart" variant="contained" sx={{ borderRadius: '100px' }} onClick={() => onAdd(contador)}>
                    <AddShoppingCartIcon />
                </Button>
            </div>
        </div>
        </div>
    )

}





export default ItemCount