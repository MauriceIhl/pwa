import '../styles/globals.scss'
import { ApolloProvider } from '@apollo/client';
import client from "../client"
import { GlobalProvider } from "../components/context"
import { useState, useEffect } from "react"
import Head from 'next/head'




function MyApp({ Component, pageProps}) {
  const[access, setAccess] = useState(false)
  const[session, setSession] = useState()
  const[input, setInput] = useState("")

  useEffect(() => {
    let sessionValue = localStorage.getItem("Session")
    sessionValue = JSON.parse( sessionValue )

    if (sessionValue == "accepted") {{
      setSession(sessionValue)
      setAccess(true)
    }}
  }, [])

  const handleInput = (value) => {
    setInput(value)
  }

  const handleSubmit = () => {
    if(input == process.env.SESSION_KEY) {
      localStorage.setItem("Session", JSON.stringify("accepted"))
    }
    setInput('')
    window.location.reload()
  }

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
    :
    <div className="accessWindow">
      <div className="accessBox">
      <p>Diese Seite dient nur zu Demonstrationszwecken im Rahmen einer Untersuchung. Diese Seite nutzt den LocalStorage.</p>
      <label>Passwort</label>
      <input onChange={(e) => handleInput(e.target.value)} className="pwaccess"></input>
      <button type="submit" onClick={handleSubmit}>Einverstanden</button>
      </div>
    </div>
   }
   </> 
  )
}

export default MyApp
