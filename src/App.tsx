import { useState, useEffect } from 'react'
import Header from './components/Header'
import Qualites from './components/Qualites'
import Competences from './components/Competences'
import Experience from './components/Experience'
import Formations from './components/Formations'
import Projets from './components/Projets'
import Langues from './components/Langues'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './index.css'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="portfolio-container">
      <Navbar scrolled={isScrolled} />
      <main className="portfolio-main">
        <Header />
        <Qualites />
        <Competences />
        <Experience />
        <Formations />
        <Projets />
        <Langues />
        <Contact />
      </main>
      <footer className="portfolio-footer">
        <p>© 2026 Arsène TSHITENGA NTAMBWA | Développeur Frontend | Kinshasa, RDC</p>
      </footer>
    </div>
  )
}
