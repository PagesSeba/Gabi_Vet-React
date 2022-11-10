const {React  ,createContext, useState} = require ("react")

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [prodQuantity, setProdQuantity] = useState();

    const addProductsToCart = (product) =>{
        let repetido= cartProducts.find(cartProducts => cartProducts.id === product.id)

        !repetido && setCartProducts(cartProducts =>[...cartProducts, product])

    }
 const deleteProducts = (product) => {
     setCartProducts(cartProducts.filter((cartProducts) =>{
         return cartProducts.id !== product.id
     }))
    }
    const clearCart = () => {
        setCartProducts([]);
    }
    
    const cantidadItems = () => {
        let cantidad = 0;
        for(const producto of cartProducts){
            cantidad = cantidad + producto.cantidad;
        }
        setProdQuantity(cantidad);
        return cantidad
    }

    const totalPrice = () => {
        let total = 0
        cartProducts.map((cartProduct) => {
            total = cartProduct.precio*cartProduct.cantidad + total
        })
        return total
    }

const data = {
    cartProducts,
    prodQuantity,
    cantidadItems,
    addProductsToCart,
    deleteProducts,
    totalPrice,
    clearCart,
}
    


    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext