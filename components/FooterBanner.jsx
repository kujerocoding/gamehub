import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const FooterBanner = ({footerBanner: {image,discount, largeText1, largeText2, saleTime, product,buttonText}}) => {
  return (
    <div className='w-11/12 border-2 border-white'>
      <div>
        <img src={urlFor(image)} alt="" />
      </div>
      <div>
        <p>{discount}</p>
        <p>{largeText1}</p>
        <p>{largeText2}</p>
        <p>{saleTime}</p>
      </div>
      <div>
        <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
        </Link>
        
      </div>
    </div>
  )
}

export default FooterBanner
