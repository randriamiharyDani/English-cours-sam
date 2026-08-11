"use client";

import { useEffect, useState } from "react";
import { searchIndex } from "./data";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Formations", href: "#courses" },
  { label: "Niveaux", href: "#levels" },
  { label: "Méthode", href: "#method" },
  { label: "Avis", href: "#testimonials" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const mobileLinks = [
  { label: "À propos", href: "#about" },
  { label: "Formations", href: "#courses" },
  { label: "Niveaux", href: "#levels" },
  { label: "Méthode", href: "#method" },
  { label: "Avis", href: "#testimonials" },
  { label: "Galerie", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    try {
      return localStorage.getItem("mrsam-theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement | null)?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".main-nav a[href^='#']")
    );
    const sections = links
      .map((a) => document.querySelector<HTMLElement>(a.getAttribute("href")!))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = `#${entry.target.id}`;
          links.forEach((l) =>
            l.classList.toggle("active", l.getAttribute("href") === id)
          );
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("mrsam-theme", next);
      } catch {
        /* stockage indisponible */
      }
      return next;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const results = query.trim()
    ? searchIndex.filter((item) =>
        item.title.toLowerCase().includes(query.trim().toLowerCase())
      )
    : [];

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="siteHeader">
        <div className="container header-inner">
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

          <nav className="main-nav" aria-label="Navigation principale">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="icon-btn hide-mobile"
              id="searchToggle"
              aria-label="Ouvrir la recherche"
              aria-haspopup="dialog"
              onClick={() => setSearchOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </button>
            <button
              className="icon-btn"
              id="themeToggle"
              aria-label="Basculer le mode sombre"
              aria-pressed={theme === "dark"}
              onClick={toggleTheme}
            >
              <svg
                className="icon-sun"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" />
              </svg>
              <svg
                className="icon-moon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
              </svg>
            </button>
            <a href="#register" className="btn btn-primary btn-sm hide-mobile">
              S&apos;inscrire
            </a>
            <button
              className={`hamburger${menuOpen ? " active" : ""}`}
              id="hamburgerBtn"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="mobileNav"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <nav
        className={`mobile-nav${menuOpen ? " active" : ""}`}
        id="mobileNav"
        aria-label="Navigation mobile"
      >
        {mobileLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            {l.label}
          </a>
        ))}
        <a href="#register" className="btn btn-primary" onClick={closeMenu}>
          S&apos;inscrire maintenant
        </a>
      </nav>

      <div
        className={`search-overlay${searchOpen ? " active" : ""}`}
        id="searchOverlay"
        role="dialog"
        aria-modal="true"
        aria-label="Recherche sur le site"
        onClick={(e) => {
          if (e.target === e.currentTarget) setSearchOpen(false);
        }}
      >
        <div className="search-box">
          <form id="searchForm" role="search" onSubmit={(e) => e.preventDefault()}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              type="text"
              id="searchInput"
              placeholder="Rechercher une formation, un article, une question…"
              autoComplete="off"
              autoFocus={searchOpen}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="button"
              className="search-close"
              id="searchClose"
              aria-label="Fermer la recherche"
              onClick={() => {
                setSearchOpen(false);
                setQuery("");
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </form>
          <div className="search-results" id="searchResults">
            {query.trim() === "" && null}
            {query.trim() !== "" && results.length === 0 && (
              <div className="search-empty">
                Aucun résultat pour &quot;{query.trim()}&quot;.
              </div>
            )}
            {results.map((m) => (
              <a
                key={m.title}
                href={m.href}
                onClick={() => {
                  setSearchOpen(false);
                  setQuery("");
                }}
              >
                {m.title}
                <span>{m.cat}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
