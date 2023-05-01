import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const FooterBanner = ({footerBanner: {image,discount, largeText1, largeText2, saleTime, product,buttonText}}) => {
  return (
    <div className='bg-bannerBG-primary w-full mx-auto md:px-32 py-16 flex flex-col items-center justify-center gap-4 md:flex-row bg-secondary-300'>
      <div className='relative basis-1/3 md:order-2'>
        <div className='before:absolute before:top-0 before:right-0 before:content-bannerSale before:scale-75'></div>
        <img src={urlFor(image)} alt="" className='max-w-xs'/>
      </div>
      <div className='basis-1/3 md:self-center'>
        
        <p className='text-xl text-primary-400 font-inter'>{largeText1}</p>
        <p className='text-6xl text-primary-500 font-bruno'>{largeText2}</p>
        
      </div>
      <div className='basis-1/3 flex flex-col items-center  justify-center md:order-3 md:self-end  md:items-start gap-4'>
        <div className='flex md:flex-col gap-8 md:gap-2'>
          <p className='text-primary-400 text-lg font-bold'>{discount}</p>
          <p className='text-primary-400 text-lg'>{saleTime}</p>
        </div>
        
        <Link href={`/product/${product}`}>
            <button type='button' className='font-bebas text-secondary-300 rounded-full py-4 px-8 bg-btnColor hover:bg-product-secondary hover:text-primary-500 transition ease-in-out duration-300'>{buttonText}</button>
        </Link>
      </div>
      
    </div>
  )
}

export default FooterBanner
