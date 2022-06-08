import '../styles/globals.css'
import "@fontsource/parisienne"
import "@fontsource/roboto-slab/300.css"
// import "@fontsource/roboto-slab/400.css"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
