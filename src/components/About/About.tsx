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
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.content}>
        <img className={styles.aboutImg} src={aboutImg} alt='wooden chair' />
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
        </ul>
      </div>
    </section>
  )
}