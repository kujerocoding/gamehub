import React, { forwardRef } from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
import { motion } from 'framer-motion'


const Product = ({product: {image, name, slug, price, details, tags}}) => {

  const formattedPrice = price.toLocaleString()

  return (
    
      <motion.div 
      whileHover={{scale: 1.05}}
      >
        <Link href={`/product/${slug.current}`} >
        <div className='w-[250px] h-[450px] flex flex-col justify-between'>
            <div className='h-3/5 bg-product-primary p-4'>
              <img src={urlFor(image && image[0])} className='w-full'/>
            </div>
            <div className='basis-2/5 bg-product-secondary p-4 flex flex-col justify-between font-inter'>
                <p className='text-primary-400 font-bold uppercase'>{name}</p>
                <p className='text-secondary-200 capitalize text-sm'>{details}</p>
                <p className='text-primary-400 font-bold'>₱ {`${formattedPrice}.00`}</p>
                <p className='text-secondary-200 text-sm'>Tags: {tags}</p>
            </div>
        </div>
      </Link>
      </motion.div>
    
  )
}

export default Product
