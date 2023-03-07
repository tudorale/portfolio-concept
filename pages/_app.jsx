import '../styles/globals.css'
import {useEffect} from "react"
import {AnimatePresence, motion} from "framer-motion"
import {useRouter} from "next/router";

export default function App({Component, pageProps}) {

  const router = useRouter();



  return (
  <>
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition= {{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 50% 100%, 50% 100%",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%",

          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 100% 100%, 0% 100%",

          }
        }}
        className="base"
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </>
    
  )
  
}
