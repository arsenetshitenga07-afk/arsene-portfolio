interface ExperienceItem {
  poste: string
  entreprise: string
  lieu: string
  date: string
  descriptions: string[]
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      poste: "Stagiaire - Développeur Frontend",
      entreprise: "Vodacom Congo",
      lieu: "Kinshasa, RDC",
      date: "9 septembre - 30 octobre 2026",
      descriptions: [
        "Développement d'applications internes pour la supervision des shops.",
        "Contribution à des projets de digitalisation."
      ]
    },
    {
      poste: "Délégué commercial",
      entreprise: "Elvino",
      lieu: "Kinshasa, RDC",
      date: "2025",
      descriptions: [
        "J'ai attiré plusieurs partenaires, dont des supermarchés.",
        "Fort impact auprès de la population de Zando."
      ]
    },
    {
      poste: "Opérateur de saisie",
      entreprise: "Cyber Café Triple A",
      lieu: "Matete, Kinshasa, RDC",
      date: "2023",
      descriptions: [
        "Saisie et mise en forme de documents (Word, Excel, PowerPoint).",
        "Accueil des clients, rigueur et respect des délais."
      ]
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2 className="section-title">Expérience Professionnelle</h2>
        <div className="section-divider"></div>
      </div>
      <div className="experiences-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-info">
                <h3 className="experience-poste">{exp.poste}</h3>
                <span className="experience-entreprise">{exp.entreprise}, {exp.lieu}</span>
              </div>
              <span className="experience-date">{exp.date}</span>
            </div>
            {exp.descriptions.length > 0 && (
              <ul className="experience-descriptions">
                {exp.descriptions.map((desc, descIndex) => (
                  <li key={descIndex} className="experience-description">{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
