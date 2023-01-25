import React, { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [productos, setCart] = useState({ products: [] })

    useEffect(() => {
        fetch('https://dummyjson.com/products/')
        .then((response) => response.json())
        .then((json) => setCart(json))
        },[])

        
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let posicion = productos.findIndex(x=>x.id===item.id);
            productos[posicion].quantity+=quantity;
            setCart([...productos]);
        }else{
            setCart([...productos,{...item,quantity:quantity}]);
        }
    }

    const removeItem = (id) => {
        const productos = productos.filter(x =>x.id !== id);
        setCart(productos); 
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return productos.some(x => x.id === id);
    }

    const cartTotals = () => {
        return productos.reduce((total,item)=>total+=item.quantity,0)
    }

    const sumaTotals = () => {
        return productos.reduce((total,item)=>total+=item.quantity*item.Precio,0)
    }

    return (
        <CartContext.Provider value={{productos, addItem, removeItem, clearCart, cartTotals, sumaTotals}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;