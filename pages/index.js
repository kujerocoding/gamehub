import { HeroBanner, Navbar, Product, FooterBanner } from '@/components'
import React from 'react'
import {client} from '../lib/client'


const index = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      
      
      <div className='w-11/12 mx-auto py-6 text-center text-white border-2 border-emerald-500'>
          <h2>Popular Products</h2>
          <p>lorem ipsum</p>
        <div className='py-6 flex border-2 border-yellow-500 flex-wrap items-center justify-center gap-4'>
          {products.map(product => <Product key={product._id} product={product} />)}
        </div>
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
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
