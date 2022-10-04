import React, {useState} from "react"
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./ItemCount.css"

    function ItemCount({initial, stock, onAdd}) {
    const [kg, setKg] = React.useState({});

  const selectPeso = (event, newPeso) => {
    setKg(newPeso);
  };

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
            <div>
                <ToggleButtonGroup
                value={kg}
                exclusive
                onChange={selectPeso}
                className="gap-4"
                >
                    <ToggleButton value="3kg"  className='border'>
                        <h6>3kg</h6>
                    </ToggleButton>
                    <ToggleButton value="7kg" className='border'>
                        <h6>7kg</h6>
                    </ToggleButton>
                    <ToggleButton value="15kg" className='border'>
                        <h6>15kg</h6>
                    </ToggleButton>
                    <ToggleButton value="22kg" className='border'>
                        <h6>22kg</h6>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        <div className="enCards">
            <div className="contador m-3">
                <Button onClick={removeAdd} color="error" className="btnContador">-</Button>
                <p>{contador}</p>
                <Button onClick={add} color="success" className="btnContador">+</Button>
            </div>
            <div>
                <Button color="primary" aria-label="add to shopping cart" variant="contained" sx={{ borderRadius: '100px' }} onClick={() => onAdd(contador, kg)}>
                    <AddShoppingCartIcon />
                </Button>
            </div>
        </div>
        </div>
    )

}





export default ItemCount