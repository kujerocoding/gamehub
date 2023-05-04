import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
import { motion } from 'framer-motion'

const FooterBanner = ({footerBanner: {image,discount, largeText1, largeText2, saleTime, product,buttonText}}) => {
  return (
    <div className='bg-bannerBG-primary w-full mx-auto md:px-32 py-16 flex flex-col items-center justify-center gap-4 md:flex-row bg-secondary-300'>
      <div className='relative basis-1/3 md:order-2'>
        <motion.div className='before:absolute before:top-0 before:-right-10 before:content-bannerSale before:scale-75'
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.3}} 
        transition={{duration: 0.5, delay: 0.5}}
        variants={{
              hidden: {opacity: 0,  y: 100},
              visible: {opacity: 1, y:0}
        }}
        ></motion.div>
        <motion.img src={urlFor(image)} alt="" className='max-w-xs'
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.3}} 
        transition={{duration: 0.5}}
        variants={{
              hidden: {opacity: 0,  y: -100},
              visible: {opacity: 1, y:0}
        }}
        />
      </div>
      <div className='basis-1/3 text-center md:text-left md:self-center'>
        <p className='text-2xl text-primary-400 font-inter'>{largeText1}</p>
        <motion.h2 className='text-5xl text-primary-500 font-bruno uppercase'
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.3}} 
        transition={{duration: 0.5, delay: 0.8}}
        variants={{
              hidden: {opacity: 0,  y: 100},
              visible: {opacity: 1, y:0}
        }}
        >{largeText2}</motion.h2>
      </div>
      <div className='basis-1/3 flex flex-col items-center  justify-center md:order-3 md:self-end  md:items-start gap-4'>
        <div className='flex md:flex-col gap-8 md:gap-2'>
          <p className='text-primary-400 text-lg font-bold'>{discount}</p>
          <p className='text-primary-400 text-lg'>{saleTime}</p>
        </div>
        <Link href={`/product/${product}`}>
            <button type='button' className='btn--banner'>{buttonText}</button>
        </Link>
      </div>
    </div>
  )
}

export default FooterBanner
