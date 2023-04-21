import '../styles/css/globals.css'
import {AnimatePresence, motion} from "framer-motion"
import {useRouter} from "next/router";

export default function App({Component, pageProps}) {

  const router = useRouter();



  return (
  <>

    <Component {...pageProps} />
  </>
    
  )
  
}
