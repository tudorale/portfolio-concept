import * as styles from "./Components.module.scss"
import Link from "next/link"
import {handleCursorHoverLink, handleCursorOutLink} from "./actions.js";
import { useEffect, useState} from "react";
import {useRouter} from "next/router";

function Footer() {

    const [path, setPath] = useState();

    const router = useRouter();

    useEffect(() => {
        setPath(router.pathname);
        console.log(router.pathname);
    }, [])

  return (
    <div className={styles.footer}>
        <Link href="/projects">
            <p className={router.pathname === "/projects" ? styles.active : styles.notActive} onMouseEnter={handleCursorHoverLink} onMouseLeave={handleCursorOutLink}>personal projects</p>
        </Link>
        <Link href="/case-studies">
            <p className={router.pathname === "/case-studies" ? styles.active : styles.notActive} onMouseEnter={handleCursorHoverLink} onMouseLeave={handleCursorOutLink}>case studies</p>
        </Link>
        <Link href="/about">
            <p className={router.pathname === "/about" ? styles.active : styles.notActive} onMouseEnter={handleCursorHoverLink} onMouseLeave={handleCursorOutLink}>about</p>
        </Link>
        <Link href="/hire">
            <p className={`${styles.cta} ${router.pathname === "/about" ? styles.active : styles.notActive}`} onMouseEnter={handleCursorHoverLink} onMouseLeave={handleCursorOutLink}>hire</p>
        </Link>
    </div>
  )
}

export default Footer