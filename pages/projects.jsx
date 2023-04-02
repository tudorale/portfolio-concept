import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Project from "../components/Project.js";


export default function Home() {

  const router = useRouter();

  useEffect(() => {
    document.querySelector("body").style.overflowY = "auto";
    let allElements = document.getElementsByTagName("*");

    for (let i = 0, len = allElements.length; i < len; i++) {
        let element = allElements[i];
        element.classList.remove("withoutCursor")
    }
  }, [router])

  // use effect - scrolled like 50px footer shows

  return (
    <div className="extra">
      <div className={styles.projects + " " + "projects"}>
        <Head>
          <title>Tudor Alexandru | Personal Projects</title>
          <meta name="description" content="Personal projects that I made along my journey, they are also open-sourced as always." />
          <link rel="icon" href="/tringle.png" />
        </Head>

        <div style={{alignSelf: "start"}}>
          <Navbar smaller="true" />
        </div>

        <div className={styles.middle}>
              <Link href="/">
                <div className={styles.cube}>
                  <img src="/hex.png" />
                  <p>start</p>
                </div>
              </Link>

              <div className={styles.middleMiddle}>
                <div className={styles.text}>
                  Open sourced projects, please scroll down, also check my GitHub for more of these.
                </div>         
                <svg
                  className={styles.scroll}
                  width="40"
                  height="77"
                  viewBox="0 0 40 77"
                  >
                    <g id="scrollCircle" transform="translate(-253 -787)">
                      <g
                        id="Rectangle_12"
                        transform="translate(253 787)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="4"
                      >
                        <rect width="40" height="77" rx="20" stroke="none"></rect>
                        <rect
                          x="2"
                          y="2"
                          width="36"
                          height="73"
                          rx="18"
                          fill="none"
                        ></rect>
                      </g>
                      <circle
                        className={styles.circle}
                        id="Ellipse_1"
                        cx="11"
                        cy="11"
                        r="11"
                        transform="translate(262 798)"
                        fill="#fff"
                      ></circle>
                    </g>
                  </svg>   
              </div>

              <Link href="/case-studies">
                <div className={styles.x}>
                  <img src="/x.png" />
                  <p>case<br/>studies</p>
                </div>
              </Link>

        </div>

        <div style={{alignSelf: "end"}}>
          <Footer path="/projects"/>
        </div>
      </div>

      <div className={styles.projectsWrapper}>
        <div className={styles.innerWrapper}>
          <Project
            image="/projects/scorpion.jpg"
            repo="https://github.com/tudorale/scorpion-theme"
            title="Scorpion Theme"
            description="Scorpion is a professional and a looking good dark theme for Visual Studio Code, with three main colors for your editor that will make you relaxed."
            website="https://marketplace.visualstudio.com/items?itemName=TudorAlexandru.scorpion"
            extension="yes"
          />
          <Project
              image="/projects/portfolio.jpg"
              repo="https://github.com/tudorale/portfolio-concept"
              title="Portfolio"
              description="Portfolio where you can find more about me, all my big open source projects, case studies about projects for real clients, my skills and you can contact me by filling a form."
              website="https://tudoralexandru.vercel.app"
              landing="yes"
              react="yes"
            />
          <Project
            image="/projects/typinghub.jpg"
            repo="https://github.com/tudorale/typinghub"
            title="TypingHub"
            description="TypingHub is a competitive platform for typists, where you can improve your typing speed by taking tests on different categories and gain points to join into the top."
            website="https://tudorale.github.io/typinghub"
            application="yes"
            react="yes"
          />
          <Project
            image="/projects/onlylearn.jpg"
            repo="https://github.com/tudorale/onlylearn"
            title="OnlyLearn"
            description="OnlyLearn, a free platform where you can learn Web Development for free with more than 60 lessons in HTML5, CSS3 & Responsive Design, and a text editor where you can practice."
            website="https://only-learn-3ff6b.web.app/"
            application="yes"
            react="yes"
          />
          <Project
            image="/projects/motes.jpg"
            repo="https://github.com/tudorale/motes"
            title="Motes"
            description="Motes is a place where you can keep all your notes in one place, the project started with the idea of a global Notes App as you have on your phone or computer, now you can keep all your notes here and you can access them on every device by going to your mote via a key. Made it mostly for personal use."
            website="https://tudorale.github.io/motes/#/"
            application="yes"
            react="yes"
          />
        </div>
      </div>
    </div>
  )
}