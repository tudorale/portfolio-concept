import styles from "./Components.module.scss"
import Link from "next/link"
function Footer() {

    const handleCursorHoverLink = () => {
        let cursor = document.querySelector(".cursor");
        let cursorDot = document.querySelector(".innerCursor");
    
        cursorDot.classList.add("hoverDotLink")
        cursor.classList.add("hoverBorderLink")
      }
    
      const handleCursorOutLink = () => {
        let cursor = document.querySelector(".cursor");
        let cursorDot = document.querySelector(".innerCursor");
    
        cursorDot.classList.remove("hoverDotLink")
        cursor.classList.remove("hoverBorderLink")
      }

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