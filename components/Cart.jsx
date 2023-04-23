import React from "react"
import Link from "next/link"
import { useStateContext } from "@/context/StateContext"
import { urlFor } from "@/lib/client"
import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'

const Cart = () => {
    
    const { totalPrice, cartItems, totalQuantities, showCart, setShowCart, toggleCartItemQuantity} = useStateContext()
    console.log(cartItems)
  return (
    <div className='absolute top-0 right-0 flex bg-white/30 w-full h-full z-50 backdrop-blur-sm'>
        <div className='basis-1/3' onClick={() => setShowCart(false)}></div>
        <div className='basis-2/3 h-screen bg-white'>
            <button type='button' onClick={() => setShowCart(false)}>Back</button>
            <p>Your Cart <span>({totalQuantities} items)</span></p>
            {cartItems.length < 1 && (
                <div>
                    <p>Your shopping bag is empty</p>
                    <Link href="/">
                    <button type='button'  onClick={() => setShowCart(false)}>Continue Shopping</button>
                    </Link>
                </div>
            )}
            
            <div>
                {cartItems.length >= 1 && cartItems.map(item => (
                    <div key={item._id}>
                        <img src={urlFor(item?.image[0])} alt="" className="w-48"/>
                        <div>{item.details}</div>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                        <div>
                            <div className=' flex items-center gap-4'>
                                <p>Quantity </p>
                                <div className='items-center border-2 border-white inline-flex '>
                                    <button type='button' className='p-2 active:bg-red-500' onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                                        <AiFillMinusCircle className='w-6 h-6' />
                                    </button>
                                    <p className='py-2 px-6 border-r-2 border-l-2 border-white'>{totalQuantities}</p>
                                    <button type='button' className='p-2 active:bg-green-500' onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                                        <AiFillPlusCircle className='w-6 h-6' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button>Delete</button>
                        </div>
                        <div>
                            <p>Subtotal:</p>
                            <p>{totalPrice}</p>
                        </div>
                        <div>
                            <button>Pay with Stripe</button>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Cart


