import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const HeroBanner = ({heroBanner}) => {

  return (
    <div className='bg-secondary-300 w-full mx-auto md:px-32 py-16 mt-5'>
      <div className='md:flex flex-row-reverse text-center md:text-left'>
        <div className='flex items-center justify-center basis-1/2'>
            <img src={urlFor(heroBanner.image)} className='max-w-xs' alt='atx'/>
            <div className='relative w-1 h-1'>
              <div className='before:absolute before:-top-40 before:-right-10 before:content-bannerNew before:scale-75'>
            </div>
            </div>
        </div>
        <div className='basis-1/2 flex flex-col justify-center gap-4'>
            <p className='font-inter text-2xl text-primary-400'>{heroBanner.smallText}</p>
            <h1 className='font-bruno text-5xl text-primary-500 uppercase'>{heroBanner.largeText1}</h1>
            <p className='font-inter text-2xl text-primary-400 uppercase'>{heroBanner.midText}</p>
            <div>
              <Link href={`/product/${heroBanner.product}`}>
                <button type='button' className='font-bebas  rounded-full py-4 px-8 text-primary-500  bg-product-secondary hover:bg-btnColor hover:text-secondary-300  transition ease-in-out duration-300'>
                  {heroBanner.buttonText}
                </button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
