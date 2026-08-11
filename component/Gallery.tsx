"use client";

import { useEffect, useState } from "react";
import { galleryItems } from "./data";
import { useVideo } from "./VideoModal";

const imageItems = galleryItems.filter((g) => g.full);

export default function Gallery() {
  const { openVideo } = useVideo();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const showImage = lightboxIndex !== null;
  const current = showImage ? imageItems[lightboxIndex] : null;

  const step = (delta: number) => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex + delta + imageItems.length) % imageItems.length
    );
  };

  return (
    <>
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="section-head reveal is-visible">
            <span className="eyebrow">Galerie</span>
            <h2>La vie de l&apos;académie en images</h2>
            <p>
              Ateliers, cours en groupe, événements et coulisses des tournages
              pédagogiques.
            </p>
          </div>
          <div className="gallery-grid" id="galleryGrid">
            {galleryItems.map((g) => {
              const roleProps = g.video
                ? {
                    role: "button",
                    tabIndex: 0,
                    "aria-label": `Lire la vidéo : ${g.caption}`,
                    onClick: () => openVideo(g.video!),
                    onKeyDown: (e: React.KeyboardEvent) => {
                      if (e.key === "Enter") openVideo(g.video!);
                    },
                  }
                : {
                    role: "button",
                    tabIndex: 0,
                    "aria-label": `Agrandir : ${g.caption}`,
                    onClick: () =>
                      openLightbox(
                        imageItems.findIndex((im) => im.caption === g.caption)
                      ),
                    onKeyDown: (e: React.KeyboardEvent) => {
                      if (e.key === "Enter")
                        openLightbox(
                          imageItems.findIndex(
                            (im) => im.caption === g.caption
                          )
                        );
                    },
                  };
              return (
                <div
                  key={g.caption}
                  className={`gallery-item${g.big ? " big" : ""}${
                    g.video ? " video-item" : ""
                  }`}
                  {...roleProps}
                >
                  <img src={g.img} alt={g.alt} loading="lazy" />
                  <div className="overlay">
                    <span>{g.caption}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div
        className={`lightbox${showImage ? " active" : ""}`}
        id="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Visionneuse d'image"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox();
        }}
      >
        <button className="lightbox-close" onClick={closeLightbox} aria-label="Fermer la visionneuse">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <button className="lightbox-nav lightbox-prev" onClick={() => step(-1)} aria-label="Image précédente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        {current && (
          <img
            id="lightboxImg"
            src={current.full}
            alt={current.caption}
          />
        )}
        <button className="lightbox-nav lightbox-next" onClick={() => step(1)} aria-label="Image suivante">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </>
  );
}
