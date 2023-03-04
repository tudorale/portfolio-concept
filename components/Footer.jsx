import styles from "./Components.module.scss"
import Link from "next/link"
function Footer() {
  return (
    <div className={styles.footer}>
        <Link href="/projects">
            <p>personal projects</p>
        </Link>
        <Link href="/case-studies">
            <p>case studies</p>
        </Link>
        <Link href="/about">
            <p>about</p>
        </Link>
        <Link href="/hire">
            <p>hire</p>
        </Link>
    </div>
  )
}

export default Footer