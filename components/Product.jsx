import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const Product = ({product: {image, name, slug, price}}) => {
    console.log(image)
  return (
    
      <Link href={`/product/${slug.current}`}>
        <div className='border-2 border-green-500'>
            <img src={urlFor(image && image[0])} className='w-52 border-2 border-red-500'/>
            <p className='text-white uppercase'>{name}</p>
            <p className='text-white font-bold'>${price}</p>
        </div>
      </Link>
    
  )
}

export default Product
