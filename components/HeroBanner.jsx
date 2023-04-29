import React from 'react'
import Sample from '../public/images/sample.png'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const HeroBanner = ({heroBanner}) => {

  return (
    <div className='bg-bannerBG w-full mx-auto px-32 py-6 mt-5'>
      <div className='md:flex flex-row-reverse'>
        <div className='relative flex items-center justify-center basis-1/2'>
            <div className='before:absolute before:top-0 before:right-0 before:content-bannerNew before:scale-75 md:before:scale-100'>
            </div>
            <img src={urlFor(heroBanner.image)} className='max-w-xs' alt='atx'/>
        </div>

        <div className='basis-1/2 flex flex-col justify-center gap-4'>
            <p className='font-inter text-primary-400'>{heroBanner.smallText}</p>
            <h1 className='font-bruno text-5xl text-primary-500 uppercase'>{heroBanner.product}</h1>
            <p className='font-inter text-2xl text-primary-400 uppercase'>{heroBanner.midText}</p>
            <div>
              <Link href={`/product/${heroBanner.product}`}>
                <button type='button' className='font-bebas text-white rounded-full py-4 px-8 bg-btnColor hover:bg-white hover:text-primary-400 transition ease-in-out duration-300'>
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
