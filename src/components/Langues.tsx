export default function Langues() {
  const langues = [
    "Français",
    "Lingala",
    "Anglais"
  ]

  return (
    <section id="langues" className="section">
      <div className="section-header">
        <h2 className="section-title">Langues</h2>
        <div className="section-divider"></div>
      </div>
      <div className="langues-list">
        {langues.map((langue, index) => (
          <div key={index} className="langue-item">
            <span className="langue-text">{langue}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
