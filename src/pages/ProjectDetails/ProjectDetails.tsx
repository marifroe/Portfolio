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
          }} className={styles.link}>Back</Link>
          {/*<a href={`/#projects`} className={styles.link}> Back </a>*/}
          <div className={styles.general}>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.generalContainer}>
              <div className={styles.generalElement}>
                <h3>Description</h3>
                <p>{project.description}</p>
              </div>
              <div className={styles.generalElement}>
                <h3>Year</h3>
                <p>{project.year}</p>
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

              let sectionLayout

              switch (section.layout) {
                case 1:
                  sectionLayout = styles.layout1
                  break
                case 2:
                  sectionLayout = styles.layout2 
                  break
                case 3: 
                  sectionLayout = styles.layout3 
                  break
                default:
                  sectionLayout = styles.layout1 
                  break
              }

              return (
                <div key={section.title} className={styles.sectionContainer}>
                  <div className={sectionLayout}>
                    {
                      (section.mediaType == "img")
                      ?<img src={getImageUrl({ path: section.mediaSrc })} alt={`Preview Image for ${section.title}`} className={styles.sectionImage} />
                        : <YoutubeVideo embedId={section.mediaSrc} width={853} height={480} style={styles.sectionVideo} />
                    }
                    <div className={styles.sectionText}>
                      <h2 className={styles.sectionTitle}>{section.title}</h2>
                        {section.text}
                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>  
        </div>
        : <div> 404 Project Not Found </div>
      }
      

    </div>
  )
}