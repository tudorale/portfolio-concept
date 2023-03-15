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
  