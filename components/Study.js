import Link from "next/link";
import styles from "./Study.module.scss";

function Project({title, description, link, image, repo}) {

  return (
    <div className={styles.project}>
      <div className={styles.partOne}>
        <h1 className={styles.projectTitle}>{title}</h1>
        <p className={styles.projectDescription}>{description}</p>
      
        <div className={styles.projectButton}>
          <Link href={link} passHref legacyBehavior>
            <a>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M5.495 2h16.505v-2h-17c-1.656 0-3 1.343-3 3v18c0 1.657 1.344 3 3 3h17v-20h-16.505c-1.376 0-1.376-2 0-2zm.505 4h14v16h-14v-16zm5.211 11.365c.464-1.469 1.342-3.229 1.496-3.675.225-.646-.174-.934-1.429.171l-.278-.525c1.432-1.559 4.381-1.91 3.378.504-.627 1.508-1.075 2.525-1.331 3.31-.374 1.144.569.68 1.493-.173.127.206.167.271.294.508-2.054 1.953-4.331 2.125-3.623-.12zm3.895-6.71c-.437.372-1.084.364-1.446-.018-.361-.382-.302-.992.135-1.364.438-.372 1.084-.363 1.446.018.362.382.302.993-.135 1.364z"/></svg>                  <span>Read More</span>  
                </button> 
            </a>
          </Link>
          {
            repo ? 
                <Link href={repo} passHref legacyBehavior>
                    <a target="_blank" rel="noreferrer" className={styles.specialButton}>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            <span>Github</span>  
                        </button> 
                    </a>
                </Link>
            : null
          }
        </div>
      </div>

      <div className={styles.partTwo}>
        <Link href={link} passHref legacyBehavior>
            <img src={image} alt="" loading="eager" className={styles.projectImage} />
        </Link>
      </div>
    </div>
  );
}

export default Project;