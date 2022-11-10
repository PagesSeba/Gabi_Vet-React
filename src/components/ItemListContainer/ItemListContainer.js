import React, {useEffect, useState} from 'react'
import Item from '../Item/Item'
import {Link, useParams} from "react-router-dom"
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { collection, getDocs, orderBy, limit } from "firebase/firestore"
import db from "../../firebase"
import "./ItemListContainer.css"



function ItemListContainer() {
    const { category } = useParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        const itemsCollection = collection(db, "productos") 
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
            category ? filterProductByCategory(productos, category) : setProducts(productos)
            
        })

    }, [category])

    const filterProductByCategory = (array, category) => {
        array.map((producto)=> {
            if (category == producto.categoria){
                return setProducts( products => [...products, producto])
            }
        })


    }

    return (
        <div>

        <div>

          
        </div>
        <div className="cInicio">
            {
                !loading ? (
                    
                    products.map((producto) => {
                        const { id, nombre, precio, info, img, stock, categoria, marca } = producto;
                        if (category) {
                        return (
                            <Link className=' cardM linkNV negro' to={`./${id}`}>
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
                        else {
                            return (
                            
                                <Link className='cardM linkNV negro' to={`./${categoria}/${id}`}>
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

export default ItemListContainer