import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter  } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='w-11/12 mx-auto gap-4 py-16 text-primary-400 font-inter'>
      <div className='flex flex-col gap-4 items-center text-center md:flex-row md:justify-around md:text-left'>
        <div>
          <h2 className='mb-4 font-bold'>Company</h2>
          <ul className='text-sm'>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2 className='mb-4 font-bold'>Support</h2>
          <ul className='text-sm'>
            <li>Get Help</li>
            <li>Support Videos</li>
            <li>Order Tracking</li>
          </ul>
        </div>
        <div>
        <h2 className='mb-4 font-bold'>Follow us</h2>
        <ul className='flex gap-4'>
          <li><BsFacebook /></li>
          <li><BsInstagram /></li>
          <li><BsTwitter /></li>
        </ul>
        </div>
      </div>
      <p className='mt-16 text-xs text-center text-primary-400'>Copyright &copy; 2023 GameHub - All rights reserved.</p>
    </div>
    </footer>
    
  )
}

export default Footer
