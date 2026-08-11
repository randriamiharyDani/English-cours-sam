"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "Mr Sam English Academy",
    siteDescription: "Cours d'anglais parlé pour tous niveaux",
    teacherName: "Mr Sam",
    teacherBio: "Professeur d'anglais passionné avec 12 ans d'expérience",
    email: "contact@mrsam-english.com",
    phone: "+261 34 00 000 00",
    address: "Analakely, Antananarivo",
    facebook: "https://facebook.com/mrsamenglish",
    instagram: "https://instagram.com/mrsamenglish",
    youtube: "https://youtube.com/@mrsamenglish",
    linkedin: "https://linkedin.com/company/mrsamenglish",
  });

  const handleChange = (field: string, value: string) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Paramètres sauvegardés avec succès !");
  };

  return (
    <div className="admin-content">
      <div className="page-header">
        <h1 className="page-title">Paramètres</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="content-card">
          <h3 className="card-title" style={{ marginBottom: "20px" }}>Informations générales</h3>
          <div className="form-group">
            <label>Nom du site</label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => handleChange("siteName", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={settings.siteDescription}
              onChange={(e) => handleChange("siteDescription", e.target.value)}
              rows={3}
            />
          </div>
          <div className="form-group">
            <label>Nom du professeur</label>
            <input
              type="text"
              value={settings.teacherName}
              onChange={(e) => handleChange("teacherName", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Bio du professeur</label>
            <textarea
              value={settings.teacherBio}
              onChange={(e) => handleChange("teacherBio", e.target.value)}
              rows={3}
            />
          </div>
        </div>

        <div className="content-card">
          <h3 className="card-title" style={{ marginBottom: "20px" }}>Coordonnées</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Téléphone</label>
            <input
              type="text"
              value={settings.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Adresse</label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>
        </div>

        <div className="content-card">
          <h3 className="card-title" style={{ marginBottom: "20px" }}>Réseaux sociaux</h3>
          <div className="form-group">
            <label>Facebook</label>
            <input
              type="text"
              value={settings.facebook}
              onChange={(e) => handleChange("facebook", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Instagram</label>
            <input
              type="text"
              value={settings.instagram}
              onChange={(e) => handleChange("instagram", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>YouTube</label>
            <input
              type="text"
              value={settings.youtube}
              onChange={(e) => handleChange("youtube", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>LinkedIn</label>
            <input
              type="text"
              value={settings.linkedin}
              onChange={(e) => handleChange("linkedin", e.target.value)}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Sauvegarder les modifications
          </button>
        </div>
      </form>
    </div>
  );
}
