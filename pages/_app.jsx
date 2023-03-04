import '../styles/globals.css'
import {useEffect} from "react"

export default function App({Component, pageProps}) {

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const innerCursor = document.querySelector(".innerCursor");

    document.addEventListener("mousemove", (e) =>{
      cursor.setAttribute("style", "top: "+(e.pageY-22)+"px; left: "+(e.pageX-23)+"px;")
      console.log(e.screenY, e.screenX, "||||||", e.view.screen.height, e.view.screen.width)
    })
    // ON PAGE RENDER IF USER CURSOR IS OUT THE FALSE CURSOR SHOWS IN THE CORNER
    // DISPLAY NONE INITIAL ON FIRST MOVEMENT DISPLAY BLOCK

    document.addEventListener("mousemove", (e) =>{
      innerCursor.setAttribute("style", "top: "+(e.pageY-1)+"px; left: "+(e.pageX-1)+"px;")
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
