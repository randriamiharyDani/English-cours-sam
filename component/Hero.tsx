"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "./data";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-pattern" aria-hidden="true"></div>
      <div className="hero-stripes" aria-hidden="true"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3l2.6 5.6L21 9.3l-4.5 4.2 1.2 6.3L12 16.9l-5.7 2.9 1.2-6.3L3 9.3l6.4-.7L12 3z" />
              </svg>
            </span>
            <span>Spécialiste de l&apos;anglais parlé depuis 12 ans</span>
          </div>
          <h1>
            Parlez anglais
            <br />
            avec <em>confiance</em>,
            <br />
            dès la première leçon.
          </h1>
          <p className="lead">
            Mr Sam vous accompagne avec une méthode centrée sur la conversation
            réelle : moins de grammaire figée, plus de pratique orale, de mise
            en situation et de confiance à l&apos;oral.
          </p>
          <div className="hero-cta">
            <a href="#register" className="btn btn-primary">
              <span className="waveform" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
              Réserver un cours d&apos;essai
            </a>
            <a href="#courses" className="btn btn-outline">
              Voir les formations
            </a>
          </div>
          <div className="hero-trust">
            <div className="avatar-stack" aria-hidden="true">
              <img src="https://i.pravatar.cc/80?img=32" alt="" loading="lazy" />
              <img src="https://i.pravatar.cc/80?img=47" alt="" loading="lazy" />
              <img src="https://i.pravatar.cc/80?img=15" alt="" loading="lazy" />
              <img src="https://i.pravatar.cc/80?img=5" alt="" loading="lazy" />
            </div>
            <div className="rating">
              <span className="stars">★★★★★</span>
              <strong>4.9/5 — 320+ étudiants formés</strong>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-slider" id="heroSlider">
            {heroSlides.map((slide, i) => (
              <div
                key={slide.img}
                className={`hero-slide${i === index ? " active" : ""}`}
              >
                <img src={slide.img} alt={slide.alt} loading="lazy" />
                <div className="hero-slide-caption">
                  <strong>{slide.caption}</strong>
                  <span>{slide.sub}</span>
                </div>
              </div>
            ))}
            <div className="hero-slider-dots" id="heroDots">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  className={i === index ? "active" : ""}
                  aria-label={`Voir l'image ${i + 1}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
          <div className="hero-float-card">
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 5v14l11-7-11-7z" />
              </svg>
            </span>
            <div>
              <strong>+180 leçons</strong>
              <span>vidéo disponibles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
