import React from 'react'
import Logo from '../public/images/logo.png'
import Image from 'next/image'
import {BsCart4} from 'react-icons/bs'
import Link from 'next/link'
import Cart from './Cart'
import { useStateContext } from '@/context/StateContext'

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext()
  return (
      <nav className='bg-black'>
        <div className='w-11/12 mx-auto flex justify-between items-center py-6'>
        <div className='w-32' >
          <Link href='/'>
            <Image src={Logo} alt='Gamehub logo' priority />
          </Link>
        </div>
        {!showCart && <button type='button' className='relative' onClick={() => setShowCart(true)}>
          <BsCart4 className='fill-primary-500 w-7 h-7' />
          {totalQuantities > 0 && <span className='absolute -top-2 -right-2 text-white bg-red-500 px-2 rounded-full'>{totalQuantities}</span>}
        </button>}
        {showCart && <Cart />}
        </div>
      </nav>
  )
}

export default Navbar
