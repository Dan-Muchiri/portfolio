import styles from "./SkillsStyles.module.css"
import checkMarkIcon from "../../assets/checkmark-light.svg"
import SkillList from "../../common/SkillList"

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
            <SkillList src={checkMarkIcon} skill="ReactJs"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Zustand"/>
            <SkillList src={checkMarkIcon} skill="Chakra UI"/>
            <SkillList src={checkMarkIcon} skill="JSON"/>
            <SkillList src={checkMarkIcon} skill="Git"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Python"/>
            <SkillList src={checkMarkIcon} skill="Flask"/>
            <SkillList src={checkMarkIcon} skill="Alembic"/>
            <SkillList src={checkMarkIcon} skill="OOP"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="PostgreSQL"/>
            <SkillList src={checkMarkIcon} skill="SQLAlchemy"/>
            <SkillList src={checkMarkIcon} skill="SQLite"/>
            <SkillList src={checkMarkIcon} skill="SQL"/>
        </div>
        <hr/>
    </section>
  )
}

export default Skills