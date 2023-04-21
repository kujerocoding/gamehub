import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const Product = ({product: {image, name, slug, price}}) => {
    //console.log(image)
  return (
    
      <Link href={`/product/${slug.current}`} className='hover:scale-105'>
        <div className='w-48 h-64 p-4 bg-slate-300 border-2 border-green-500 flex flex-col justify-between'>
            <img src={urlFor(image && image[0])} className='w-full'/>
            <div>
                <p className='text-white uppercase'>{name}</p>
                <p className='text-white font-bold'>${price}</p>
            </div>

        </div>
      </Link>
    
  )
}

export default Product
