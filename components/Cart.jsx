import React from "react"
import Link from "next/link"
import { useStateContext } from "@/context/StateContext"
import { urlFor } from "@/lib/client"
import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'
import {BsBagX} from 'react-icons/bs'
import { motion } from "framer-motion"

const Cart = () => {
    
    const { totalPrice, cartItems, totalQuantities, setShowCart, toggleCartItemQuantity , onRemove} = useStateContext()
    
  return (
        <div className='absolute top-0 right-0 flex bg-white/30 w-full z-50 h-full backdrop-blur-sm overflow-y-auto overflow-x-hidden'>
            <div className='basis-1/3' onClick={() => setShowCart(false)}></div>
            <motion.div className='bg-primaryBG basis-2/3 p-2 md:p-8 overflow-y-auto text-primary-400'
                animate={{ opacity: [0,1], x: [100,0]}}
                transition={{duration: 0.3}}
            >
            <div className="flex justify-between pb-8 font-inter text-sm">
                <p>Your Cart (<span className="font-bold">{totalQuantities}</span>) items</p>
                <button type='button' className="underline hover:text-primary-500" onClick={() => setShowCart(false)}>Close</button>
            </div>

           {/*  EMPTY CART */}
            {cartItems.length < 1 && (
                <div className="flex flex-col items-center justify-center py-16 gap-8">
                    <BsBagX className="w-20 h-20 " />
                    <p className="text-secondary-200">Your shopping bag is empty.</p>
                    <Link href="/">
                    <button type='button'
                    className="font-bebas py-3 px-6 text-primary-500  bg-product-secondary hover:bg-btnColor hover:text-secondary-300 transition ease-in-out duration-300"  
                    onClick={() => setShowCart(false)}>Continue Shopping</button>
                    </Link>
                </div>
            )}
            
            {/* CART WITH ITEM */}
            {cartItems.length >= 1 && cartItems.map(item => (
                <div key={item._id}
                    className="flex flex-wrap justify-between gap-4 p-2 mb-2 bg-product-secondary"
                >
                    <div>
                        <img src={urlFor(item?.image[0])} alt={`${item.name}`} className="w-32 h-32"/>
                        <div>
                            <button type="button" className="underline text-sm" onClick={() => onRemove(item)}>Delete</button>
                        </div>
                    </div>
                    <div className="w-[300px] flex flex-col justify-between">
                        <p className="text-lg uppercase">{item.name}</p>
                        <p className="text-sm text-secondary-200 capitalize">{item.details}</p>
                        
                        <div>
                            <div className=' flex items-center gap-4'>
                                <p className="text-sm">Quantity:</p>
                                <div className='items-center border-2 border-secondary-200 inline-flex '>
                                    <button type='button' className='px-2 active:text-primary-500' onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                                        <AiFillMinusCircle className='w-4 h-4' />
                                    </button>
                                    <p className=' px-6 border-r-2 text-sm border-l-2 border-secondary-200'>{item.quantity}</p>
                                    <button type='button' className='px-2 active:text-primary-500' onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                                        <AiFillPlusCircle className='w-4 h-4' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm">Unit Price : <span className="text-sm ">₱ {item.price.toLocaleString()}.00</span></p>
                        <p className="text-sm font-bold">Subtotal : <span  className="text-md font-bold">₱ {(item.price * item.quantity).toLocaleString()}.00</span></p>
                        
                    </div>
                </div>           
                ))}

                {cartItems.length >= 1 && (
                    <div className="flex flex-col gap-4 py-8 items-end">
                        <div className="w-full md:w-1/2 flex items-center justify-between">
                            <p>Total Payment :</p>
                            <p className="text-xl font-bold">₱ {totalPrice.toLocaleString()}.00</p>
                        </div>
                        <button className="w-full md:w-1/2 p-2 font-bebas py-3 px-6 text-primary-500  bg-product-secondary hover:bg-btnColor hover:text-secondary-300 transition ease-in-out duration-300">Checkout</button>
                    </div>
                )}
            </motion.div>
        </div>
    )
    
}

export default Cart


