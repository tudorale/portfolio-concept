
import Head from 'next/head'
import styles from '../styles/css/Hire.module.css'
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import emailjs from "emailjs-com";
import {configs} from "../config.js"

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    let body = document.querySelector("body");
    body.style.overflowY = "hidden";
    body.style.background = "rgb(7, 0, 41)"
    
    let allElements = document.getElementsByTagName("*");
    for (let i = 0, len = allElements.length; i < len; i++) {
        let element = allElements[i];
        element.classList.add("withoutCursor")
    }
  }, [router])

  const [buttonText, setButtonText] = useState("Send email")

    const handleFocus = (label) => {
        if (process.browser) {
            let inputLabel = document.querySelector(`${label}`);
    
            if (inputLabel) {
                inputLabel.style.top = `-3px`;
                inputLabel.style.fontSize = "1rem";
            }
        }
      };
    
      const handleBlur = (input, label) => {
        if (process.browser) {

            let inputLabel = document.querySelector(`${label}`);
            let inputValue = document.querySelector(`${input}`).value;

            if (inputLabel) {
                if (inputValue === "") {
                    inputLabel.style.top = `32px`;
                    inputLabel.style.fontSize = "1.1rem";
                } else {
                    return;
                }
            }
        }
      };
    
      const handleSubmit = (e) => {
        if (process.browser) {
            e.preventDefault();
        
            let nameLabel = document.querySelector(`#nameLabel`);
            let emailLabel = document.querySelector(`#emailLabel`);
            let messageLabel = document.querySelector(`#messageLabel`);
            let loading = document.querySelector("#loading");
            let button = document.querySelector("#btn");

            if (loading) {
                loading.style.opacity = "1";
            }
            emailjs
            .sendForm(
                configs.service,
                configs.template,
                e.target,
                configs.userId
            )
            .then( () => {
                e.target.reset();

                setButtonText("Email sent");

                loading.style.opacity = "0";
                button.style.backgroundColor = "rgb(120, 86, 255))";
                button.setAttribute("disabled", "");

                setTimeout(() => {
                    button.style.backgroundColor = "rgb(120, 86, 255)";
                    button.removeAttribute("disabled");
                    setButtonText("Send Email");
                }, 7000)

                nameLabel.style.top = "32px";
                emailLabel.style.top = "32px";
                messageLabel.style.top = "32px";

                nameLabel.style.fontSize = "1.1rem";
                emailLabel.style.fontSize = "1.1rem";
                messageLabel.style.fontSize = "1.1rem";

                },
                () => {
                    loading.style.opacity = "0";
                    setButtonText("Error occured");

                    button.style.backgroundColor = "rgb(120, 86, 255))";

                    setTimeout(() => {
                        button.style.backgroundColor = "rgb(120, 86, 255)";
                        setButtonText("Send Email");
                    }, 3000)
                }
            );
        }
      };


  return (
    <div className="extra">
      <div className={styles.hire }>
        <Head>
          <title>Tudor Alexandru | Hire Me</title>
          <meta name="description" content="Do you need help with a website or with a problem? Contact me and let me help you." />
          <link rel="icon" href="/square.png" />
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
                <form className={styles.form} onSubmit={handleSubmit} data-aos="fade-down">
                    <div className={styles.wrapper + " " + styles.name}>
                        <label htmlFor="name" id="nameLabel" >
                            Your name
                        </label>

                        <input type="text" id="name" onFocus={() => handleFocus("#nameLabel")} onBlur={() => handleBlur("#name", "#nameLabel")} name="name" required />
                    </div>

                    <div className={styles.wrapper + " " + styles.email}>
                        <label htmlFor="email" id="emailLabel">
                            Your email
                        </label>

                        <input type="email" id="email" onFocus={() => handleFocus("#emailLabel")} onBlur={() => handleBlur("#email", "#emailLabel")} name="email" required />
                    </div>

                    <div className={styles.wrapper + " " + styles.message}>
                        <label htmlFor="message" id="messageLabel">
                            Message
                        </label>

                        <textarea id="message" onFocus={() => handleFocus("#messageLabel")}  onBlur={() => handleBlur("#message", "#messageLabel")} name="message" required />
                    </div>

                    <div className={styles.underForm}>
                      <button id="btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.012 15.876v4.124l1.735-2.578-1.735-1.546zm-4.026 5.871c-.645.405-1.311.765-1.986 1.069l.492 1.184c.675-.303 1.343-.658 1.992-1.056l-.498-1.197zm3.014-2.407c-.59.581-1.253 1.171-1.932 1.67l.505 1.214c.487-.346.977-.758 1.427-1.146v-1.738zm9-13.34l-3.195 12.716-4.329-3.855 4.154-4.385-5.568 3.849-3.843-.934 12.781-7.391zm-2 .001l-.944.546c-.034-.178-.056-.359-.056-.547 0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.557-1.196 2.826-2.716 2.971l.266-1.058c.835-.24 1.45-1.001 1.45-1.913 0-1.104-.896-2-2-2s-2 .896-2 2.001zm8-.001c0 3.313-2.687 6-6 6l-.471-.024.497-1.979c2.194-.015 3.974-1.801 3.974-3.997 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 .371.067.723.162 1.064l-1.779 1.029c-.243-.653-.383-1.356-.383-2.093 0-3.313 2.687-6 6-6s6 2.687 6 6z"/></svg>
                          <span>{buttonText}</span>
                      </button>
                      <div className={styles.loading} id="loading"></div>
                    </div>
                  </form>     
              </div>

              <Link href="/about">
                <div className={styles.x}>
                  <img src="/circle.png" />
                  <p>about</p>
                </div>
              </Link>

        </div>

        <div style={{alignSelf: "end"}}>
          <Footer path="/hire"/>
        </div>
      </div>
    </div>
  )
}