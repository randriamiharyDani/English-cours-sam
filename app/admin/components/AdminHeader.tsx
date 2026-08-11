"use client";

import { useState } from "react";

export default function AdminHeader() {
  const [notifications] = useState([
    { id: 1, text: "Nouveau message de Lucas M.", time: "2 min", read: false },
    { id: 2, text: "Nouvelle inscription au cours", time: "1h", read: false },
    { id: 3, text: "Article publié avec succès", time: "3h", read: true },
  ]);

  return (
    <header className="admin-header">
      <div className="header-left">
        <h1 className="page-title">Dashboard</h1>
      </div>

      <div className="header-right">
        <div className="header-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input type="text" placeholder="Rechercher..." />
        </div>

        <div className="header-notifications">
          <button className="notification-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {notifications.filter(n => !n.read).length > 0 && (
              <span className="notification-badge">{notifications.filter(n => !n.read).length}</span>
            )}
          </button>
        </div>

        <div className="header-profile">
          <img src="https://i.pravatar.cc/150?img=11" alt="Admin" className="profile-avatar" />
          <div className="profile-info">
            <strong>Mr Sam</strong>
            <span>Administrateur</span>
          </div>
        </div>
      </div>
    </header>
  );
}
