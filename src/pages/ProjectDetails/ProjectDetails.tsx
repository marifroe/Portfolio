import styles from './ProjectDetails.module.css'
import { Link, useParams } from "react-router-dom"
import projects from '../../data/projects.json'
import { getImageUrl, YoutubeVideo } from '../../utils'


type ProjectParams = {
  projectId: string
}

export const ProjectDetails = () => {
  const params = useParams() as ProjectParams;
  const project = projects?.find(project => project.details == params.projectId)
  
  return (
    <div>
      {project
        ?
        <div className={styles.container}>
          <Link to={{
            pathname: '/',
            hash: '#projects'
          }} className={styles.link}>Back</Link>
          {/*<a href={`/#projects`} className={styles.link}> Back </a>*/}
          <h2 className={styles.title}>{project.title}</h2>
          <div className={styles.generalContainer}>
            <div className={styles.generalElement}>
              <h3>Description</h3>
              <p>{project.description}</p>
            </div>
            <div className={styles.generalElement}>
              <h3>Task</h3>
              <p>{project.task}</p>
            </div>
            <div className={styles.generalElement}>
              <h3>Context</h3>
              <p>{project.context}</p>
            </div>
            <div className={styles.generalElement}>
              <h3>Contribution</h3>
              <p>{project.contribution}</p>
            </div>
            <div className={styles.generalElement}>
              <h3>Skills</h3>
              <ul className={styles.skillsList}>{project.skills.map(skill => {
                return <li>{skill}</li>
              })}</ul>
            </div>
          </div>
          {
            project?.detailsSections.map(section => {
              return (
                <div key={section.title} className={styles.sectionContainer}>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <div className={styles.sectionContent}>
                    {
                      (section.mediaType == "img")
                      ?<img src={getImageUrl({ path: section.mediaSrc })} alt={`Preview Image for ${section.title}`} className={styles.sectionImage} />
                        : <YoutubeVideo embedId={section.mediaSrc} width={853} height={480} style={styles.sectionVideo} />
                    }
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