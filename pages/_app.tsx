// fixes a bug for next-auth and mongodb atlas somehow
// https://github.com/nextauthjs/next-auth/issues/833
import 'reflect-metadata'
import React from 'react'
import { Provider } from 'next-auth/client'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // auth provider
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
