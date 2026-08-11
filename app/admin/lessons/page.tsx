"use client";

import { useEffect, useState } from "react";
import { api, Lesson } from "@/services/api";

export default function LessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLessons();
  }, []);

  const loadLessons = async () => {
    setLoading(true);
    const data = await api.getLessons();
    setLessons(data);
    setLoading(false);
  };

  return (
    <div className="admin-content">
      <div className="page-header">
        <h1 className="page-title">Leçons</h1>
        <button className="btn btn-primary">Ajouter une leçon</button>
      </div>

      <div className="content-card">
        {loading ? (
          <div className="loading-state">Chargement...</div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Cours</th>
                <th>Durée</th>
                <th>Ordre</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson) => (
                <tr key={lesson.id}>
                  <td><strong>{lesson.title}</strong></td>
                  <td>{lesson.courseTitle}</td>
                  <td>{lesson.duration}</td>
                  <td>{lesson.order}</td>
                  <td>
                    <span className={`badge ${lesson.status}`}>
                      {lesson.status === "published" ? "Publié" : "Brouillon"}
                    </span>
                  </td>
                  <td>
                    <div className="actions">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
