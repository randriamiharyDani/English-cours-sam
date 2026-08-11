"use client";

import { useEffect, useState } from "react";

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com/mrsamenglish",
    icon: <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.2-1.5 1.6-1.5H17V3.6C16.6 3.5 15.5 3.4 14.2 3.4c-2.7 0-4.5 1.6-4.5 4.6v2H7v3.1h2.7V21h3.8z" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mrsamenglish",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@mrsamenglish",
    icon: (
      <>
        <path d="M22 12s0-3.2-.4-4.7c-.3-.9-1-1.6-1.9-1.8C18.1 5 12 5 12 5s-6.1 0-7.7.4c-.9.3-1.6 1-1.9 1.9C2 8.9 2 12 2 12s0 3.2.4 4.7c.3.9 1 1.6 1.9 1.9C5.9 19 12 19 12 19s6.1 0 7.7-.4c.9-.3 1.6-1 1.9-1.9.4-1.5.4-4.7.4-4.7z" opacity=".001" />
        <path d="M2 12s0-3.2.4-4.7c.3-.9 1-1.6 1.9-1.9C5.9 5 12 5 12 5s6.1 0 7.7.4c.9.3 1.6 1 1.9 1.9C22 8.8 22 12 22 12s0 3.2-.4 4.7c-.3.9-1 1.6-1.9 1.9C18.1 19 12 19 12 19s-6.1 0-7.7-.4c-.9-.3-1.6-1-1.9-1.9C2 15.2 2 12 2 12z" fill="none" stroke="currentColor" strokeWidth="0" />
        <path d="M10 9l5 3-5 3V9z" fill="#071A33" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/mrsamenglish",
    icon: <path d="M6.9 8.4H3.6V20H6.9V8.4zM5.3 3.6a2 2 0 100 4 2 2 0 000-4zM20.4 20H17V14c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20H9.4V8.4h3.2v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5V20z" />,
  },
];

const navCols = [
  {
    title: "Navigation",
    links: [
      { label: "À propos", href: "#about" },
      { label: "Formations", href: "#courses" },
      { label: "Niveaux", href: "#levels" },
      { label: "Méthode", href: "#method" },
      { label: "Tarifs", href: "#pricing" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "FAQ", href: "#faq" },
      { label: "Galerie", href: "#gallery" },
      { label: "Témoignages", href: "#testimonials" },
      { label: "S'inscrire", href: "#register" },
    ],
  },
];

const footerContact = [
  {
    icon: (
      <>
        <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    label: "Analakely, Antananarivo",
  },
  {
    icon: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M22 6l-10 7L2 6" />
      </>
    ),
    label: "contact@mrsam-english.com",
  },
  {
    icon: <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z" />,
    label: "+261 34 00 000 00",
  },
];

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear());
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="site-footer" id="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="brand">
                <span className="brand-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3l2.6 5.6L21 9.3l-4.5 4.2 1.2 6.3L12 16.9l-5.7 2.9 1.2-6.3L3 9.3l6.4-.7L12 3z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>
                  Mr Sam<small>Spoken English Academy</small>
                </span>
              </a>
              <p>
                Cours d&apos;anglais parlé pour tous niveaux. Une méthode
                centrée sur la pratique, la confiance et les résultats concrets.
              </p>
              <div className="social-links">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill={s.name === "Instagram" ? "none" : "currentColor"}
                      stroke={s.name === "Instagram" ? "currentColor" : "none"}
                      strokeWidth={s.name === "Instagram" ? "2" : "0"}
                    >
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {navCols.map((col) => (
              <nav className="footer-col" key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="footer-contact">
                {footerContact.map((c) => (
                  <li key={c.label}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {c.icon}
                    </svg>
                    {c.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {year} Mr Sam English Academy. Tous droits réservés.
            </span>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>

      <button
        className={`back-to-top${showTop ? " show" : ""}`}
        id="backToTop"
        aria-label="Retour en haut de page"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
