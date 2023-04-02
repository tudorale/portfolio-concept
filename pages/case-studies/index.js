import Head from 'next/head'
import styles from '../../styles/css/Cases.module.css'
import Navbar from "../../components/Navbar.jsx";
import Footer from '../../components/Footer.jsx';
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";
import { projects} from "../../data"
import Study from "../../components/Study.js";


export default function Studies() {

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
      <div className={styles.studies}>
        <Head>
          <title>Tudor Alexandru | Case Studies</title>
          <meta name="description" content="Case studies about my work for real clients" />
          <link rel="icon" href="/x.png" />
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
                Case studies about projects that I made for real clients along my freelancing journey.
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

              <Link href="/about">
                <div className={styles.round}>
                  <img src="/circle.png" />
                  <p>about</p>
                </div>
              </Link>

        </div>

        <div style={{alignSelf: "end"}}>
          <Footer path="/case-studies"/>
        </div>
      </div>

      <div className={styles.projectsWrapper}>
        <div className={styles.innerWrapper}>
            {
                projects.map((project, index) => 
                    <div data-aos="fade-up" key={index}>
                        <Study
                            image={project.title == "AiBloc" ? "/casestudies/aibloc.jpg" : project.images.heroImage.src}
                            link={"/case-studies/" + `${project.path}`}
                            repo={project.links.github}
                            title={project.title}
                            description={project.description}
                        />
                    </div>
                )
            }
        </div>
      </div>
    </div>
  )
}

