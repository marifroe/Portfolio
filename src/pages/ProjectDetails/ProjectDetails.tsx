import styles from './ProjectDetails.module.css'
import { useParams } from "react-router-dom"
import projects from '../../data/projects.json'
import { getImageUrl } from '../../utils'


type ProjectParams = {
  projectId: string
}

export const ProjectDetails = () => {
  const params = useParams() as ProjectParams;
  const project = projects?.find(project => project.details == params.projectId)
  const sections = project?.detailsSections
  
  return (
    <div className={styles.container}>
      {project
        ? <div>
          <img src={getImageUrl({ path: project?.imageSrc })} alt={`Preview Image for ${project?.title}`} className={styles.image} />
          <h1>{project?.title}</h1>
          <div>{project?.description}</div>
          {
            project?.detailsSections.map(section => {
              return (
                <div>
                  <img src={section.imageSrc}></img>
                  <div className={styles.sectionDescription}>
                    {section.description}
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