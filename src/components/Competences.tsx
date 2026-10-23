interface Competence {
  nom: string
  niveau: string
}

interface CompetenceCategory {
  categorie: string
  competences: Competence[]
}

export default function Competences() {
  const categories: CompetenceCategory[] = [
    {
      categorie: "Frontend",
      competences: [
        { nom: "JavaScript (ES6+)", niveau: "Avancé" },
        { nom: "React", niveau: "Avancé" },
        { nom: "Next.js", niveau: "Avancé" },
        { nom: "Vite", niveau: "Intermédiaire" },
        { nom: "HTML / CSS", niveau: "Avancé" },
        { nom: "TailwindCSS", niveau: "Intermédiaire" },
        { nom: "shadcn/ui", niveau: "Intermédiaire" }
      ]
    },
    {
      categorie: "État et données",
      competences: [
        { nom: "Zustand", niveau: "Intermédiaire" },
        { nom: "TanStack React-Query", niveau: "Intermédiaire" },
        { nom: "i18next", niveau: "Intermédiaire" }
      ]
    },
    {
      categorie: "Langages",
      competences: [
        { nom: "TypeScript", niveau: "Avancé" },
        { nom: "Next.js", niveau: "Avancé" },
        { nom: "Python", niveau: "Intermédiaire" }
      ]
    },
    {
      categorie: "Backend",
      competences: [
        { nom: "Node.js / Express", niveau: "Intermédiaire" }
      ]
    },
    {
      categorie: "Cloud",
      competences: [
        { nom: "AWS (Cloud Computing)", niveau: "Débutant" }
      ]
    },
    {
      categorie: "Outils",
      competences: [
        { nom: "Git", niveau: "Intermédiaire" },
        { nom: "GitHub", niveau: "Intermédiaire" },
        { nom: "VS Code", niveau: "Avancé" },
        { nom: "Windows", niveau: "Avancé" },
        { nom: "Microsoft Office", niveau: "Avancé" }
      ]
    }
  ]

  const getNiveauLabel = (niveau: string) => {
    switch (niveau) {
      case "Avancé": return "Avancé"
      case "Intermédiaire": return "Intermédiaire"
      case "Débutant": return "Débutant"
      default: return niveau
    }
  }

  return (
    <section id="competences" className="section">
      <div className="section-header">
        <h2 className="section-title">Compétences Techniques</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="competences-natural">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="competence-category-natural">
            <h3 className="category-title-natural">{category.categorie}</h3>
            <ul className="competence-list-natural">
              {category.competences.map((comp, compIndex) => (
                <li key={compIndex} className="competence-item-natural">
                  <span className="competence-name-natural">{comp.nom}</span>
                  <span className={`competence-niveau-natural ${comp.niveau.toLowerCase()}`}>
                    {getNiveauLabel(comp.niveau)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
