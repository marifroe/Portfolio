import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { About } from './components/About/About'

function App() {
  const sections = [
    /*{
      text: 'Experience',
      link: '#experience',
    },*/
    {
      text: 'About',
      link: '#about',
    },{
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
      {/*<Experience title={sections[0].text} />*/}
      <Projects title={sections[1].text} />
      <Contact title={sections[2].text}/>
    </div>
  )
}

export default App
