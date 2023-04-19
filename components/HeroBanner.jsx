import React from 'react'
import Image from 'next/image'
import Sample from '../public/images/sample.png'

const HeroBanner = () => {
  return (
    <div className='bg-bannerBG-primary w-11/12 mx-auto mt-4 px-8 py-6 border-2 border-red-500'>
      <div className='md:flex flex-row-reverse border-2 border-yellow-500'>
        <div className='relative flex items-center justify-center basis-1/2 border-2 border-green-500'>
            <div className='before:absolute before:top-0 before:right-0 before:content-bannerNew'>
            </div>
            <Image src={Sample} className='w-4/6'/>
        </div>

        <div className='basis-1/2 flex flex-col justify-center gap-4 border-2 border-pink-500'>
            <p className='text-primary-400'>Beats Solo</p>
            <p className='text-2xl text-primary-400'>Wireless</p>
            <h1 className='text-6xl text-primary-500'>HEADPHONES</h1>
            <div>
                <button className='text-white rounded-full py-4 px-8 bg-primary-400'>Shop Wireless Headphones</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeroBanner
