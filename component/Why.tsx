import Reveal from "./Reveal";

const cards = [
  {
    icon: "M3 21l6-6m0 0l5-5 4 4-5 5-4-4zM14 6l4 4 3-3-4-4-3 3z",
    title: "Carrière internationale",
    desc: "Accédez à des postes, clients et opportunités à l'échelle mondiale, dans presque tous les secteurs.",
  },
  {
    icon: "M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z",
    circle: "M12 3a9 9 0 100 18 9 9 0 000-18z",
    title: "Voyager en confiance",
    desc: "Communiquez naturellement dans plus de 100 pays où l'anglais est parlé ou compris.",
  },
  {
    icon: "M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z",
    title: "Études à l'étranger",
    desc: "Préparez sereinement vos certifications (TOEFL, IELTS) et vos candidatures universitaires.",
  },
  {
    icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
    title: "Confiance en soi",
    desc: "Osez prendre la parole en réunion, à l'oral d'un examen ou face à des inconnus, sans stress.",
  },
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Pourquoi l&apos;anglais</span>
          <h2>L&apos;anglais ouvre des portes que rien d&apos;autre n&apos;ouvre</h2>
          <p>
            Que ce soit pour votre carrière, vos voyages ou vos études, parler
            anglais couramment change concrètement votre quotidien.
          </p>
        </Reveal>
        <div className="why-grid">
          {cards.map((card) => (
            <Reveal key={card.title}>
              <div className="why-card">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {card.circle && <circle cx="12" cy="12" r="9" />}
                    <path d={card.icon} />
                  </svg>
                </span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
