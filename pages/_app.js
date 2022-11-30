import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import {UserState} from "../context/userState"
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { CookiesProvider } from "react-cookie"


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleStart = (url) => {
     
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])


const showHeader =   router.pathname === '/adminlogin' ? false :  router.pathname === '/login'?false : true;



  return (
  <>

      <ChakraProvider>
      <CookiesProvider>
      <UserState>
    {  showHeader &&  <Navbar/>}
  <Component {...pageProps} />
  </UserState>
  </CookiesProvider>
</ChakraProvider>

  </>

  )
}

export default MyApp;


