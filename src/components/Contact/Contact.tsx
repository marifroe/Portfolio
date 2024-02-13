import { getImageUrl } from '../../utils'
import styles from './contact.module.css'

type ContactProps = {
  title: string
}

export const Contact = (props: ContactProps) => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>{props.title}</h2>
        <p>Let's create Tomorrow</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl({ path: 'contact/mail.png' })} alt='E-Mail Icon' />
          <a href="mailto:marilena.froehlich@gmx.de">marilena.froehlich@gmx.de</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl({ path: 'contact/linkedin.png' })} alt='E-Mail Icon' />
          <a href="https://www.linkedin.com/in/marilenafroehlich/">My LinkedIn Profile</a>
        </li>
      </ul>
    </footer>
  )
}