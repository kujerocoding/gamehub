import { HeroBanner, Product, FooterBanner } from '@/components'
import React from 'react'
import {client} from '../lib/client'
import { motion } from 'framer-motion'


const index = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='w-11/12 mx-auto py-16 text-center text-white'>
          <h2 className='font-inter font-bold text-xl text-primary-500 mb-4 uppercase'>Popular Products</h2>
          <p className='font-inter text-sm text-primary-400'>Elevate Your Gaming Experience with Our Computer Peripherals</p>
          <div className='py-6 flex flex-wrap items-center justify-center gap-6'>
            {products.map((product, i) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.3}} 
              transition={{duration: 0.5, delay: i * 0.3}}
              variants={{
                    hidden: {opacity: 0, x:-100, y: -50},
                    visible: {opacity: 1, x:0, y:0}
              }}
              key={product._id}
            >
                <Product product={product} />
            </motion.div>))}
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
