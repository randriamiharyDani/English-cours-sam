"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type VideoContextValue = {
  openVideo: (youtubeId: string) => void;
};

const VideoContext = createContext<VideoContextValue>({ openVideo: () => {} });

export function VideoProvider({ children }: { children: ReactNode }) {
  const [videoId, setVideoId] = useState<string | null>(null);

  const openVideo = useCallback((id: string) => setVideoId(id), []);
  const closeVideo = useCallback(() => setVideoId(null), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeVideo]);

  return (
    <VideoContext.Provider value={{ openVideo }}>
      {children}
      <div
        className={`video-modal${videoId ? " active" : ""}`}
        id="videoModal"
        role="dialog"
        aria-modal="true"
        aria-label="Lecteur vidéo"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeVideo();
        }}
      >
        <div className="video-modal-inner">
          <button className="video-modal-close" onClick={closeVideo} aria-label="Fermer la vidéo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {videoId && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Présentation de la méthode Mr Sam"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </VideoContext.Provider>
  );
}

export function useVideo() {
  return useContext(VideoContext);
}
