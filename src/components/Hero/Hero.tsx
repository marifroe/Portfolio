import styles from './Hero.module.css'
import heroImg from '../../assets/lamp.png'

export const Hero = () => {
  return(
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Marilena.</h1>
        <p className={styles.description}>My portfolio is currently under construction. However, it gives a first impression of the projects I have been working on. Later today, there will already be a lot more to explore.</p>
        <div className={styles.buttons}>
          <a className={styles.heroBtn} href="mailto:marilena.froehlich@gmx.de">Contact Me</a>
          <a className={styles.heroBtn} href="#projects">Projects</a>
        </div>
      </div>
      {/*<img className={styles.heroImg} src={heroImg} alt='hero image' />
      /*<div className={styles.topBlur} />
      <div className={styles.bottomBlur} />*/}
    </section>
  )
}