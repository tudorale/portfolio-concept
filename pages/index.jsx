import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import {handleCursorHoverButtons, handleCursorOutButtons} from "../components/actions.js"
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import * as THREE from "three"
import {OrbitControls, useTexture} from "@react-three/drei";


const Shape = ({position, ascending}) => {
  const colorMap = useTexture('texture2.jpg');

  return (
    <>
      <mesh position={position} rotation={[1, 0, 0]}>
        <boxBufferGeometry args={[0.2, 0.2, 0.2]} />
        <meshBasicMaterial map={colorMap} />
      </mesh>
    </>
  );

}


export default function Home() {

  return (
    <div className={styles.home}>
      <Head>
        <title>Tudor Alexandru | An Enthusiastic Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{alignSelf: "start"}}>
        <Navbar />
      </div>

      <div className={styles.middle}>
            <div className={styles.tringle} onMouseEnter={handleCursorHoverButtons} onMouseLeave={handleCursorOutButtons}>
              <img src="/tringle.png" />
              <p>personal<br/>projects</p>
            </div>

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
                    <OrbitControls autoRotate autoRotateSpeed={11}/>
                  </Suspense>
                </Canvas>
              </div>
            </div>

            <div className={styles.x} onMouseEnter={handleCursorHoverButtons} onMouseLeave={handleCursorOutButtons}>
              <img src="/x.png" />
              <p>case<br/>studies</p>
            </div>

      </div>

      <div style={{alignSelf: "end"}}>
        <Footer/>
      </div>

    </div>
  )
}