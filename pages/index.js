import { HeroBanner, Navbar } from '@/components'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
      <Head>
        <title>GameHub</title>
        <meta name='description' content='Your One-Stop Shop for Gaming Peripherals'/>
        <meta name='author' content='Jerome Manset'/>
      </Head>
      <Navbar />
      <HeroBanner />
    </>
  )
}

export default index
