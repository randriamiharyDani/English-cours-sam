"use client";

import { useRef, useState, type FormEvent } from "react";
import { validateField } from "./formValidate";

const contactPerks = [
  {
    icon: <path d="M4 4h16v16H4z" />,
    label: "contact@mrsam-english.com",
  },
  {
    icon: <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z" />,
    label: "+261 34 00 000 00",
  },
  {
    icon: (
      <>
        <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    label: "Antananarivo, Madagascar",
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    const field = (e.currentTarget as HTMLElement).closest(".field");
    if (field) validateField(field);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    let isValid = true;
    form.querySelectorAll(".field").forEach((field) => {
      if (!validateField(field)) isValid = false;
    });

    if (!isValid) {
      const firstError = form.querySelector(".has-error");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setSuccess(true);
    form.reset();
    window.setTimeout(() => setSuccess(false), 6000);
  };

  return (
    <section className="form-section alt" id="contact">
      <div className="container">
        <div className="form-side reveal is-visible">
          <span className="eyebrow">Contact</span>
          <h2>Une question ? Écrivez-nous</h2>
          <p>
            Que ce soit sur les formations, les tarifs ou la logistique, notre
            équipe vous répond rapidement.
          </p>
          <ul className="form-perks">
            {contactPerks.map((p) => (
              <li key={p.label}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {p.icon}
                </svg>
                {p.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="form-card reveal is-visible">
          <form
            id="contactForm"
            ref={formRef}
            noValidate
            onSubmit={onSubmit}
          >
            <div className="form-row">
              <div className="field">
                <label htmlFor="ctName">Nom complet *</label>
                <input
                  type="text"
                  id="ctName"
                  name="name"
                  required
                  onBlur={handleBlur}
                />
                <span className="error-msg">Veuillez indiquer votre nom.</span>
              </div>
              <div className="field">
                <label htmlFor="ctEmail">Email *</label>
                <input
                  type="email"
                  id="ctEmail"
                  name="email"
                  required
                  onBlur={handleBlur}
                />
                <span className="error-msg">
                  Veuillez indiquer une adresse email valide.
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="ctSubject">Sujet *</label>
              <select
                id="ctSubject"
                name="subject"
                required
                onBlur={handleBlur}
              >
                <option value="">Sélectionner…</option>
                <option value="formations">Question sur les formations</option>
                <option value="tarifs">Question sur les tarifs</option>
                <option value="technique">Support technique</option>
                <option value="autre">Autre</option>
              </select>
              <span className="error-msg">Veuillez choisir un sujet.</span>
            </div>
            <div className="field">
              <label htmlFor="ctMessage">Message *</label>
              <textarea
                id="ctMessage"
                name="message"
                required
                minLength={10}
                onBlur={handleBlur}
              ></textarea>
              <span className="error-msg">
                Votre message doit contenir au moins 10 caractères.
              </span>
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              Envoyer le message
            </button>
            <div className={`form-success${success ? " show" : ""}`}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Message envoyé ! Nous vous répondons dans les plus brefs délais.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
