import React from 'react'
import Logo from '../public/images/logo.png'
import Image from 'next/image'
import {BsCart4} from 'react-icons/bs'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className='w-11/12 mx-auto flex justify-between items-center py-4 border-2 border-blue-500'>
        <div className='w-32' >
          <Link href='/'>
            <Image src={Logo} alt='Gamehub logo' priority />
          </Link>
        </div>
        <button type='button' className='relative'>
          <BsCart4 className='fill-white w-8 h-8' /><span className='absolute -top-2 -right-2 text-white bg-red-500 px-2 rounded-full'>1</span>
        </button>
      </div>
    </>
  )
}

export default Navbar
