import React from 'react'
import Logo from '../public/images/logo.png'
import Image from 'next/image'
import {BsCart4} from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
      <div className='w-11/12 mx-auto flex justify-between items-center py-4 border-2 border-blue-500'>
        <div className='w-32' >
          <Image src={Logo} alt='Gamehub logo' priority />
        </div>
        <div>
          <BsCart4 className='fill-white w-8 h-8' />
        </div>
      </div>
    </>
  )
}

export default Navbar
