import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import {UserState} from "../context/userState"
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
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

  return (
  <>

      <ChakraProvider>
      <UserState>
        <Navbar/>
  <Component {...pageProps} />
  </UserState>
</ChakraProvider>

  </>

  )
}

export default MyApp;


