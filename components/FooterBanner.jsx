import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const FooterBanner = ({footerBanner: {image,discount, largeText1, largeText2, saleTime, product,buttonText}}) => {
  return (
    <div className='bg-bannerBG-primary w-11/12 mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-center border-2 border-red-500'>
      <div className='basis-1/3 md:order-2 border-2 border-yellow-500'>
        <img src={urlFor(image)} alt="" className='max-w-xs'/>
      </div>
      <div className='basis-1/3 md:1 border-2 border-black'>
        
        <p className='text-xl'>{largeText1}</p>
        <p className='text-6xl'>{largeText2}</p>
        
      </div>
      <div className='basis-1/3 md:order-3 flex flex-col gap-4 border-2 border-green-400'>
        <p className='text-lg'>{discount}</p>
        <p className='text-lg'>{saleTime}</p>
        <Link href={`/product/${product}`}>
            <button type='button' className='text-white rounded-full py-4 px-8 bg-primary-400'>{buttonText}</button>
        </Link>
        
      </div>
    </div>
  )
}

export default FooterBanner
