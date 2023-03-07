import Head from 'next/head'
import styles from '../styles/Projects.module.scss'
import homeStyles from '../styles/Home.module.scss'
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import {handleCursorHoverButtons, handleCursorOutButtons} from "../components/actions.js"
import {  useState, useEffect } from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
export default function Home() {

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const innerCursor = document.querySelector(".innerCursor");

    document.querySelector(".projects").addEventListener("mousemove", (e) =>{
      cursor.setAttribute("style", "top: "+(e.pageY-22)+"px; left: "+(e.pageX-23)+"px; display: block;")
    })

    document.querySelector(".projects").addEventListener("mousemove", (e) =>{
      innerCursor.setAttribute("style", "top: "+(e.pageY-1)+"px; left: "+(e.pageX-1)+"px; display: block;")
    })

    }, [])

  const router = useRouter();

  useEffect(() => {
      console.log(router);
  }, [router])

  return (
    <div className={homeStyles.projects + " " + "projects"}>
      <div className="cursor"></div>
      <div className="innerCursor"></div>
      <Head>
        <title>Tudor Alexandru | Personal Projects</title>
        <meta name="description" content="Personal projects that I made along my journey, they are also open-sourced as always." />
      </Head>

      <div style={{alignSelf: "start"}}>
        <Navbar smaller="true" />
      </div>

      <div className={homeStyles.middle}>
            <Link href="/">
              <div className={homeStyles.tringle} onMouseEnter={handleCursorHoverButtons} onMouseLeave={handleCursorOutButtons}>
                <img src="/circle.png" />
                <p>start</p>
              </div>
            </Link>

            <div>
              <div className={styles.projectsWrapper}>
                Personal Projects
              </div>
            </div>

            <Link href="/case-studies">
              <div className={homeStyles.x} onMouseEnter={handleCursorHoverButtons} onMouseLeave={handleCursorOutButtons}>
                <img src="/x.png" />
                <p>case<br/>studies</p>
              </div>
            </Link>

      </div>

      <div style={{alignSelf: "end"}}>
        <Footer path="/projects"/>
      </div>

    </div>
  )
}