"use client";

import { useRef, type FormEvent } from "react";
import { EMAIL_RE } from "./formValidate";

export default function Newsletter() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const input = inputRef.current;
    if (!input) return;

    if (EMAIL_RE.test(input.value)) {
      input.style.boxShadow = "0 0 0 3px rgba(255,255,255,0.6)";
      input.value = "";
      input.placeholder = "Merci pour votre inscription ✓";
      window.setTimeout(() => {
        input.style.boxShadow = "";
        input.placeholder = "Votre adresse email";
      }, 4000);
    } else {
      input.style.boxShadow = "0 0 0 3px rgba(255,255,255,0.9)";
      input.focus();
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div>
          <h2>Recevez nos conseils d&apos;anglais chaque semaine</h2>
          <p>
            Astuces, expressions idiomatiques et exercices, directement dans
            votre boîte mail.
          </p>
        </div>
        <form className="newsletter-form" id="newsletterForm" noValidate onSubmit={onSubmit}>
          <label
            htmlFor="newsletterEmail"
            style={{ position: "absolute", left: "-9999px" }}
          >
            Adresse email
          </label>
          <input
            type="email"
            id="newsletterEmail"
            placeholder="Votre adresse email"
            required
            ref={inputRef}
          />
          <button type="submit" className="btn btn-white">
            S&apos;abonner
          </button>
        </form>
      </div>
    </section>
  );
}
