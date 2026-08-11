"use client";

import { useState } from "react";
import { pricingPlans } from "./data";
import Reveal from "./Reveal";

const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-head center reveal is-visible">
          <span className="eyebrow" style={{ color: "#E4C766" }}>
            Tarifs
          </span>
          <h2>Des formules simples et transparentes</h2>
          <p>Sans engagement. Changez ou annulez votre formule à tout moment.</p>
        </div>

        <div className="pricing-toggle">
          <span className={!yearly ? "active" : ""}>Mensuel</span>
          <button
            className={`toggle-switch${yearly ? " on" : ""}`}
            id="priceToggle"
            role="switch"
            aria-checked={yearly}
            aria-label="Basculer entre tarif mensuel et annuel"
            onClick={() => setYearly((v) => !v)}
          ></button>
          <span className={yearly ? "active" : ""}>
            Annuel <small style={{ color: "#E4C766" }}>(-15%)</small>
          </span>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <Reveal key={plan.name}>
              <div className={`price-card${plan.featured ? " featured" : ""}`}>
                {plan.featured && <span className="price-badge">Populaire</span>}
                <h3>{plan.name}</h3>
                <p className="price-desc">{plan.desc}</p>
                <div className="price-amount">
                  <span className="price-value">
                    {(yearly ? plan.yearly : plan.monthly).toLocaleString(
                      "fr-FR"
                    )}
                  </span>
                  <sub>Ar/mois</sub>
                </div>
                <span className="price-period">
                  {yearly ? "Facturation annuelle" : "Facturation mensuelle"}
                </span>
                <ul className="price-features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      {CheckIcon}
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#register"
                  className={`btn ${plan.featured ? "btn-primary" : "btn-outline"}`}
                  style={
                    plan.featured
                      ? undefined
                      : {
                          borderColor: "rgba(255,255,255,.3)",
                          color: "#fff",
                        }
                  }
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
