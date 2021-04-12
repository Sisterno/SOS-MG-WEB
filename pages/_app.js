import '../styles/globals.css'
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
  <>
    <Head>
      <link
        rel="preload"
        href="/fonts/Roboto/Roboto-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
      <meta httpequiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
      <meta name="HandheldFriendly" content="true"/>
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>)
}

export default MyApp
