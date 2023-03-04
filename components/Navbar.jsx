import styles from "./Components.module.scss"
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.navbar}>
        <Link href="/">
            <p>Tudor Alexandru</p>
        </Link>
    </div>
  )
}

export default Navbar