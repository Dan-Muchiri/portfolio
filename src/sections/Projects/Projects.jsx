import styles from "./ProjectsStyles.module.css"
import Bitvision from "../../assets/Logo1.png"
import Focus from "../../assets/pngtree-business-plan-vector-png-image_12097040.png"
import Ubuntu from "../../assets/Ubuntu safety logo.png"
import Travel from "../../assets/travel itinerary.png"
import ProjectCard from "../../common/ProjectCard"
import gwSynergy from "../../assets/gw synergy.jpeg"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard src={Focus} link={"https://focusbridgepartners.com/"} h3='Focus Bridge' p="Business transformation agency website."/>
           <ProjectCard src={Ubuntu} link={"https://ubuntusafetysolution.co.ke/"} h3='Ubuntu Safety' p="A safety solutions E-commerce Store"/>
           <ProjectCard src={gwSynergy} link={"https://www.gwsynergy.com/"} h3='GW Synergy' p="An ethical IT outsourcing company website"/>
           <ProjectCard src={Bitvision} link={"https://bit-vision.netlify.app/"} h3='Bit Vision' p="A Marketing and Web Design Agency website"/>
        </div>
    </section>
  )
}

export default Projects