import * as styles from "./Components.module.css"
import Link from "next/link"
import {handleCursorHoverLink, handleCursorOutLink} from "./actions.js";
import { useEffect, useState} from "react";
import {useRouter} from "next/router";

function Footer({path}) {

    const router = useRouter();

    useEffect(() => {
        let footer = document.querySelector("#footer");

        document.addEventListener("scroll", () => {
           footer.style.opacity = "1";
        })
    }, [])

  return (
    <div className={router.pathname === "/" || router.pathname === "/hire" ? styles.footer : styles.otherFooter} id="footer"> 
        <Link href="/projects">
            <p className={path === "/projects" ? styles.active : styles.notActive} onMouseEnter={handleCursorHoverLink} onMouseLeave={handleCursorOutLink}>personal projects</p>
        </Link>
        <Link href="/case-studies">
            <p className={path === "/case-studies" ? styles.active : styles.notActive} onMouseEnter={handleCursorHoverLink} onMouseLeave={handleCursorOutLink}>case studies</p>
        </Link>
        <Link href="/about">
            <p className={path === "/about" ? styles.active : styles.notActive} onMouseEnter={handleCursorHoverLink} onMouseLeave={handleCursorOutLink}>about</p>
        </Link>
        <Link href="/hire">
            <p className={`${path === "/" ? styles.cta : null} ${path === "/hire" ? styles.active : styles.notActive}`} onMouseEnter={handleCursorHoverLink} onMouseLeave={handleCursorOutLink}>hire</p>
        </Link>
    </div>
  )
}

export default Footer