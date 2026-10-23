export default function Header() {
  return (
    <header id="apropos" className="hero">
      <div className="hero-content">
        <div className="hero-intro" style={{ marginBottom: 'var(--space-xl)' }}>
          <span className="hero-subtitle">Bonjour, je suis</span>
          <h1 className="hero-title" style={{ margin: 'var(--space-sm) 0' }}>Arsène TSHITENGA NTAMBWA</h1>
          <h2 className="hero-role" style={{ margin: 'var(--space-sm) 0' }}>Développeur Frontend</h2>
        </div>
        <p className="hero-bio" style={{ margin: 'var(--space-lg) auto' }}>
          Diplômé en Mathématique-Informatique de l'Université de Kinshasa, 
          passionné par le développement web. Ancien stagiaire chez Vodacom Congo, je recherche une 
          opportunité pour mettre mes compétences au service d'une équipe technique.
        </p>
        <div className="hero-contact" style={{ marginTop: 'var(--space-xl)', gap: 'var(--space-xl)' }}>
          <a href="https://github.com/arsenetshitenga07-afk" target="_blank" rel="noopener noreferrer" className="btn">
            GitHub
          </a>
          <a href="mailto:arsenetshitenga07@gmail.com" className="btn btn-outline">
            Email
          </a>
        </div>
      </div>
    </header>
  )
}
