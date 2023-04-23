import React, {createContext, useContext, useState, useEffect} from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState()
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


    return (
        <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)