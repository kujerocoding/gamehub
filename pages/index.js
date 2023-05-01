import { HeroBanner, Navbar, Product, FooterBanner } from '@/components'
import React from 'react'
import {client} from '../lib/client'


const index = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      
      <div className='w-11/12 mx-auto py-16 text-center text-white'>
          <h2 className='font-inter font-bold text-xl text-primary-500'>Popular Products</h2>
          <p className='font-inter text-sm text-primary-400'>Elevate Your Gaming Experience with Our Computer Peripherals</p>
          <div className='py-6 flex flex-wrap items-center justify-center gap-6'>
            {products.map(product => <Product key={product._id} product={product} />)}
          </div>
      </div>

      <div>
      
        <FooterBanner footerBanner={bannerData && bannerData[1]} />
      </div>
      
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {products, bannerData}
  }
}

export default index
