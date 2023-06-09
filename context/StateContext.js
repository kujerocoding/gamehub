import React, {createContext, useContext, useState} from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    let foundProduct;
    let index;

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
        toast.success(`${qty} ${product.name} added to the cart!`, {
          position:'bottom-center',
          icon: '👍',
        })
    }

    const onRemove = (product) => {
      foundProduct = cartItems.find(item => item._id === product._id)
      const newCartItems = cartItems.filter(item => item._id !== product._id)

      setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price * foundProduct.quantity)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
      setCartItems(newCartItems)
    }

    const onBuy = ( product, quantity) => {
      onAdd(product, quantity )
      setShowCart(true)
  }

    

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id);
    
        if (value === "inc") {
          setCartItems([
            ...newCartItems,
            { ...foundProduct, quantity: foundProduct.quantity + 1 },
          ]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
        } else if (value === "dec") {
          if (foundProduct.quantity > 1) {
            setCartItems([
              ...newCartItems,
              { ...foundProduct, quantity: foundProduct.quantity - 1 },
            ]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
          }
        }
      };


    return (
        <Context.Provider
        value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            toggleCartItemQuantity,
            incQty,
            decQty,
            onAdd,
            onRemove,
            onBuy
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)