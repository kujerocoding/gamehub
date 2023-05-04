import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
import { motion } from 'framer-motion'

const HeroBanner = ({heroBanner: {image, product, smallText, midText,largeText1, buttonText}}) => {

  return (
    <div className='bg-secondary-300 w-full mx-auto md:px-32 py-16'>
      <div className='md:flex flex-row-reverse text-center md:text-left'>
        <div className='flex items-center justify-center basis-1/2'>
            <motion.img src={urlFor(image)} className='max-w-xs' alt={product} 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.3}} 
            transition={{duration: 0.5}}
            variants={{
                  hidden: {opacity: 0,  y: 100},
                  visible: {opacity: 1, y:0}
            }}
            />
            <div className='relative'>
              <motion.div className='before:absolute before:-top-40 before:-right-10 before:content-bannerNew before:scale-75'
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.3}} 
              transition={{duration: 0.5, delay: 0.5}}
              variants={{
                    hidden: {opacity: 0, x: -100 },
                    visible: {opacity: 1, x:0 }
              }}
              >
            </motion.div>
            </div>
        </div>
        <div className='basis-1/2 flex flex-col justify-center gap-4'>
            <p className='font-inter text-2xl text-primary-400'>{smallText}</p>
            <motion.h1 className='font-bruno text-5xl text-primary-500 uppercase'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.3}} 
            transition={{duration: 0.8, delay: 0.8}}
            variants={{
                  hidden: {opacity: 0, scale: 0 },
                  visible: {opacity: 1, scale: 1 }
            }}
            >{largeText1}</motion.h1>
            <p className='font-inter text-2xl text-primary-400 uppercase'>{midText}</p>
            <div>
              <Link href={`/product/${product}`}>
                <button type='button' className='btn--banner'>
                  {buttonText}
                </button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
