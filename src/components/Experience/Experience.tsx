import styles from './Experience.module.css'
import skills from '../../data/skills.json'
import workingExperience from '../../data/experience.json'
import { getImageUrl } from '../../utils'

type ExperienceProps = {
  title: string
}

export const Experience = (props: ExperienceProps) => {
  return (
    <section className={styles.container} id='experience'>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>{props.title}</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            const imageSrc = skill.imageSrc
            return (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl({ path: imageSrc })} alt={skill.title} />
                  <p className={styles.skillName}>{skill.title}</p>
                </div>
                {/*<p>{skill.title}</p>*/}
              </div>
            )
          })}   
        </div>
        <ul className={styles.experience}>
          {workingExperience.map((step, id) => {
            const imageSrc = step.imageSrc
            return (
              <li className={styles.experienceItem} key={id}>
                <img src={getImageUrl({ path: imageSrc })} alt={`${step.company} Logo`} className={styles.logo} />
                <div className={styles.experienceItemDetails}>
                  <h3>{`${step.role} ${step.level} | ${step.company}`}</h3>
                  <p className={styles.date}>{`${step.startDate} - ${step.endDate}`}</p>
                  <p className={styles.description}>{step.description}</p>
                  {/*<ul>
                    {step.experiences.map((experience, id) => {
                      return (
                        <li key={id}>
                          {experience}
                        </li>
                      )
                    })}
                  </ul>*/}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}