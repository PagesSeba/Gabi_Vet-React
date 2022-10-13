import React, { useRef } from "react";
import "./Checkout.css"
import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"
import db from "../firebase"
import { collection, addDoc } from "firebase/firestore";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import emailjs from "emailjs-com"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Container } from "@mui/material";
import { IconButton } from "@mui/material";

const Checkout = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmailMessage", "template_cba6d9n", form.current, "mCv1K4QfJ6UEr9SlF")
      .then((result) => {
          console.log(result.text);
          alert("Mensaje Enviado con éxito!")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
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
            address: "",
            observation: "",
            postal: "",
           

        }
    )
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((product) => {
                return {
                    nombre: product.nombre,
                    peso: product.peso,
                    categoria: product.categoria,
                    precioUnitario: product.precio,
                    precioFinal: product.precio*product.cantidad,
                    cantidad: product.cantidad ,
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
    const [value, setValue] = React.useState(true);

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    //   const entrega = () => {
    //     let value = document.getElementById([1])
    //     let name = document.getElementsByName([1])
    //     if (value.name == "deposito") {
    //     document.getElementById("texto").innerHTML = "Deposito"
    //     }
    //     else {
    //         document.getElementById("texto").innerHTML = "Entrega a domicilio"
    //     }
    //   }



    return (
            <div className="divGen">
        {
                loading ? (
                    <div className="checkoutMain">
                        <div className="checkout">
                            <div className="formCompra">
                                <h2>Finalizar Compra</h2>
                                <form ref={form} id="form" className="formInt" onSubmit={formSubmit || sendEmail}>
                                    <input className="inputsCheckout" type="text" name="name" placeholder="Nombre Completo" onChange={dataUsuario} value={formData.name} required id="name" />
                                    <input className="inputsCheckout" type="number" name="phone" placeholder="Número de Telefono" onChange={dataUsuario} value={formData.phone} required id="phone" />
                                    <input className="inputsCheckout" type="mail" id="email" name="email" placeholder="Correo Electrónico" onChange={dataUsuario} value={formData.email} required />
                                    <input className="inputsCheckout" type="mail" id="emailR" name="emailR" placeholder="Repita su Correo Electrónico" onChange={dataUsuario} value={formData.repeatEmail} pattern={formData.email} required />
                                    <Container className="">
                        <h4>Método de Entrega</h4>
                        <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            id="radiog"
                            value={value}
                            onChange={handleChange}
                            className="d-block"
                        >
                            <IconButton>
                                <FormControlLabel name="domicilio" id="1" value="true" control={<Radio />} label="Envío a domicilio" onClick={()=> setValue(true)} />
                                <LocalShippingIcon></LocalShippingIcon>
                            </IconButton>
                            <IconButton>
                                <FormControlLabel name="deposito" id="1" value="false" control={<Radio />} label="Retiro en depósito" onClick={()=> setValue(false)} />
                                <WarehouseIcon></WarehouseIcon>
                            </IconButton>
                        </RadioGroup>
                        </FormControl>

                    </Container>
                                    { value ?
                                            <>
                                            <h5>Solo se realizan envios dentro de Córdoba Capital</h5>
                                            <input className="inputsCheckout" type="text" id="address" name="address" placeholder="Dirección"  onChange={dataUsuario} value={formData.address} />
                                            <input className="inputsCheckout" type="text" id="postal" name="postal" placeholder="Código Postal"  onChange={dataUsuario} value={formData.postal} />
                                            <input className="inputsCheckout" type="text" id="observation" name="observation" placeholder="Observaciones"  onChange={dataUsuario} value={formData.observation} />
                                            </>
                                         : 
                                         <>
                                         <h4>Retiros en depósito:</h4>
                                         <h5>Lunes a Viernes en Emiliano Caraffa 235 de 10hs a 19hs
                                         </h5>
                                         </>
                                            
                                    }
                                

                                    <Button type="submit" variant="contained" color="primary" className="btnForm" value="Send Email" id="button">Enviar</Button>
                                </form>
                            </div>
                            <div className="resumenCart">
                                
                            <h4 className="resumenTop">Tu compra</h4>
                            {cartProducts.map((product) => {
                                const { id, img, nombre, precio, cantidad, peso } = product;
                                const total = precio * cantidad;
                                    return (
                                        <div className="padreCheckoutItem" key={id}>
                                            <div><img src={`/assets/images/${img}`} alt={img} className="imgCheckoutItem" /  ></div>
                                            <div className="textCheckoutItem">
                                                <b className="equipoC">{nombre} </b>
                                                <p className="detalleC">Precio Unitario ${precio}</p>
                                                <p className="detalleC">Cantidad: {cantidad} x{peso} </p>
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
                        <form id="form" className="formCompraLista">
                            <div className="formCompraListaInt">
                            <h3> Muchas gracias por su compra! Su orden se ha generado exitosamente</h3>
                            <p>Su numero de órden es: <span className="orderCode">{orderLista}</span></p>
                            <Button onClick={handleClose} variant="contained" color="warning">Volver</Button>
                            </div>
                        </form>)

                )
            }
            </div>
    )


}

export default Checkout