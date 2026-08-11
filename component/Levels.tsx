import Reveal from "./Reveal";

const levels = [
  {
    index: "Niveau 01",
    title: "Débutant (A1–A2)",
    desc: "Bases de la conversation : se présenter, poser des questions simples, comprendre l'essentiel d'un échange quotidien.",
    width: 30,
    tags: ["Vocabulaire de base", "Prononciation", "Situations du quotidien"],
  },
  {
    index: "Niveau 02",
    title: "Intermédiaire (B1–B2)",
    desc: "Aisance conversationnelle : débattre, exprimer une opinion nuancée, suivre un film ou un podcast sans sous-titres.",
    width: 65,
    tags: ["Fluidité", "Idiomes", "Anglais professionnel"],
  },
  {
    index: "Niveau 03",
    title: "Avancé (C1–C2)",
    desc: "Maîtrise proche du natif : nuances, humour, registres de langue, négociation et prise de parole en public.",
    width: 92,
    tags: ["Registre soutenu", "Négociation", "Certification"],
  },
];

export default function Levels() {
  return (
    <section className="levels" id="levels">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow" style={{ color: "#E4C766" }}>
            Niveaux
          </span>
          <h2>Un parcours adapté à chaque niveau</h2>
          <p>
            Un test de positionnement gratuit détermine votre niveau exact avant
            de démarrer.
          </p>
        </Reveal>
        <div className="levels-grid">
          {levels.map((lvl) => (
            <Reveal key={lvl.index}>
              <div className="level-card">
                <span className="level-index">{lvl.index}</span>
                <h3>{lvl.title}</h3>
                <p>{lvl.desc}</p>
                <div className="level-bar">
                  <span style={{ width: `${lvl.width}%` }}></span>
                </div>
                <div className="level-tags">
                  {lvl.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
