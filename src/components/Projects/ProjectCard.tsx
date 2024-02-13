import styles from './ProjectCard.module.css'
import { getImageUrl } from '../../utils'

type ProjectCardProps = {
  project: {
    title: string
    imageSrc?: string
    description: string
    skills: string[]
    details?: string
    source?: string
  } 
}

export const ProjectCard = (props: ProjectCardProps) => {
  const imageSrc = props.project.imageSrc
  return (
    <div className={styles.container}>
      {imageSrc && <img src={getImageUrl({ path: imageSrc })} alt={`Preview Image for ${props.project.title}`} className={styles.image} /> }
      <div className={styles.content}>
        <h3 className={styles.title}>{props.project.title}</h3>
        <p className={styles.description}>{props.project.description}</p>
        <ul className={styles.skills}>
          {props.project.skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            )
          })}
        </ul>
        {
          (props.project.details || props.project.source) && <div className={styles.links}>
          {props.project.details && <a href={`/projects/${props.project.details}`} className={styles.link}>Learn More</a>}
          {props.project.source && <a href={props.project.source} className={styles.link}>Source Code</a>}
        </div>
        }
      </div>
    </div>
  )
}