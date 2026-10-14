"use client";
import { useEffect } from "react";

export default function Root() {
  useEffect(() => {
    const l = (navigator.language || "tr").toLowerCase().startsWith("tr") ? "tr" : "en";
    window.location.replace("/" + l);
  }, []);
  return (
    <noscript>
      <meta httpEquiv="refresh" content="0; url=/tr" />
    </noscript>
  );
}
