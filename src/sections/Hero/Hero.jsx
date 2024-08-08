import styles from "./HeroStyles.module.css"
import heroImg from "../../assets/Dan Muchiri.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import CV from "../../assets/Full-stack-resume.pdf"
import { useTheme } from "../../common/ThemeContext"

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === "light" ? sun : moon;
    const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
    const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Dan Muchiri"/>
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon"
            onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Dan 
                <br/> 
                Muchiri
            </h1>
            <h2> Full Stack Developer</h2>
            <span>
                <a href="https://www.linkedin.com/in/dan-muchiri/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon"/>
                </a>
                <a href="https://github.com/Dan-Muchiri" target="_blank">
                    <img src={githubIcon} alt="Github icon"/>
                </a>
            </span>
            <p className={styles.description}>Hi there! 👋 I'm Dan Muchiri, a Full-Stack Software Engineer proficient in Python with Flask, React, and JavaScript-based programming, and also skilled in developing decentralized applications (dApps) using Solidity and Ethers.js. I'm dedicated to leveraging my skills to drive positive change and make a meaningful impact.</p>
            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero