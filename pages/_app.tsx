import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import Socialbar from '../components/Socialbar'
import type { AppProps } from 'next/app'

// makes it so its shown everywhere
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Socialbar/>
  </>
}
