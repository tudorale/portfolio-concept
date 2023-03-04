import styles from "./Components.module.scss"
import Link from "next/link";
import {handleCursorHoverButtons, handleCursorOutButtons} from "../components/actions.js"

function Navbar() {
  
  return (
    <div className={styles.navbar}>
        <Link href="/">
            <p  onMouseEnter={handleCursorHoverButtons} onMouseLeave={handleCursorOutButtons}>Tudor Alexandru</p>
        </Link>
    </div>
  )
}

export default Navbar