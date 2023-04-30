import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

const roboto = Roboto({
  subsets:['latin'],
  weight:'300',
})
export default function App({ Component, pageProps }) {

  return(
    // <main className={roboto.className}>
    <main>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </main>
  )
}
