import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import {UserState} from "../context/userState"
function MyApp({ Component, pageProps }) {


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

export default MyApp
