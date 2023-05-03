import React from 'react'
import Head from 'next/head'
import {Navbar, Footer} from '../components'

const Layout = ({children}) => {
  return (
    <>
        <Head>
            <title>GameHub</title>
            <meta name='description' content='Your One-Stop Shop for Gaming Peripherals'/>
            <meta name='author' content='Jerome Manset'/>
            <link rel="shortcut icon" href="/images/joystick-icon.ico" />
        </Head>
        <header>
            <Navbar />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default Layout
