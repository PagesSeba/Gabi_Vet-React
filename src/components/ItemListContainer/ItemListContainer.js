import React, {useEffect, useState} from 'react'
import Item from '../Item/Item'
import {Link, useParams} from "react-router-dom"
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { collection, getDocs, orderBy, limit, query, startAfter} from "firebase/firestore"
import db from "../../firebase"
import "./ItemListContainer.css"
import { IconButton } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';



function ItemListContainer() {
    const { category } = useParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [lastVisible, setLastVisible] = useState([])
    const [firstVisible, setFirstVisible] = useState([])

    const getProducts = async () => {
        const itemsCollection = query(collection(db, "productos"), orderBy("nombre", "asc") , limit(4))
        console.log(itemsCollection)
        const productosSnapshot = await getDocs(itemsCollection)
        setLastVisible(productosSnapshot.docs[productosSnapshot.docs.length-1]);
        setFirstVisible(productosSnapshot.docs[productosSnapshot.docs.length-1])
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
            setProducts(productos)
            
        })

    }, [])
    


    const prevDoc = async () => {
        const prev = query(collection(db, "productos"), orderBy("nombre", "desc"), startAfter(firstVisible), limit(4))
        console.log("prev", prev);
        const productosSnapshot = await getDocs(prev)
        getDocs(prev).then((snapshoot) => {
            const productList = productosSnapshot.docs.reverse().map((doc) => {
                let product = doc.data()
                product.id = doc.id
                return product
            })
    
            setProducts([...productList]);
            setLastVisible(snapshoot.docs[snapshoot.docs.length = 0]);
        })
    }
    const nextDoc = async () => {
        const next = query(collection(db, "productos"), orderBy("nombre", "asc"), startAfter(lastVisible), limit(4))
        console.log("next", next);
        const productosSnapshot = await getDocs(next)
        getDocs(next).then((snapshoot) => {
            const productList = productosSnapshot.docs.map((doc) => {
                let product = doc.data()
                product.id = doc.id
                return product
            })
            
            
            setProducts([...productList])
            setLastVisible(snapshoot.docs[snapshoot.docs.length - 1]);
    })
}

    
    return (
        <div>

        <div className='paginationButton mt-4'>
            <IconButton variant="contained" color='success'>
                <ArrowCircleLeftIcon onClick={prevDoc} />
            </IconButton>
            <IconButton variant="contained" color='success'>
                <ArrowCircleRightIcon onClick={nextDoc} />
            </IconButton>
        </div>
        <div className="cInicio">
            {
                !loading ? (
                    
                    products.map((producto) => {
                        const { id, nombre, precio, info, img, stock, marca, peso } = producto;
                            return (
                            
                                <Link className='cardM linkNV negro' to={`./${id}`}>
                                <div key={id} className="sombras" >
                                    <Item
                                        nombre={nombre}
                                        precio={precio}
                                        info={info}
                                        peso={peso}
                                        img={`/assets/images/${img}`}
                                        stock={stock}
                                        marca= {marca}
    
                                    />
                                   
                                </div>
                                </Link>
                            )}




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