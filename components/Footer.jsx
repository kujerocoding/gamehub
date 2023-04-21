import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter  } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='border-2 border-orange-500 flex flex-col items-center justify-center gap-4 py-10 text-white'>
      <p>Follow us</p>
      <div className='flex gap-4'>
        <BsFacebook className='hover:text-black'/>
        <BsInstagram className='hover:text-black'/>
        <BsTwitter className='hover:text-black'/>
      </div>
      <p className='text-sm'>&copy; GameHub 2023. All rights reserved.</p>
    </div>
  )
}

export default Footer
