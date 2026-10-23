interface FormationItem {
  diplome: string
  etablissement: string
  date: string
}

export default function Formations() {
  const formationsAcademiques: FormationItem[] = [
    {
      diplome: "Licence Mathématique-Informatique (L3 LMD)",
      etablissement: "Université de Kinshasa, Faculté des Sciences",
      date: "2022 – 2026 (Terminé)"
    },
    {
      diplome: "Diplôme d'État en Mathématique-Physique",
      etablissement: "Institut Lubudi I",
      date: "2021 – 2022"
    },
    {
      diplome: "Certificat de fin d'études primaires",
      etablissement: "EP1 Kinzazi",
      date: "2016 – 2017"
    }
  ]

  const formationsComplementaires: FormationItem[] = [
    {
      diplome: "Formation en 3D",
      etablissement: "Orange Digital Center (ODC)",
      date: "2024"
    },
    {
      diplome: "Formation en temps réel",
      etablissement: "Orange Digital Center (ODC)",
      date: "2024"
    },
    {
      diplome: "Intelligence artificielle",
      etablissement: "OpenClassrooms",
      date: "2024"
    },
    {
      diplome: "AWS - Cloud Computing",
      etablissement: "Auto-formation",
      date: "2024"
    },
    {
      diplome: "TypeScript",
      etablissement: "Auto-formation",
      date: "2024"
    },
    {
      diplome: "Bureautique (Word, Excel, PowerPoint, Publisher, Access)",
      etablissement: "Centre Triple A",
      date: "2019"
    },
    {
      diplome: "Initiation à l'informatique",
      etablissement: "Centre Triple A",
      date: "2018"
    }
  ]

  return (
    <section id="formations" className="section">
      <div className="section-header">
        <h2 className="section-title">Formations</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="formations-grid">
        <h3 style={{color: 'var(--white)', marginBottom: 'var(--space-xl)', fontSize: 'var(--font-size-2xl)', fontWeight: 700}}>
          Formations Académiques
        </h3>
        {formationsAcademiques.map((formation, index) => (
          <div key={index} className="formation-card">
            <h3 className="formation-diplome">{formation.diplome}</h3>
            <p className="formation-etablissement">{formation.etablissement}</p>
            <span className="formation-date">{formation.date}</span>
          </div>
        ))}
        
        <h3 style={{color: 'var(--white)', margin: 'var(--space-2xl) 0 var(--space-xl)', fontSize: 'var(--font-size-2xl)', fontWeight: 700}}>
          Formations Complémentaires
        </h3>
        {formationsComplementaires.map((formation, index) => (
          <div key={index} className="formation-card">
            <h3 className="formation-diplome">{formation.diplome}</h3>
            <p className="formation-etablissement">{formation.etablissement}</p>
            <span className="formation-date">{formation.date}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
