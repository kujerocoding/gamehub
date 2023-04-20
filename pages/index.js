import { HeroBanner, Navbar, Product } from '@/components'
import Head from 'next/head'
import React from 'react'
import {client} from '../lib/client'


const index = ({products, bannerData}) => {
  return (
    <>
      <Head>
        <title>GameHub</title>
        <meta name='description' content='Your One-Stop Shop for Gaming Peripherals'/>
        <meta name='author' content='Jerome Manset'/>
      </Head>
      <Navbar />
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      
      <div className='py-10 text-center text-white'>
        <h2>Popular Products</h2>
        <p>lorem ipsum</p>
      </div>
      <div className='flex flex-col border-2 border-yellow-500 md:flex-row items-center md:items-end justify-center gap-4'>
        {products.map(product => <Product key={product._id} product={product} />)}
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
