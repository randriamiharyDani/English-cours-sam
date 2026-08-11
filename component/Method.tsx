"use client";

import Reveal from "./Reveal";
import { useVideo } from "./VideoModal";

const steps = [
  { num: "01", title: "Situation réelle", desc: "Chaque leçon démarre par une mise en situation concrète : entretien, voyage, réunion, rendez-vous." },
  { num: "02", title: "Pratique orale intensive", desc: "80% du temps de cours est consacré à la parole active, pas à l'écoute passive." },
  { num: "03", title: "Erreurs corrigées en douceur", desc: "Feedback immédiat et bienveillant, sans jamais casser votre élan à l'oral." },
  { num: "04", title: "Ancrage par la répétition", desc: "Des exercices espacés dans le temps pour fixer durablement le vocabulaire et les réflexes." },
  { num: "05", title: "Konversation libre", desc: "Sessions de conversation libre pour tester votre progression en conditions réelles." },
];

export default function Method() {
  const { openVideo } = useVideo();

  const play = () => openVideo("dQw4w9WgXcQ");

  return (
    <section className="method" id="method">
      <div className="container">
        <Reveal className="method-steps">
          <span className="eyebrow">Méthode</span>
          <h2 style={{ fontSize: "clamp(26px,3.6vw,38px)", color: "var(--navy)", marginBottom: 10 }}>
            La méthode S.P.E.A.K
          </h2>
          <p style={{ color: "var(--gray)", marginBottom: 10, maxWidth: 460 }}>
            Une progression pensée pour vous faire parler dès le premier cours,
            pas dans six mois.
          </p>
          {steps.map((s) => (
            <div className="method-step" key={s.num}>
              <span className="step-num">{s.num}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="method-visual">
          <div
            className="video-player"
            id="videoPlayerTrigger"
            role="button"
            tabIndex={0}
            aria-label="Lire la vidéo de présentation de la méthode"
            onClick={play}
            onKeyDown={(e) => {
              if (e.key === "Enter") play();
            }}
          >
            <img
              src="https://picsum.photos/id/1076/900/700"
              alt="Aperçu de la vidéo de présentation de la méthode S.P.E.A.K"
              loading="lazy"
            />
            <button className="video-play-btn" aria-hidden="true" tabIndex={-1}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7-11-7z" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
