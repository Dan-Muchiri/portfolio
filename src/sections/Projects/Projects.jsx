import styles from "./ProjectsStyles.module.css"
import Bazuu from "../../assets/fitlift.png"
import Travel from "../../assets/travel itinerary.png"
import Wine from "../../assets/wine.png"
import Ecomart from "../../assets/ecomart.png"
import ProjectCard from "../../common/ProjectCard"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard src={Bazuu} link={"https://github.com/Dan-Muchiri/Bazuu-fitness_React-Flask"} h3='Bazuu Fitness' p="Fitness Collaboration Full-Stack App"/>
           <ProjectCard src={Travel} link={"https://github.com/Dan-Muchiri/Travel-Itinerary-organizer_Python-cli-app"} h3='Travel Itinerary' p="Travel Itinerary Organizer CLI App"/>
           <ProjectCard src={Wine} link={"https://github.com/Dan-Muchiri/Cockscrew-Connoisseur_React"} h3='Cockscrew-Connoisseur' p="Wine E-commerce Store"/>
           <ProjectCard src={Ecomart} link={"https://github.com/Dan-Muchiri/Eco-friendly-marketplace_Vanilla-JavaScript"} h3='EcoMarkt' p="Eco-Friendly Marketplace"/>
        </div>
    </section>
  )
}

export default Projects