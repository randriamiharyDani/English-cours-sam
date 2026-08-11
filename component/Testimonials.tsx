"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "./data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const updateTrack = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    let visible = 3;
    if (window.innerWidth <= 640) visible = 1;
    else if (window.innerWidth <= 980) visible = 2;
    const maxIndex = Math.max(0, testimonials.length - visible);
    setIndex((i) => Math.min(i, maxIndex));
    const firstCard = track.querySelector<HTMLElement>(".testi-card");
    if (!firstCard) return;
    const cardWidth = firstCard.getBoundingClientRect().width + 24;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }, [index]);

  useEffect(() => {
    updateTrack();
    window.addEventListener("resize", updateTrack);
    return () => window.removeEventListener("resize", updateTrack);
  }, [updateTrack]);

  const getVisible = () => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 980) return 2;
    return 3;
  };

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(testimonials.length - getVisible(), i + 1));

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head center reveal is-visible">
          <span className="eyebrow">Témoignages</span>
          <h2>Ce que disent nos étudiants</h2>
          <p>
            Des résultats concrets, racontés par les personnes qui les ont vécus.
          </p>
        </div>

        <div className="testi-track-wrap">
          <div className="testi-track" id="testiTrack" ref={trackRef}>
            {testimonials.map((t) => (
              <article className="testi-card" key={t.name}>
                <div className="testi-stars">★★★★★</div>
                <p>&quot;{t.text}&quot;</p>
                <div className="testi-person">
                  <img src={t.img} alt="" loading="lazy" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="testi-controls">
          <button onClick={prev} aria-label="Témoignage précédent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button onClick={next} aria-label="Témoignage suivant">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
