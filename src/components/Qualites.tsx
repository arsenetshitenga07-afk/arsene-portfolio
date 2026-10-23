export default function Qualites() {
  const qualites = [
    "Esprit d'analyse et logique",
    "Apprentissage rapide, autonomie",
    "Rigueur et sens du détail",
    "Esprit d'équipe"
  ]

  return (
    <section id="qualites" className="section">
      <div className="section-header">
        <h2 className="section-title">Mes Qualités</h2>
        <div className="section-divider"></div>
      </div>
      <div className="qualites-grid">
        {qualites.map((qualite, index) => (
          <div key={index} className="qualite-card">
            <span className="qualite-icon">✓</span>
            <span className="qualite-text">{qualite}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
