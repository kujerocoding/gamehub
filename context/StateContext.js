import React, {createContext, useContext, useState, useEffect} from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [totalQuantities, setTotalQuantities] = useState()
    const [qty, setQty] = useState(1)

    const incQty = () => {
        setQty(prevQty => prevQty + 1)
    }

    const decQty = () => {
        setQty(prevQty => 
            prevQty - 1 < 1 ?  1 : prevQty - 1
        )
    }

    const onAdd = ( product, quantity) => {
        const checkProductInCart = cartItems.find(item => item._id === product._id)

        setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity)

        if(checkProductInCart){
            const updatedCartItems = cartItems.map(cartItem => {
                if(cartItem._id === product._id)
                return {...cartItem, quantity: cartItem.quantity + quantity }
            })
            setCartItems(updatedCartItems)
        }else{
            product.quantity = quantity
            setCartItems([...cartItems, {...product}])
        }
        alert(`${qty} ${product.name} added to the cart`)
    }


    return (
        <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)