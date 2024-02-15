import styles from './Projects.module.css'
import projects from '../../data/projects.json'
import { ProjectCard } from './ProjectCard'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

type ProjectsProps = {
  title: string
}

/*function draw() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (canvas?.getContext) {
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    ctx?.beginPath();
    ctx?.moveTo(width, -100);
    ctx?.moveTo(width, height);
    ctx?.moveTo(0, height + 10);
    ctx?.fill();
  }
}*/

export const Projects = (props: ProjectsProps) => {
  //draw();
  return (
    <section id='projects' className={styles.container}>
      {/*<canvas id='canvas' className={styles.canvas}>*/}
      <div className={styles.content}>
      <h2 className={styles.title}>
        {props.title}
      </h2>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 800: 1, 1300: 2, 1800: 3}}>
        <Masonry gutter='40px'>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />
          })}
        </Masonry>
      </ResponsiveMasonry>
        {/*<div className={styles.projects}>
          {
            projects.map((project, id) => {
              return <ProjectCard key={id} project={project} />
            })
          }
        </div>
      </canvas>*/}
        </div>
    </section>
  )
}