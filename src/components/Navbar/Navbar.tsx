import styles from './Navbar.module.css'
import { useState } from 'react'
import { getImageUrl } from '../../utils'

type NavbarProps = {
  title: string
  elements: {
    text: string
    link: string
  }[]
  iconMenuSrc: string
  iconCloseSrc: string
}

export const Navbar = (props: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      {/*<a className={styles.title} href='/'>{props.title}</a>*/}
      <div className={styles.menu}>
        <img className={styles.menuBtn}
          src={menuOpen
            ? getImageUrl({path:props.iconCloseSrc})
            : getImageUrl({path:props.iconMenuSrc})}
          alt='menu-button'
          height={50}
          width={50}
          onClick={() => setMenuOpen(!menuOpen)} /> {/*{getImageUrl({path: menuIconUrl})}*/}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
          {props.elements.map(element => {
            return (
              <li>
                <a href={element.link}>{element.text}</a>
              </li>
            ) 
          })}
        </ul>
      </div>
    </nav>
  )
}