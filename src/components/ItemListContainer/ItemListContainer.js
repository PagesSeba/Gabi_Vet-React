import React, {useEffect, useState} from 'react'
import Item from '../Item/Item'
import {Link, useParams} from "react-router-dom"
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { collection, getDocs} from "firebase/firestore"
import db from "../../firebase"
import "./ItemListContainer.css"



function ItemListContainer() {
    const { category } = useParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        const itemsCollection = collection(db, "productos")
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
        
        <div className="cInicio">
            
            {
                !loading ? (
                    products.map((producto) => {
                        const { id, equipo, precio, info, img, stock, categoria } = producto;
                        if (category) {
                        return (
                            
                            <Link className=' cardM linkNV negro' to={`./${id}`}>
                            <div key={id} className="sombras" >
                                <Item
                                    equipo={equipo}
                                    precio={precio}
                                    info={info}
                                    img={`/assets/images/${img}`}
                                    stock={stock}

                                />
                               
                            </div>
                            </Link>
                        )} 
                        else {
                            return (
                            
                                <Link className='cardM linkNV negro' to={`./${categoria}/${id}`}>
                                <div key={id} className="sombras" >
                                    <Item
                                        equipo={equipo}
                                        precio={precio}
                                        info={info}
                                        img={`/assets/images/${img}`}
                                        stock={stock}
    
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


    )
}

export default ItemListContainer