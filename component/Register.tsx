"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

import { validateField } from "./formValidate";

type RegisterContextValue = { openRegister: () => void };

const RegisterContext = createContext<RegisterContextValue>({
  openRegister: () => {},
});

export function useRegister() {
  return useContext(RegisterContext);
}

export function RegisterForm({
  idPrefix,
  onSuccess,
}: {
  idPrefix: string;
  onSuccess?: () => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const id = (name: string) => `${idPrefix}${name}`;

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

    const consent = form.querySelector<HTMLInputElement>(`#${id("Consent")}`);
    const consentError = form.querySelector<HTMLSpanElement>(`#${id("ConsentError")}`);
    const ok = consent?.checked === true;
    if (consentError) consentError.style.display = ok ? "none" : "block";
    if (!ok) isValid = false;

    if (!isValid) {
      const firstError = form.querySelector(".has-error, .field-check");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setSuccess(true);
    form.reset();
    form.querySelectorAll(".field").forEach((f) => f.classList.remove("has-error"));
    window.setTimeout(() => setSuccess(false), 6000);
    onSuccess?.();
  };

  return (
    <form id={`${idPrefix}Form`} ref={formRef} noValidate onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor={id("FirstName")}>Prénom *</label>
          <input
            type="text"
            id={id("FirstName")}
            name="firstName"
            required
            onBlur={handleBlur}
          />
          <span className="error-msg">Veuillez indiquer votre prénom.</span>
        </div>
        <div className="field">
          <label htmlFor={id("LastName")}>Nom *</label>
          <input
            type="text"
            id={id("LastName")}
            name="lastName"
            required
            onBlur={handleBlur}
          />
          <span className="error-msg">Veuillez indiquer votre nom.</span>
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor={id("Email")}>Email *</label>
          <input
            type="email"
            id={id("Email")}
            name="email"
            required
            onBlur={handleBlur}
          />
          <span className="error-msg">
            Veuillez indiquer une adresse email valide.
          </span>
        </div>
        <div className="field">
          <label htmlFor={id("Phone")}>Téléphone *</label>
          <input
            type="tel"
            id={id("Phone")}
            name="phone"
            required
            placeholder="+261 34 00 000 00"
            onBlur={handleBlur}
          />
          <span className="error-msg">
            Veuillez indiquer un numéro valide.
          </span>
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor={id("Level")}>Niveau actuel *</label>
          <select id={id("Level")} name="level" required onBlur={handleBlur}>
            <option value="">Sélectionner…</option>
            <option value="debutant">Débutant (A1–A2)</option>
            <option value="intermediaire">Intermédiaire (B1–B2)</option>
            <option value="avance">Avancé (C1–C2)</option>
            <option value="inconnu">Je ne sais pas</option>
          </select>
          <span className="error-msg">Veuillez sélectionner un niveau.</span>
        </div>
        <div className="field">
          <label htmlFor={id("Format")}>Formation souhaitée *</label>
          <select id={id("Format")} name="format" required onBlur={handleBlur}>
            <option value="">Sélectionner…</option>
            <option value="conversation">Conversation courante</option>
            <option value="business">Business English</option>
            <option value="exam">Préparation examens</option>
            <option value="kids">Enfants &amp; ados</option>
          </select>
          <span className="error-msg">Veuillez choisir une formation.</span>
        </div>
      </div>
      <div className="field">
        <label htmlFor={id("Message")}>Votre objectif (facultatif)</label>
        <textarea
          id={id("Message")}
          name="message"
          placeholder="Ex : je veux gagner en confiance à l'oral pour mon travail…"
        ></textarea>
      </div>
      <label className="field-check">
        <input type="checkbox" id={id("Consent")} name="consent" required />
        J&apos;accepte d&apos;être contacté(e) par Mr Sam English Academy
        concernant mon inscription. *
      </label>
      <div className="field" style={{ marginTop: "6px" }}>
        <span className="error-msg" id={id("ConsentError")} style={{ display: "none" }}>
          Merci d&apos;accepter d&apos;être contacté(e) pour continuer.
        </span>
      </div>
      <button type="submit" className="btn btn-primary form-submit">
        Envoyer ma demande d&apos;inscription
      </button>
      <div className={`form-success${success ? " show" : ""}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6L9 17l-5-5" />
        </svg>
        Merci ! Votre demande a bien été envoyée. Mr Sam vous recontacte sous 24h.
      </div>
    </form>
  );
}

const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const perks = [
  "Cours d'essai 100% gratuit",
  "Test de niveau inclus",
  "Réponse sous 24h",
  "Sans engagement",
];

export function RegisterSection() {
  return (
    <section className="form-section" id="register">
      <div className="container">
        <div className="form-side reveal is-visible">
          <span className="eyebrow">Inscription</span>
          <h2>Réservez votre cours d&apos;essai gratuit</h2>
          <p>
            Remplissez ce formulaire et Mr Sam vous recontacte sous 24h pour
            planifier votre première séance, sans engagement.
          </p>
          <ul className="form-perks">
            {perks.map((p) => (
              <li key={p}>
                {CheckIcon}
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="form-card reveal is-visible">
          <RegisterForm idPrefix="reg" />
        </div>
      </div>
    </section>
  );
}

export function RegisterProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const lastFocused = useRef<HTMLElement | null>(null);

  const openRegister = useCallback(() => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeRegister = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
    lastFocused.current?.focus();
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href="#register"]');
      if (link) {
        e.preventDefault();
        openRegister();
      }
    };
    document.addEventListener("click", onClick);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) closeRegister();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, openRegister, closeRegister]);

  return (
    <RegisterContext.Provider value={{ openRegister }}>
      {children}
      <div
        className={`modal-overlay${open ? " active" : ""}`}
        id="registerModalOverlay"
        role="dialog"
        aria-modal="true"
        aria-label="Formulaire d'inscription"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeRegister();
        }}
      >
        <div className="modal-box" id="registerModalBody">
          <button
            className="modal-close"
            id="registerModalClose"
            onClick={closeRegister}
            aria-label="Fermer le formulaire d'inscription"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="modal-header">
            <span className="eyebrow">Inscription</span>
            <h2>Réservez votre cours d&apos;essai gratuit</h2>
            <p>
              Remplissez ce formulaire, Mr Sam vous recontacte sous 24h pour
              planifier votre première séance.
            </p>
          </div>
          <RegisterForm
            idPrefix="regModal"
            onSuccess={() => {
              window.setTimeout(closeRegister, 2200);
            }}
          />
        </div>
      </div>
    </RegisterContext.Provider>
  );
}
