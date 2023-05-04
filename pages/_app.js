import {Layout} from '@/components'
import '@/styles/globals.css'
import React from 'react'
import { StateContext } from '@/context/StateContext'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
  
  <StateContext>
    <Toaster 
    toastOptions={{
      style: {
        background: '#1E1E1E',
        color: '#D9BC66',
      }
    }}
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </StateContext>
  )
}
