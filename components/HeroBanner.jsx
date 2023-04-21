import React from 'react'
import Sample from '../public/images/sample.png'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const HeroBanner = ({heroBanner}) => {

  return (
    <div className='bg-bannerBG-primary w-11/12 mx-auto px-8 py-6 border-2 border-red-500'>
      <div className='md:flex flex-row-reverse border-2 border-yellow-500'>
        <div className='relative flex items-center justify-center basis-1/2 border-2 border-green-500'>
            <div className='before:absolute before:top-0 before:right-0 before:content-bannerNew before:scale-75 md:before:scale-100'>
            </div>
            <img src={urlFor(heroBanner.image)} className='max-w-xs' alt='atx'/>
        </div>

        <div className='basis-1/2 flex flex-col justify-center gap-4 border-2 border-pink-500'>
            <p className='text-primary-400'>{heroBanner.smallText}</p>
            <p className='text-2xl text-primary-400'>{heroBanner.midText}</p>
            <h1 className='text-6xl text-primary-500 uppercase'>{heroBanner.product}</h1>
            <div>
              <Link href={`/product/${heroBanner.product}`}>
                <button type='button' className='text-white rounded-full py-4 px-8 bg-primary-400'>
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
