import styles from "./Components.module.scss"
import Link from "next/link";
import {handleCursorHoverButtons, handleCursorOutButtons} from "../components/actions.js"

function Navbar({smaller}) {
  
  return (
    <div className={styles.navbar}>
        <Link href="/">
            <p style={smaller === "true" ? {fontSize: "1.6rem"} : {fontSize: "2rem"}} onMouseEnter={handleCursorHoverButtons} onMouseLeave={handleCursorOutButtons}>Tudor Alexandru</p>
        </Link>
    </div>
  )
}

export default Navbar