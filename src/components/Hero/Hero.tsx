import styles from './Hero.module.css'
import heroImg from '../../assets/lamp.png'

export const Hero = () => {
  return(
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Marilena.</h1>
        <p className={styles.description}>I'm a software developer who loves to solve problems in creative ways. Let's create Tomorrow!</p>
        <a className={styles.contactBtn} href="mailto:marilena.froehlich@gmx.de">Contact Me</a>
      </div>
      <img className={styles.heroImg} src={heroImg} alt='hero image' />
      {/*<div className={styles.topBlur} />
      <div className={styles.bottomBlur} />*/}
    </section>
  )
}