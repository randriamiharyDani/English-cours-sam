import Reveal from "./Reveal";

const credentials = [
  {
    icon: <path d="M22 10L12 5 2 10l10 5 10-5z" />,
    second: <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />,
    title: "Certifié CELTA",
    sub: "Cambridge English",
  },
  {
    icon: (
      <path d="M12 21s-7-4.35-9.5-8.5C1 9 2.5 5 6.5 5c2 0 3.5 1.5 5.5 3.5C14 6.5 15.5 5 17.5 5 21.5 5 23 9 21.5 12.5 19 16.65 12 21 12 21z" />
    ),
    title: "320+ étudiants",
    sub: "Accompagnés avec succès",
  },
  {
    icon: <circle cx="12" cy="12" r="9" />,
    second: <path d="M12 7v5l3.5 2" />,
    title: "12 ans",
    sub: "D'enseignement international",
  },
  {
    icon: <path d="M8 5v14l11-7-11-7z" />,
    title: "180+ leçons",
    sub: "Vidéo et ressources exclusives",
  },
];

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <Reveal className="about-visual">
            <img
              src="/img/image_sam.jpg"
              alt="Portrait de Mr Sam, professeur d'anglais"
              loading="lazy"
            />
            <div className="about-badge-circle">
              <span>6 ANS D&apos;EXPÉRIENCE ★</span>
            </div>
          </Reveal>
          <Reveal className="about-body">
            <span className="eyebrow">À propos de Mr Sam</span>
            <h2>
              Un professeur, une mission : vous faire parler anglais sans peur
              du jugement.
            </h2>
            <p>
              Diplômé en linguistique appliquée et certifié CELTA, Sam a
              enseigné l&apos;anglais dans quatre pays avant de fonder son
              académie. Son constat : la plupart des apprenants connaissent la
              grammaire, mais bloquent au moment de parler.
            </p>
            <p>
              Sa méthode inverse la logique classique : on parle dès la
              première minute, on corrige en douceur, et la grammaire
              s&apos;installe naturellement par la pratique répétée — comme un
              enfant apprend sa langue maternelle.
            </p>
            <p className="about-signature">
              &quot;Mon objectif n&apos;est pas de vous faire réussir un
              examen. C&apos;est de vous faire oser parler.&quot;
            </p>

            <div className="about-credentials">
              {credentials.map((c) => (
                <div className="credential" key={c.title}>
                  <span className="ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {c.icon}
                      {c.second}
                    </svg>
                  </span>
                  <div>
                    <strong>{c.title}</strong>
                    <span>{c.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <span className="line"></span>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3l2.6 5.6L21 9.3l-4.5 4.2 1.2 6.3L12 16.9l-5.7 2.9 1.2-6.3L3 9.3l6.4-.7L12 3z" />
        </svg>
        <span className="line"></span>
      </div>
    </>
  );
}
