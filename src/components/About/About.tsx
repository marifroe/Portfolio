import { getImageUrl } from '../../utils'
import styles from './About.module.css'

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
      <img src={getImageUrl({path: 'wobbles.svg'})} className={styles.bgImage} />
      <div className={styles.box}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.content}>
          <p>
            I'm a <span>Software Developer</span> who is always up for a good challenge. What I do equally like is designing an
            intuitive and well-thought-out <span>User Experience and Interface</span>. I love to think of different and novel
            Approaches to achieve a Goal and find the best one suitable.
          </p>
          {/*<p>
            Lately, I was pretty involved with XR both as Working Student and for my Master's Thesis. I gained a good understanding
            of State-of-the-Art XR applications and the challenges we face to establish the technology into our daily lives. interaction. Novel technologies require novel approaches. Hand tracking becomes more popular and so
            does the application of gestures for interaction. Therefore in the future, we need to come up
            with a new set of interaction techniques to tackle the rapidly evolving field of VR.
          </p>*/}
          <p>
            <span>A Masters Degree in Computer Science and Media</span> and a Semester Abroad with focus on <span>Visual Communication </span> 
            provide me with all the Skills to perform successful in a creative and innovative Environment and. My Background in Computer Science helps 
            me to understand the Possibilities.
          </p>
          <p>
            Within a Team is where I work best - to share and discuss Ideas and to get different Perspectives. Being an empathic Teamplayer, I at the same time
            work very independently: <span>I'm highly motivated, realiable, structured and a quick Learner!</span>
          </p>
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