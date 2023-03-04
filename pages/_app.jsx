import '../styles/globals.css'
import {useEffect} from "react"


export default function App({Component, pageProps}) {

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const innerCursor = document.querySelector(".innerCursor");

    document.addEventListener("mousemove", (e) =>{
      cursor.setAttribute("style", "top: "+(e.pageY-22)+"px; left: "+(e.pageX-23)+"px; display: block;")
    })

    document.addEventListener("mousemove", (e) =>{
      innerCursor.setAttribute("style", "top: "+(e.pageY-1)+"px; left: "+(e.pageX-1)+"px; display: block;")
    })

    }, [])

  return (
    <>
      <div className="cursor"></div>
      <div className="innerCursor"></div>
      <Component {...pageProps} />
    </>
    
  )
  
}
