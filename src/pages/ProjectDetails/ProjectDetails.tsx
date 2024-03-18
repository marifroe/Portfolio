import styles from './ProjectDetails.module.css'
import { Link, useParams } from "react-router-dom"
import projects from '../../data/projects.json'
import { Section } from '../../components/Section/Section'


type ProjectParams = {
  projectId: string
}

export const ProjectDetails = () => {
  const params = useParams() as ProjectParams;
  const project = projects?.find(project => project.details == params.projectId)
  let skillList = ""

  project?.skills.forEach((skill, i) => {
    skillList = i ? skillList + ', ' + skill : skill
  });
  
  return (
    <div>
      {project
        ?
        <div className={styles.container}>
          <Link to={{
            pathname: '/',
            hash: '#projects'
          }} className={styles.link}>&#8592; Back</Link>
          {/*<a href={`/#projects`} className={styles.link}> Back </a>*/}
          <div className={styles.general}>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.generalContainer}>
              <div className={styles.generalElement}>
                <h3>Description</h3>
                <p className={styles.generalText}>{project.description}</p>
              </div>
              <div className={styles.generalElement}>
                <h3>Year</h3>
                <p>{project.year}</p>
              </div>
              <div className={styles.generalElement}>
                <h3>Contribution</h3>
                <p>{project.contribution}</p>
              </div>
              <div className={styles.generalElement}>
                <h3>Context</h3>
                <p>{project.context}</p>
              </div>
              <div className={styles.generalElement}>
                <h3>Skills</h3>
                <p>
                  {skillList}
                </p>
                {/*<ul className={styles.skillsList}>{project.skills.map(skill => {
                  return <li>{skill}</li>
                })}</ul>*/}
              </div>
            </div>
          </div>
          <div className={styles.sections}>
            {
              project?.detailsSections.map(section => {
                return <Section
                  key={section.title}
                  title={section.title}
                  text={section.text}
                  mediaSrc={section.mediaSrc}
                  mediaType={section.mediaType as ("img" | "vid" | "none")}
                  layout={section.layout as (1 | 2 | 3)} />
              })
            }
          </div>  
        </div>
        : <div> 404 Project Not Found </div>
      }
      

    </div>
  )
}