import React, {useEffect, useState} from 'react'
import Item from '../Item/Item'
import {Link, useParams} from "react-router-dom"
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { collection, getDocs, orderBy, limit, query} from "firebase/firestore"
import db from "../../firebase"
import "../ItemListContainer/ItemListContainer.css"



function TrendingProducts() {
    const { destacado } = useParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        const itemsCollection = query(collection(db, "productos"), orderBy("nombre", "asc"))
        console.log(itemsCollection)
        const productosSnapshot = await getDocs(itemsCollection)
        const productList = productosSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList 
    
    }

    
    
    useEffect(() => {
        setLoading(true)
        setProducts([])
        return getProducts().then((productos) => {
            setLoading(false)
            destacado ? filterProductByTrending(productos, destacado) : setProducts(productos)
            
            
            
        })

    }, [destacado])

    const filterProductByTrending = (array, destacado) => {
        array.map((producto)=> {
            if (destacado == producto.destacado){
                return setProducts( products => [...products, producto])
            }
        })


    }
    




    
    return (
        <div>
        <div className="cInicio">
            {
                !loading ? (
                    
                    products.map((producto) => {
                        const { id, nombre, precio, info, img, stock, marca, destacado } = producto;
                        if (destacado) {
                            return (
                            
                                <Link className='cardM linkNV negro' to={`./perro/${id}`}>
                                <div key={id} className="sombras" >
                                    <Item
                                        nombre={nombre}
                                        precio={precio}
                                        info={info}
                                        img={`/assets/images/${img}`}
                                        stock={stock}
                                        marca= {marca}
    
                                    />
                                   
                                </div>
                                </Link>
                            )}
                        }




                    )

                ) : (
                    <Box sx={{ display: 'flex' }} className="loading">
                        <CircularProgress />
                    </Box>
                )
            }

        </div>
        </div>


    )
}

export default TrendingProducts