import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import {handleCursorHoverButtons, handleCursorOutButtons} from "../components/actions.js"
import { Canvas} from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import {OrbitControls, useTexture} from "@react-three/drei";
import Link from "next/link"
import {useRouter} from "next/router";

const Shape = ({position, ascending}) => {
  const colorMap = useTexture('texture2.jpg');

  return (
    <>
      <mesh position={position} rotation={[2, 0, 0]}>
        <boxBufferGeometry args={[0.2, 0.2, 0.2]} />
        <meshBasicMaterial map={colorMap} />
      </mesh>
    </>
  );

}


export default function Home() {

  const [speed, setSpeed] = useState(6);
  const [moving, setMoving] = useState({moving: false});
  useEffect(() => {
    
    document.addEventListener("mousemove", (e) => {
     
      setMoving({moving: true});

      let timeout;
      (() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => setMoving({moving:false}), 500);
      })();


    })

  }, [])

  useEffect(() => {
    if(moving.moving){
      setSpeed(50);
    }else{
      setSpeed(6)
    }
  }, [moving.moving])

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const innerCursor = document.querySelector(".innerCursor");

    document.querySelector(".home").addEventListener("mousemove", (e) =>{
      cursor.setAttribute("style", "top: "+(e.pageY-22)+"px; left: "+(e.pageX-23)+"px; display: block;")
    })

    document.querySelector(".home").addEventListener("mousemove", (e) =>{
      innerCursor.setAttribute("style", "top: "+(e.pageY-1)+"px; left: "+(e.pageX-1)+"px; display: block;")
    })

    }, [])

  const router = useRouter();

  useEffect(() => {
    console.log(router);
  }, [router, []])

  return (
    <div className={styles.home + " " + "home"}>
      <div className="cursor"></div>
      <div className="innerCursor"></div>
      <Head>
        <title>Tudor Alexandru | An Enthusiastic Front-End Developer</title>
        <meta name="description" content="Portfolio where you can find more about me and my journey as a Front-End Developer!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="web development, front-end developer, developer, programmer, tudor alexandru, tudor, website development"></meta>
      </Head>

      <div style={{alignSelf: "start"}}>
        <Navbar smaller="false" />
      </div>

      <div className={styles.middle}>
            <Link href="/projects">
              <div className={styles.tringle} onMouseEnter={handleCursorHoverButtons} onMouseLeave={handleCursorOutButtons}>
                <img src="/tringle.png" />
                <p>personal<br/>projects</p>
              </div>
            </Link>

            <div>
              <div className={styles.text}>
                I create beautiful<br/> websites with my hands<br/> and a computer
              </div>
              <div className={styles.cube + " " + "cube"}>
                <Canvas
                  camera={{ fov: 31, near: 0.01, far: 50, position: [0, -0.5, 0.5]}}
                  style={{ height: '350px', width: "320px", backgroundColor: 'transparent' }}
                >
                  <Suspense fallback={null}>
                    <Shape />
                    <OrbitControls autoRotate autoRotateSpeed={speed}/>
                  </Suspense>
                </Canvas>
              </div>
            </div>

            <Link href="/case-studies">
              <div className={styles.x} onMouseEnter={handleCursorHoverButtons} onMouseLeave={handleCursorOutButtons}>
                <img src="/x.png" />
                <p>case<br/>studies</p>
              </div>
            </Link>

      </div>

      <div style={{alignSelf: "end"}}>
        <Footer path="/" />
      </div>

    </div>
  )
}