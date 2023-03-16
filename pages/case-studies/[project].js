import Head from 'next/head'
import styles from '../../styles/CaseStudy.module.scss'
import Navbar from "../../components/Navbar.jsx";
import Footer from '../../components/Footer.jsx';
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {paths, projects} from "../../data"


export default function Study({data}) {

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
      <div className={styles.study}>
            <Head>
                <title>Tudor Alexandru - {data.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="author" content="Tudor Alexandru" />
                <meta name="keywords" content="web development, front-end developer, developer, programmer, tudor alexandru, tudor, ai bloc" />
                <link rel="icon" href="/x.png" />
            </Head>

        <div style={{alignSelf: "start"}}>
          <Navbar smaller="true" />
        </div>

        <div className={styles.middle}>
              <Link href="/case-studies">
                <div className={styles.cube}>
                  <img src="/x.png" />
                  <p>case<br/>studies</p>
                </div>
              </Link>

              <div className={styles.middleMiddle}>
                <div className={styles.text}>
                {data.title}
                <p className={styles.smallerText}>{data.description}</p>
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

              <Link href="/">
                <div className={styles.round}>
                  <img src="/square.png" />
                  <p>start</p>
                </div>
              </Link>
        </div>

        <div style={{alignSelf: "end"}}>
          <Footer path="/case-studies"/>
        </div>
      </div>

      <div className={styles.studyWrapper}>
        
        <div className={styles.buttons}>
            <Link href={`${data.links.github}`} passHref legacyBehavior>
                <a target="_blank" rel="noreferrer">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span>Github</span>  
                    </button> 
                </a>
            </Link>
            {
              data.links.website ?
                <Link href={`${data.links.websiteLink}`} passHref legacyBehavior>
                  <a target="_blank" rel="noreferrer">
                      <button className={styles.websiteButton}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
                          <span>Website {data.links.type == "preview" ? "(Preview)" : "(Live)"}</span>  
                      </button> 
                  </a>
                </Link>
                : null
            }
        </div>

      <div className={styles.studyContent}>
            <h1 data-aos='fade-right'><span>{"//"}</span> SUMMERY</h1>
               {
                 data.summery.map((text, index) => (
                  <p data-aos="fade-up" key={index}>{text}</p>
                 ))
               }
           </div>
           {
           data.images.imageOne ? 
            <div className={styles.banner}>
              <div className={styles.bannerContent}>
                  <div className={styles.bannerImage} data-aos="fade-right">
                      <img alt="landing page" loading="eager" width="550" height="270" src={data.images.imageOne.src}/>
                  </div>
                  <div className={styles.bannerInfo} data-aos="fade-up">
                      <h1>{data.images.imageOne.desc}</h1>
                  </div>
              </div>
            </div>
            : "" 
          }

           <div className={styles.studyContent} style={{marginTop: "100px"}}>
               <h1 data-aos="fade-right"><span>{"//"}</span> MY ROLE</h1>
               {
                 data.role.map((text, index) => (
                  <p data-aos="fade-up" key={index}>{text}</p>
                 ))
               }
           </div>


            {
              data.images.imageTwo ? 
                <div className={styles.banner}>
                  <div className={styles.bannerContent}>
                        <div className={styles.bannerImage} data-aos="fade-right">
                        <img alt="landing page" loading="eager" width="550" height="270" src={data.images.imageTwo.src}/>
                    </div>
                    <div className={styles.bannerInfo} data-aos="fade-up">
                        <h1>{data.images.imageTwo.desc}</h1>
                    </div>
                  </div>
                </div>
              : ""
            }

           <div className={styles.studyContent} style={{marginTop: "100px"}}>
               <h1 data-aos="fade-right"><span>{"//"}</span> WALKTHROUGH</h1>
              {data.walkthrough.map((text,index) => (
                <p data-aos="fade-up" key={index}>{text}</p>
              ))}
           </div>

           {
            data.images.imageThree ? 
            
            <div className={styles.banner}>
              

               <div className={styles.bannerContent}>
                    {
                      data.images.imageThree ? 
                      <div className={styles.bannerImage} data-aos="fade-down">
                        <img alt="landing page" width="500" loading="eager" height="250" src={data.images.imageThree.src}/>
                      </div>
                    : null
                    }
                    {
                      data.images.imageFour ? 
                      <div className={styles.bannerImage} data-aos="fade-down">
                        <img alt="landing page" width="500" loading="eager" height="250" src={data.images.imageFour.src}/>
                      </div>
                    : null
                    }
                    {
                      data.images.imageFive ? 
                      <div className={styles.bannerImage} data-aos="fade-down">
                        <img alt="landing page" width="500" loading="eager" height="250" src={data.images.imageFive.src}/>
                      </div>
                    : null
                    }
                    {
                      data.images.imageSix ? 
                      <div className={styles.bannerImage} data-aos="fade-down">
                        <img alt="landing page" width="500" loading="eager" height="250" src={data.images.imageSix.src}/>
                      </div>
                    : null
                    }
                    {
                      data.images.imageSeven ? 
                      <div className={styles.bannerImage} data-aos="fade-down">
                        <img alt="landing page" width="500" loading="eager" height="250" src={data.images.imageSeven.src}/>
                      </div>
                    : null
                    }
                    {
                      data.images.imageEight ? 
                      <div className={styles.bannerImage} data-aos="fade-down">
                        <img alt="landing page" width="500" loading="eager" height="250" src={data.images.imageEight.src}/>
                      </div>
                    : null
                    }
               </div>
  
            </div>

            : ""

          }
      </div>
    </div>
  )
}

export async function getStaticProps(content){
    const data = projects.filter((prop) => prop.path == content.params.project);
    return {
      props: {
        data: data[0],
      },
    }
  }
  
  export async function getStaticPaths(){
    const data = paths;
  
    return {
      paths: data.paths.map((p) => {
        return {params: {project: p}}
      }),
      fallback: false,
    }
  }
  