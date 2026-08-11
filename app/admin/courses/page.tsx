"use client";
import { useEffect, useState } from "react";
import { api, Course } from "@/services/api";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    api.getCourses().then(data => {
      setCourses(data);
      setLoading(false);
    });
  }, []);

  const handleEdit = (course: Course) => {
    setEditingCourse(course);
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Supprimer ?")) {
      await api.deleteCourse(id);
      api.getCourses().then(data => setCourses(data));
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesFilter = filter === "all" || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " Ar";
  };

  return (
    <div className="admin-content">
      <div className="page-header">
        <h1 className="page-title">Cours</h1>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Ajouter un cours
        </button>
      </div>

      <div className="content-card">
        <div className="filters">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-select">
            <option value="all">Toutes</option>
            <option value="conversation">Conversation</option>
            <option value="business">Business</option>
            <option value="exam">Examens</option>
            <option value="kids">Enfants</option>
          </select>
        </div>
      </div>

      <div className="content-card">
        {loading ? (
          <div className="loading-state">Chargement...</div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Catégorie</th>
                <th>Niveau</th>
                <th>Prix</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course) => (
                <tr key={course.id}>
                  <td><strong>{course.title}</strong></td>
                  <td>{course.categoryLabel}</td>
                  <td>{course.level}</td>
                  <td>{formatPrice(course.price)}</td>
                  <td>
                    <span className={`badge ${course.status}`}>
                      {course.status === "published" ? "Publié" : "Brouillon"}
                    </span>
                  </td>
                  <td>
                    <div className="actions">
                      <button className="btn-icon" onClick={() => handleEdit(course)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="btn-icon delete" onClick={() => handleDelete(course.id)}>
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

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingCourse ? "Modifier" : "Nouveau cours"}</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <p style={{ color: "var(--gray)" }}>Formulaire de création/modification à implémenter</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
