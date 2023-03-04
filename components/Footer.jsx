import styles from "./Components.module.scss"
import Link from "next/link"
import {handleCursorHoverLink, handleCursorOutLink} from "./actions.js";

function Footer() {

  return (
    <div className={styles.footer}>
        <Link href="/projects">
            <p onMouseEnter={handleCursorHoverLink} onMouseLeave={handleCursorOutLink}>personal projects</p>
        </Link>
        <Link href="/case-studies">
            <p onMouseEnter={handleCursorHoverLink} onMouseLeave={handleCursorOutLink}>case studies</p>
        </Link>
        <Link href="/about">
            <p onMouseEnter={handleCursorHoverLink} onMouseLeave={handleCursorOutLink}>about</p>
        </Link>
        <Link href="/hire">
            <p onMouseEnter={handleCursorHoverLink} onMouseLeave={handleCursorOutLink}>hire</p>
        </Link>
    </div>
  )
}

export default Footer