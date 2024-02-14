import styles from './ProjectDetails.module.css'
import { Link, useParams } from "react-router-dom"
import projects from '../../data/projects.json'
import { getImageUrl } from '../../utils'


type ProjectParams = {
  projectId: string
}

export const ProjectDetails = () => {
  const params = useParams() as ProjectParams;
  const project = projects?.find(project => project.details == params.projectId)
  
  return (
    <div className={styles.container}>
      {project
        ?
        <div className={styles.container}>
          <a href={`/`} className={styles.link}> Back </a>
          <h1 className={styles.title}>{project.title}</h1>
          <div>{project.description}</div>
          {
            project?.detailsSections.map(section => {
              return (
                <div key={section.title} className={styles.sectionContainer}>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <div className={styles.sectionContent}>
                    <img src={getImageUrl({ path: section.mediaSrc })} alt={`Preview Image for ${section.title}`} className={styles.sectionImage} />
                    <div className={styles.sectionText}>
                        {section.text}
                      </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        : <div> 404 Project Not Found </div>
      }
      

    </div>
  )
}