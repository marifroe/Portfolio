import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'

function App() {
  const sections = [
    {
      text: 'About',
      link: '#about',
    },
    {
      text: 'Experience',
      link: '#experience',
    },
    {
      text: 'Projects',
      link: '#projects',
    },
    {
      text: 'Contact',
      link: '#contact',
    },
  ]

/*  const aboutElements = [
    {
      title: 'Studies',
      text: 'I got a M. Sc. degree from TU Dresden',
    },
  ]
  */

  return (
    <div className={styles.App}>
      <Navbar title='Marilena&#39;s Portfolio' elements={sections} iconMenuSrc='nav/menuIcon.png' iconCloseSrc='nav/closeIcon.png'/>
      <Hero />
      <About title={sections[0].text} elements={[]} />
      <Experience title={sections[1].text} />
      <Projects title={sections[2].text} />
      <Contact title={sections[3].text}/>
    </div>
  )
}

export default App
