import Head from 'next/head'
import styles from '../styles/About.module.css'
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";

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


  return (
    <div className="extra">
      <div className={styles.about }>
        <Head>
          <title>Tudor Alexandru | About Me & Skills</title>
          <meta name="description" content="About me and my skills in Front-End Development" />
          <link rel="icon" href="/circle.png" />
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
                    About me and my skills in Front-End Development
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

              <Link href="/hire">
                <div className={styles.x}>
                  <img src="/square.png" />
                  <p>hire</p>
                </div>
              </Link>

        </div>

        <div style={{alignSelf: "end"}}>
          <Footer path="/about"/>
        </div>
      </div>

      <div className={styles.aboutWrapper}>
        <div className={styles.innerWrapper}>
            <div className={styles.aboutInfo}>
                <p className={styles.aboutTitle}>About Me</p>
                <p>I am a self-thought Front-End Developer and a creative person, and I
love to learn and develop new skills that will help me in my journey.</p>
                <p>I started learning Front-End Development on my own in the summer
of 2019 and since then I didn&apos;t hesitate to learn and discover more. I
started with creating personal projects, some to help others, some
for personal use, and then in 2021 I started freelancing and making
a name in this space.</p>
                <p>
                I am a friendly, organised person and open-minded, I consider myself a good friend and quite a person with a special eye to details, I like traveling, video games and Typing Competitions. I love to make everything pixel perfect if I can say that in front-end terms and loving to make connections with everyone!
                </p>

                <Link href="/cv.pdf" target="_blank" rel="noreferrer">
                    <button className={styles.cvButton}>
                        <svg className={styles.view} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
                        <span>View CV</span>  
                    </button> 
                </Link>
                <a href="/cv.pdf" download>
                    <button className={styles.cvButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <line x1="12" y1="11" x2="12" y2="17" />
                            <polyline points="9 14 12 17 15 14" />
                        </svg>                    
                        <span>Download CV</span>  
                    </button> 
                </a>
            </div>

            <div className={styles.mySkills}>
                <p className={styles.skillsTitle}>Skills & Experience</p>
                <p>Some technologies that I learned during these years and I can work with.</p>
                <div className={styles.skillsIcons}>
                    <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/javascript.png" alt="javascript" width="40" height="40"/> 
                    </a>
                    <a href="https://www.typescriptlang.org/"  target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/typescript.png" alt="typescript" width="50" height="40"/> 
                    </a>
                    <a href="https://www.reactjs.org" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/react.png" alt="reactjs" width="50" height="40"/> 
                    </a>
                    <a href="https://nextjs.org/" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/next.png" alt="nextjs" width="50" height="40"/> 
                    </a>
                    <a href="https://redux.js.org/" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/redux.png" alt="redux" width="50" height="40"/> 
                    </a>
                    <a href="https://firebase.google.com/" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/firebase.png" alt="firebase" width="40" height="40"/> 
                    </a>
                    <a href="https://git-scm.com/" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/git.png" alt="git" width="50" height="40"/> 
                    </a>
                    <a href="https://sass-lang.com/" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/sass.png" alt="sass" width="60" height="40"/> 
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/css.png" alt="css3" width="50" height="40"/> 
                    </a>
                    <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/htm.png" alt="html5" width="50" height="40"/> 
                    </a>
                    <a href="https://www.npmjs.com" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/npm.png" alt="npm" width="90" height="30"/> 
                    </a>                                                                                                                          
                </div>

                <p style={{marginTop: "30px"}}>Some libraries that I can work with + many other JS libraries.</p>

                <div className={styles.skillsIcons}>
                    <a href="https://greensock.com/gsap/" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/gsap.svg" alt="gsap" width="40" height="40"/> 
                    </a>
                    <a href="https://material-ui.com/" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/mui.png" alt="mui" width="45" height="45"/> 
                    </a>
                    <a href="https://getbootstrap.com" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/bootstrap.png" alt="bootstrap" width="70" height="40"/> 
                    </a>
                </div>      

                <p style={{marginTop: "30px"}}>Softwares that I am using.</p>
                <div className={styles.skillsIcons}>
                    <a href="https://www.figma.com/" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/figma.svg" alt="figma" width="40" height="40"/> 
                    </a>
                    <a href="https://code.visualstudio.com/" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/vscode.png" alt="vs code" width="50" height="40"/> 
                    </a>   
                    <a href="https://www.adobe.com/products/photoshop.html" target="_blank"> 
                        <img src="https://raw.githubusercontent.com/tudorale/tudorale/main/assets/photoshop.png" alt="adobe photoshop" width="55" height="40"/> 
                    </a>  
                </div>       
            </div>
        </div>
      </div>
    </div>
  )
}