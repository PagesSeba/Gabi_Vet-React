import React from "react";
import "./Checkout.css"
import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"
import db from "../firebase"
import { collection, addDoc } from "firebase/firestore";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Checkout = () => {
    const navigate = useNavigate()
    const { cartProducts, totalPrice, clearCart } = useContext(CartContext)

    const [fecha] = useState (() => {
        var fechaDelDia = new Date()
        var today = fechaDelDia.getDate() + '/' + (fechaDelDia.getMonth() + 1) + '/' + fechaDelDia.getFullYear();
        return today
    })
    const [formData, setFormData] = useState(
        {

            name: "",
            phone: "",
            email: "",
           

        }
    )
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((product) => {
                return {
                    equipo: product.equipo,
                    categoria: product.categoria,
                    precioUnitario: product.precio,
                    precioFinal: product.precio*product.cantidad,
                    cantidad: product.cantidad,
                    id: product.id,
                    
                }
            }),
            date: fecha,
            total: totalPrice()
        }

    )

    const [orderLista, setOrderLista] = useState()
    const [loading, setLoading] = useState(true)


    const sendOrder = async () => {
        const docRef = await addDoc(collection(db, "ordenes"), { ...order, buyer: formData });
        console.log("orden enviada :", docRef.id)
        setOrderLista(docRef.id)

    }


    const dataUsuario = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
    const formSubmit = (e) => {

            
            e.preventDefault()
            setOrder({
                ...order,
                buyer: formData
            })
            sendOrder()
    
            setLoading(false)

    }
    const handleClose = () => {

        navigate("/")
        clearCart([])

    }

    return (
            <div>
        {
                loading ? (
                    <div className="checkoutMain">
                        <div className="checkout">
                            <div className="formCompra">
                                <h2>Finalizar Compra</h2>
                                <form className="formInt" onSubmit={formSubmit}>
                                    <input className="inputsCheckout" type="text" name="name" placeholder="Nombre Completo" onChange={dataUsuario} value={formData.name} required />
                                    <input className="inputsCheckout" type="number" name="phone" placeholder="Número de Telefono" onChange={dataUsuario} value={formData.phone} required />
                                    <input className="inputsCheckout" type="mail" id="email" name="email" placeholder="Correo Electrónico" onChange={dataUsuario} value={formData.email} required />
                                    <input className="inputsCheckout" type="mail" id="emailR" name="emailR" placeholder="Repita su Correo Electrónico" onChange={dataUsuario} value={formData.repeatEmail} pattern={formData.email} required />
                                    <Button type="submit" variant="contained" color="primary" className="btnForm">Enviar</Button>
                                </form>
                            </div>
                            <div className="resumenCart">
                                
                            <h4 className="resumenTop">Tu compra</h4>
                            {cartProducts.map((product) => {
                                const { id, img, equipo, categoria, precio, cantidad } = product;
                                const total = precio * cantidad;
                                    return (
                                        <div className="padreCheckoutItem" key={id}>
                                            <div><img src={`/assets/images/${img}`} alt={img} className="imgCheckoutItem" /  ></div>
                                            <div className="textCheckoutItem">
                                                <b className="equipoC">{equipo} {categoria} </b>
                                                <p className="detalleC">Precio Unitario ${precio}</p>
                                                <p className="detalleC">Cantidad: {cantidad}</p>
                                                <p className="detalleC"><p>Precio por cantidad ${total}</p></p>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                            
                            <p className="resumenBottom">Total: ${totalPrice()}</p>
                        </div>
                    </div>
                </div>

                ) : (
                    !orderLista ? (
                        <Box className="loading" sx={{ display: 'flex' }}>
                            <CircularProgress  color="success"/>
                        </Box>
                    ) : (
                        <div className="formCompraLista">
                            <div className="formCompraListaInt">
                            <h3> Muchas gracias por su compra! Su orden se ha generado exitosamente</h3>
                            <p>Su numero de órden es: <span className="orderCode">{orderLista}</span></p>
                            <Button onClick={handleClose} variant="contained" color="warning">Volver</Button>
                            </div>
                        </div>)

                )
            }
            </div>
    )


}

export default Checkout