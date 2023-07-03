import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>website</title>
      </Head>
      <header>
        <link href="https://fonts.googleapis.com/css2?family=Recursive&display=swap" rel="stylesheet"></link>
      </header>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
