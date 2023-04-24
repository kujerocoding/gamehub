import React from "react"
import Link from "next/link"
import { useStateContext } from "@/context/StateContext"
import { urlFor } from "@/lib/client"
import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'

const Cart = () => {
    
    const { totalPrice, cartItems, totalQuantities, showCart, setShowCart, toggleCartItemQuantity , onRemove} = useStateContext()
    
  return (

        <div className='absolute top-0 right-0 flex bg-white/30 w-full h-full z-50 backdrop-blur-sm border-2 border-black overflow-y-auto'>
        <div className='basis-1/3' onClick={() => setShowCart(false)}></div>
        <div className=' basis-2/3 bg-white p-8 border-2 border-blue-500 overflow-y-auto'>
            <div className="flex justify-between pb-8">
                <p>Your Cart <span>({totalQuantities} items)</span></p>
                <button type='button' className="underline" onClick={() => setShowCart(false)}>Back</button>
            </div>
           {/*  EMPTY CART */}
            {cartItems.length < 1 && (
                <div>
                    <p>Your shopping bag is empty</p>
                    <Link href="/">
                    <button type='button'  onClick={() => setShowCart(false)}>Continue Shopping</button>
                    </Link>
                </div>
            )}
            
            {/* CART WITH ITEM */}
            {cartItems.length >= 1 && cartItems.map(item => (
                <div key={item._id}
                    className="flex flex-wrap items-center justify-evenly p-2 mb-2 bg-gray-200"
                >
                    <img src={urlFor(item?.image[0])} alt="" className="w-40"/>
                    <div className="">
                        <p className="text-lg uppercase">{item.name}</p>
                        <p className="capitalize">{item.details}</p>
                        <p className="text-sm">Unit Price : <span className="text-lg font-bold text-red-500">₱{item.price}</span></p>
                        <div>
                            <div className=' flex items-center gap-4'>
                                <p className="text-sm">Quantity </p>
                                <div className='items-center border-2 border-white inline-flex '>
                                    <button type='button' className='p-2 active:bg-red-500' onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                                        <AiFillMinusCircle className='w-6 h-6' />
                                    </button>
                                    <p className='py-2 px-6 border-r-2 border-l-2 border-white'>{item.quantity}</p>
                                    <button type='button' className='p-2 active:bg-green-500' onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                                        <AiFillPlusCircle className='w-6 h-6' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="button" onClick={() => onRemove(item)}>Delete</button>
                        </div>
                    </div>
                </div>           
                ))}

                {/* SUBTOTAL AND PAY WITH STRIPE */}
                {cartItems.length >= 1 && (
                    <div className="flex flex-col gap-4 py-8 items-end">
                        <div className="w-full md:w-1/2 flex items-center justify-between">
                            <p>Total Payment :</p>
                            <p className="text-xl font-bold">{totalPrice}</p>
                        </div>
                        <button className="bg-red-500 w-full md:w-1/2 p-2">Pay with Stripe</button>
                    </div>
                )}
            
            
        </div>
    </div>
    
  )
}

export default Cart


