import styles from './About.module.css'

import aboutImg from '../../assets/chair.png'

type AboutProps = {
  title: string
  elements?: {
    title: string
    text: string
  }[]
}

export const About = (props: AboutProps) => {
  return (
    <section className={styles.container} id='about'>
      <div className={styles.box}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.content}>
          I'm a Software Developer who is always up for a good challenge. What I do equally like is designing an
          intuitive and well-thought-out User Experience and Interface. I love to think of different and novel
          approaches to achieve a goal and find the best one suitable. Within a team is where I work best - to
          share and discuss ideas and to get different perspectives. Being an empathic teamplayer, I at the same time
          work very independently. I'm highly motivated, realiable, structured and a quick learner!
          {/*<img className={styles.aboutImg} src={aboutImg} alt='wooden chair' />
          <ul className={styles.aboutElements}>
            {props.elements?.map(elem => {
              return (
                <li className={styles.aboutElement}>
                  <div className={styles.aboutElementText}>
                    <h3>{elem.title}</h3>
                    <p>{elem.text}</p>
                    </div>
                </li>
              )
            })}
          </ul>*/}
        </div>
      </div>
      
    </section>
  )
}