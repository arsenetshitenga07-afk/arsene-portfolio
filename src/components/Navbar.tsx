interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <span className="logo-initial">AT</span>
          <span className="logo-text">Portfolio</span>
        </a>
        <ul className="navbar-links">
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#qualites">Qualités</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#experience">Expérience</a></li>
          <li><a href="#formations">Formations</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#langues">Langues</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="navbar-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
