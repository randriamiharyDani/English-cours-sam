"use client";

import { useEffect, useState } from "react";
import { api, BlogPost } from "@/services/api";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    const data = await api.getPosts();
    setPosts(data);
    setLoading(false);
  };

  return (
    <div className="admin-content">
      <div className="page-header">
        <h1 className="page-title">Blog</h1>
        <button className="btn btn-primary">Nouvel article</button>
      </div>

      <div className="content-card">
        {loading ? (
          <div className="loading-state">Chargement...</div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Titre</th>
                <th>Catégorie</th>
                <th>Auteur</th>
                <th>Vues</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <img src={post.image} alt={post.title} className="course-thumb" />
                  </td>
                  <td>
                    <strong>{post.title}</strong>
                    <p style={{ fontSize: "13px", color: "var(--gray)", margin: 0 }}>{post.excerpt}</p>
                  </td>
                  <td>{post.category}</td>
                  <td>{post.author}</td>
                  <td>{post.views}</td>
                  <td>
                    <span className={`badge ${post.status}`}>
                      {post.status === "published" ? "Publié" : "Brouillon"}
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
