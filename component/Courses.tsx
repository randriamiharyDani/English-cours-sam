"use client";

import { useMemo, useState } from "react";
import { courses, courseFilters } from "./data";

const PER_PAGE = 6;

export default function Courses() {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (filter === "all" ? courses : courses.filter((c) => c.cat === filter)),
    [filter]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  const goToPage = (p: number) => {
    setPage(Math.max(1, Math.min(totalPages, p)));
    document
      .getElementById("courses")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="courses" id="courses">
      <div className="container">
        <div className="section-head reveal is-visible">
          <span className="eyebrow">Nos formations</span>
          <h2>Choisissez le format qui vous correspond</h2>
          <p>
            Des formations conçues pour tous les objectifs : conversation
            courante, business English, préparation aux examens et plus encore.
          </p>
        </div>

        <div className="course-filters" role="tablist" aria-label="Filtrer les formations">
          {courseFilters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn${filter === f.value ? " active" : ""}`}
              data-filter={f.value}
              onClick={() => {
                setFilter(f.value);
                setPage(1);
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="course-grid" id="courseGrid">
          {pageItems.length === 0 && (
            <p style={{ gridColumn: "1/-1", textAlign: "center", color: "var(--gray)" }}>
              Aucune formation dans cette catégorie pour le moment.
            </p>
          )}
          {pageItems.map((c) => (
            <article className="course-card" data-cat={c.cat} key={c.title}>
              <div className="course-thumb">
                <img src={c.img} alt={c.title} loading="lazy" />
                <span className="course-tag">{c.catLabel}</span>
              </div>
              <div className="course-body">
                <div className="course-meta">
                  <span>{c.level}</span>
                  <span>•</span>
                  <span>{c.duration}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="course-footer">
                  <span className="course-price">
                    {c.price}
                    <small style={{ fontSize: "11px", color: "var(--gray-light)", fontWeight: 500 }}>
                      /mois
                    </small>
                  </span>
                  <a href="#register" className="course-link">
                    S&apos;inscrire{" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="pagination" id="coursePagination" aria-label="Pagination des formations">
            <button
              className="nav-arrow"
              aria-label="Page précédente"
              disabled={safePage === 1}
              onClick={() => goToPage(safePage - 1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={p === safePage ? "active" : ""}
                aria-current={p === safePage ? "page" : "false"}
                onClick={() => goToPage(p)}
              >
                {p}
              </button>
            ))}
            <button
              className="nav-arrow"
              aria-label="Page suivante"
              disabled={safePage === totalPages}
              onClick={() => goToPage(safePage + 1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
