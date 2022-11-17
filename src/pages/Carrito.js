import React, { useContext } from "react"
import CartContext from "../context/CartContext"
import { Divider, Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom"
import { Container } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShopIcon from '@mui/icons-material/Shop';

import "./Carrito.css"

const Carrito = () => {


    const { cartProducts, deleteProducts, totalPrice, clearCart } = useContext(CartContext)

    return (
        <>
            <h1>Carrito</h1>
            {
                cartProducts.length ? (

                    <Container className="container">
                        <div className="carritoSection">
                        <table className=" table tablaCarrito">
                        <thead>
                            <tr className='carritoHeader'>
                                <th>Producto</th>
                                <th>Descripcion</th>
                                <th>Precio Unitario</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                    {cartProducts.map((product) => {
                        return (
                        <Container>
                            <tr className="Carro">
                                <td className="child1">
                                    <img className="imgCarro" src={`/assets/images/${product.img}`} />
                                </td>
                                <td className="child2">
                                    <p className="precios descItemCarro">{product.nombre} </p>
                                </td>
                                <td className="child3">
                                    <p className="precios precioUnidadItemCarro">${product.precio}</p>
                                </td>
                                <td className="child4">
                                    <p className="precios cantItemCarro">{product.cantidad} x {product.peso} </p>
                                </td>
                                <td className="child5">
                                    <p className="precios precioItemCarro">${product.precio*product.cantidad}</p>
                                </td>
                                <td className="borrarItemCarro">
                                    <IconButton >
                                        <DeleteIcon onClick={() => deleteProducts(product)} color="error"/>
                                    </IconButton>
                                </td>
                                <Divider />
                            </tr>
                        </Container>
                        )
                        
                    })}
                    </tbody>
                    </table>


                    <Container className="pTotal">
                        <h4>Total: ${totalPrice()}</h4>
                        <div className="btnCartWidget">
                        <Button variant="contained" color="error" endIcon={<DeleteForeverIcon />} onClick={() => clearCart()}>Descartar Compra</Button>
                        <Link to={"/checkout"} className="linkNV"><Button color="success" variant="contained" endIcon={<ShopIcon/>}>Finalizar Compra</Button></Link>
                        </div>
                    </Container>

                    </div>
                    </Container>


                ) : (
                    <div className="cartVacio">
                        <p> No hay productos en el carrito.</p>
                        <Link to={"/"} className="linkNV" ><Button color="warning">Camisetas</Button></Link>
                    </div>
                )

                
            }

        </>
    )


}

export default Carrito