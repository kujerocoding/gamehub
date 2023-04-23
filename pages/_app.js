import {Layout} from '@/components'
import '@/styles/globals.css'
import React from 'react'
import { StateContext } from '@/context/StateContext'

export default function App({ Component, pageProps }) {
  return (
  <StateContext>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </StateContext>
  )
}
