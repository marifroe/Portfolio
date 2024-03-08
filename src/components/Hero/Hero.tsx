import styles from './Hero.module.css'

export const Hero = () => {
  return(
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Marilena.</h1>
        <p className={styles.description}>I'm a Software Developer who loves to solve problems in creative ways.<br/><span className={styles.unhighlight}>my portfolio is work in progress and still has a few quirks here and there, sorry for the inconvenience </span></p>
        <div className={styles.buttons}>
          <a className={`${styles.heroBtn} ${styles.unfilled}`} href="mailto:marilena.froehlich@gmx.de">Contact Me</a>
          <a className={styles.heroBtn} href="#projects">Projects</a>
        </div>
      </div>
      {/*<img className={styles.heroImg} src={heroImg} alt='hero image' />
      /*<div className={styles.topBlur} />
      <div className={styles.bottomBlur} />*/}
    </section>
  )
}