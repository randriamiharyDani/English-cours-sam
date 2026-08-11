"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`page-loader${hidden ? " hide" : ""}`}
      id="pageLoader"
      aria-hidden="true"
    >
      <div className="waveform">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
