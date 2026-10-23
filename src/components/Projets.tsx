interface ProjetItem {
  titre: string
  contexte: string
  description: string
  technologies: string[]
  date: string
  lien?: string
}

export default function Projets() {
  const projets: ProjetItem[] = [
    {
      titre: "Portfolio Professionnel",
      contexte: "Site Web Personnel - Ce site",
      description: "Portfolio professionnel moderne avec design bleu marine, animations fluides et mise en page responsive. Présente mes compétences, expériences et projets de développement.",
      technologies: ["React", "TypeScript", "CSS3", "Vite"],
      date: "2026",
      lien: "#"
    },
    {
      titre: "Application de télémédecine",
      contexte: "Travail de Fin de Cycle (TFC) - Université de Kinshasa",
      description: "Application réalisée pour assurer des consultations et un suivi médical à distance.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      date: "2024"
    },
    {
      titre: "Vodacom Smart Agent",
      contexte: "Stage chez Vodacom Congo",
      description: "Application de supervision des shops Vodacom. Permet de suivre les performances et le stock en temps réel.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      date: "Octobre 2026"
    },
    {
      titre: "Catalog-Service",
      contexte: "Projet interne - Vodacom Congo",
      description: "Portail interne de catalogue des applications et services. Centralisation et gestion des ressources numériques.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"],
      date: "2026"
    }
  ]

  return (
    <section id="projets" className="section">
      <div className="section-header">
        <h2 className="section-title">Applications et Sites Développés</h2>
        <div className="section-divider"></div>
      </div>
      <div className="projets-grid">
        {projets.map((projet, index) => (
          <div key={index} className="projet-card">
            <div className="projet-header">
              <h3 className="projet-titre">{projet.titre}</h3>
              <span className="projet-contexte">{projet.contexte}</span>
            </div>
            <p className="projet-description">{projet.description}</p>
            <div className="projet-technologies">
              {projet.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">{tech}</span>
              ))}
            </div>
            <span className="projet-date">{projet.date}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
