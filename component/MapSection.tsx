export default function MapSection() {
  return (
    <section className="map-section">
      <div className="map-wrap">
        <div className="map-column map-col-map">
          <div className="map-card">
            <h3>Notre académie</h3>
            <p>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Analakely, Antananarivo, Madagascar
            </p>
            <p>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              Lun–Sam, 8h–18h
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps?q=Antananarivo,Madagascar&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation de Mr Sam English Academy sur Google Maps"
            aria-label="Carte Google Maps de l'académie"
          ></iframe>
        </div>
        <div className="map-column map-col-facebook">
          <div className="facebook-card">
            <div className="facebook-card-header">
              <svg
                className="facebook-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.2-1.5 1.6-1.5H17V3.6C16.6 3.5 15.5 3.4 14.2 3.4c-2.7 0-4.5 1.6-4.5 4.6v2H7v3.1h2.7V21h3.8z" />
              </svg>
              <div>
                <h3>Mr Sam English Academy</h3>
                <p>@mrsamenglish</p>
              </div>
            </div>
            <p className="facebook-card-text">
              Cours d&apos;anglais parlé pour tous niveaux. Méthode centrée
              sur la pratique, la confiance et les résultats concrets.
            </p>
            <div className="facebook-links">
              <a
                className="facebook-btn"
                href="https://www.facebook.com/sam.son.394575/reels/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir les Reels
              </a>
              <a
                className="facebook-btn facebook-btn-secondary"
                href="https://www.facebook.com/sam.son.394575"
                target="_blank"
                rel="noopener noreferrer"
              >
                Page Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
