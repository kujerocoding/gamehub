import React from 'react'
import Sample from '../public/images/sample.png'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const HeroBanner = ({heroBanner}) => {

  return (
    <div className='bg-secondary-300 w-full mx-auto md:px-32 py-16 mt-5'>
      <div className='md:flex flex-row-reverse text-center md:text-left'>
        <div className='flex items-center justify-center basis-1/2'>
            
            <img src={urlFor(heroBanner.image)} className='max-w-xs' alt='atx'/>
            <div className='relative w-1 h-1'>
              <div className='before:absolute before:-top-40 before:right-0 before:content-bannerNew before:scale-75'>
              </div>
            </div>
        </div>

        <div className='basis-1/2 flex flex-col justify-center gap-4'>
            <p className='font-inter text-primary-400'>{heroBanner.smallText}</p>
            <h1 className='font-bruno text-5xl text-primary-500 uppercase'>{heroBanner.product}</h1>
            <p className='font-inter text-2xl text-primary-400 uppercase'>{heroBanner.midText}</p>
            <div>
              <Link href={`/product/${heroBanner.product}`}>
                <button type='button' className='font-bebas text-secondary-300 rounded-full py-4 px-8 bg-btnColor hover:bg-product-secondary hover:text-primary-500 transition ease-in-out duration-300'>
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
