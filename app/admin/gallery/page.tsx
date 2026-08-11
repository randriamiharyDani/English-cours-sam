"use client";

import { useEffect, useState } from "react";
import { api, Photo } from "@/services/api";

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState("all");

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    setLoading(true);
    const data = await api.getPhotos();
    setPhotos(data);
    setLoading(false);
  };

  const albums = ["all", ...Array.from(new Set(photos.map(p => p.album)))];
  const filteredPhotos = selectedAlbum === "all" ? photos : photos.filter(p => p.album === selectedAlbum);

  return (
    <div className="admin-content">
      <div className="page-header">
        <h1 className="page-title">Galerie</h1>
        <button className="btn btn-primary">Ajouter une photo</button>
      </div>

      <div className="content-card">
        <div className="filters" style={{ marginBottom: "20px" }}>
          <select value={selectedAlbum} onChange={(e) => setSelectedAlbum(e.target.value)} className="filter-select">
            {albums.map(album => (
              <option key={album} value={album}>
                {album === "all" ? "Tous les albums" : album}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="loading-state">Chargement...</div>
        ) : (
          <div className="gallery-grid">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="gallery-item">
                <img src={photo.thumbnail} alt={photo.alt} />
                <div className="gallery-item-overlay">
                  <p><strong>{photo.alt}</strong></p>
                  <p style={{ fontSize: "12px", opacity: 0.8 }}>{photo.album}</p>
                  <div className="actions" style={{ marginTop: "8px" }}>
                    <button className="btn-icon" title="Modifier">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="btn-icon delete" title="Supprimer">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        .gallery-item {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 1;
          cursor: pointer;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        .gallery-item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: #fff;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .gallery-item-overlay {
          opacity: 1;
        }
        .gallery-item-overlay p {
          margin: 0;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
