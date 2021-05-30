import '../styles/globals.scss'
import { ApolloProvider } from '@apollo/client';
import client from "../client"
import { GlobalProvider } from "../components/context"
import Head from 'next/head'

const access = false 


function MyApp({ Component, pageProps}) {

  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />

      <link rel="manifest" href="/manifest.json" />
      <link
        href="/icons/iconx72.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/icons/iconx72.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#317EFB" />
    </Head>
   {
     access ?
     <ApolloProvider client={client}> 
     <GlobalProvider>
      <Component {...pageProps} />
      </GlobalProvider>
    </ApolloProvider>
    :""
   }
   </> 
  )
}

export default MyApp
