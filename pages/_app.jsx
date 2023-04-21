import '../styles/css/globals.css'
import {AnimatePresence, motion} from "framer-motion"
import {useRouter} from "next/router";

export default function App({Component, pageProps}) {

  const router = useRouter();



  return (
  <>
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        exit={{ opacity: 0, }}
        transition={{ duration: 0.35 }}
        className="base"
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </>
    
  )
  
}
