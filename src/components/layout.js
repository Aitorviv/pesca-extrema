import React from "react"
import { Link } from "gatsby"
import Seo from "./seo"   // ← PERFECTO: minúscula + S mayúscula en el nombre

export default function Layout({ children }) {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: 900,
        padding: "2rem 1rem",
        fontFamily: "'Roboto', sans-serif",
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        transition: "all 0.4s ease",
      }}
    >
      <Seo />   {/* ← AHORA NETLIFY LO ENCUENTRA */}

      <style jsx global>{`
        :root {
          --bg: #fafafa;
          --text: #1a202c;
          --accent: #3182ce;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --bg: #1a202c;
            --text: #f7fafc;
            --accent: #63b3ed;
          }
        }
        body { margin: 0; background: var(--bg); }

        h1, h2, h3, h4, p, li, a, span, div {
          color: white !important;
          text-shadow: 0 0 20px rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.8) !important;
        }
        a { color: #63b3ed !important; }
        a:hover { color: #ec4899 !important; text-decoration: underline !important; }

        img, .gatsby-resp-image-wrapper {
          max-width: 800px !important;
          width: 100% !important;
          height: auto !important;
          margin: 3rem auto !important;
          display: block !important;
          border-radius: 32px !important;
          box-shadow: 0 50px 100px rgba(0,0,0,0.8) !important;
          border: 12px solid white !important;
        }

        iframe {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          max-width: 800px !important;
          width: 100% !important;
          margin: 3rem auto !important;
          display: block !important;
          border-radius: 32px !important;
          box-shadow: 0 50px 100px rgba(0,0,0,0.8) !important;
          border: 12px solid white !important;
        }
        iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>

      <header style={{ marginBottom: "4rem", textAlign: "center", padding: "2rem 0" }}>
        <h1 style={{ margin: 0, fontSize: "4.2rem", fontWeight: 900 }}>
          <Link to="/" style={{ color: "white", textDecoration: "none", textShadow: "0 0 30px black" }}>
            PESCA EXTREMA MUNDIAL
          </Link>
        </h1>
      </header>

      <main>{children}</main>

      <footer style={{ marginTop: "6rem", textAlign: "center", padding: "2rem", fontSize: "1rem", borderTop: "2px solid rgba(255,255,255,0.2)" }}>
        © 2025 — Pesca Extrema Mundial | Amazonas • Patagonia • Arabia Saudí
      </footer>
    </div>
  )
}