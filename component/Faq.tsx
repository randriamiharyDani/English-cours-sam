"use client";

import { useEffect, useRef, useState } from "react";
import { faqItems } from "./data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    faqItems.forEach((_, i) => {
      const el = answerRefs.current[i];
      if (el) {
        el.style.maxHeight = openIndex === i ? `${el.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  const toggle = (i: number) => setOpenIndex((cur) => (cur === i ? null : i));

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head reveal is-visible">
          <span className="eyebrow">FAQ</span>
          <h2>Vos questions, nos réponses</h2>
          <p>
            Tout ce qu&apos;il faut savoir avant de commencer votre parcours
            avec Mr Sam.
          </p>
        </div>
        <div className="faq-list reveal is-visible" id="faqList">
          {faqItems.map((item, i) => (
            <div
              key={item.question}
              className={`faq-item${openIndex === i ? " open" : ""}`}
            >
              <button
                className="faq-question"
                aria-expanded={openIndex === i}
                onClick={() => toggle(i)}
              >
                {item.question}
                <span className="plus">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className="faq-answer"
                ref={(el) => {
                  answerRefs.current[i] = el;
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
