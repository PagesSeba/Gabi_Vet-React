import React, {useEffect, useState} from 'react'
import Item from '../Item/Item'
import {Link, useParams} from "react-router-dom"
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { collection, getDocs, orderBy, limit, query, startAfter} from "firebase/firestore"
import db from "../../firebase"
import "./ItemListContainer.css"



function ItemListContainer() {
    const { category } = useParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [lastVisible, setLastVisible] = useState([])

    const getProducts = async () => {
        const itemsCollection = query(collection(db, "productos"), orderBy("nombre", "asc") , limit(3))
        console.log(itemsCollection)
        const productosSnapshot = await getDocs(itemsCollection)
        setLastVisible(productosSnapshot.docs[productosSnapshot.docs.length-1]);
        console.log("last", lastVisible);
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
    const nextDoc = async () => {
        const next = query(collection(db, "productos"), orderBy("nombre", "asc"), startAfter(lastVisible), limit(2))
        console.log("next", next);
        const productosSnapshot = await getDocs(next)
        getDocs(next).then((snapshoot) => {
            const productList = productosSnapshot.docs.map((doc) => {
                let product = doc.data()
                product.id = doc.id
                return product
            })
            
            
            category ? filterProductByCategory(productList, category) : setProducts([...productList])
            setLastVisible(snapshoot.docs[snapshoot.docs.length - 1]);
    })
}
    
    return (
        <div>

        <div>
          <button onClick={nextDoc} >Siguiente</button>
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