import '../styles/global.css'

import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { RecoilRoot } from 'recoil'

import client from '@/data/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Script
        crossOrigin="anonymous"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5476404733919333"
      />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ApolloProvider>
  )
}
export default MyApp
