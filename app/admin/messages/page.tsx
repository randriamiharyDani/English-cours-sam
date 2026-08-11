"use client";

import { useEffect, useState } from "react";
import { api, Message } from "@/services/api";

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    setLoading(true);
    const data = await api.getMessages();
    setMessages(data);
    setLoading(false);
  };

  const handleRead = async (id: number) => {
    await api.markMessageAsRead(id);
    loadMessages();
  };

  return (
    <div className="admin-content">
      <div className="page-header">
        <h1 className="page-title">Messages</h1>
        <span className="badge unread">{messages.filter(m => m.status === "unread").length} non lus</span>
      </div>

      <div className="content-card">
        {loading ? (
          <div className="loading-state">Chargement...</div>
        ) : messages.length === 0 ? (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3>Aucun message</h3>
            <p>Les messages des visiteurs apparaîtront ici</p>
          </div>
        ) : (
          <div className="messages-list">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message-item${message.status === "unread" ? " unread" : ""}`}
                onClick={() => {
                  setSelectedMessage(message);
                  if (message.status === "unread") handleRead(message.id);
                }}
              >
                <div className="message-avatar">
                  {message.name.charAt(0).toUpperCase()}
                </div>
                <div className="message-content">
                  <div className="message-header">
                    <strong>{message.name}</strong>
                    <span className="message-time">{message.createdAt}</span>
                  </div>
                  <p className="message-subject">{message.subject}</p>
                  <p className="message-preview">{message.message.substring(0, 100)}...</p>
                </div>
                {message.status === "unread" && <span className="message-badge"></span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
