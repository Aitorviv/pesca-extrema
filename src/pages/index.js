import React from "react"
import Layout from "../components/layout"
import seo from "../components/seo"

const Home = () => {
  return (
    <Layout>
      <Seo title="Pesca Extrema Mundial" description="Tucunaré Amazonas • Truchas Patagonia • GT Arabia Saudí" />

      {/* FONDO PERSONALIZADO */}
      <div style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: `url("/images/logo_pesca.jpg") center/cover no-repeat fixed`,
        opacity: 0.22,
        zIndex: -1,
        pointerEvents: "none"
      }} />

      <div style={{ textAlign: "center", margin: "5rem 0 7rem", position: "relative" }}>
        <img 
          src="/images/hero.jpg" 
          alt="Pesca Extrema" 
          style={{ 
            borderRadius: 32, 
            maxHeight: 620, 
            width: "96%", 
            maxWidth: 900,
            objectFit: "cover", 
            boxShadow: "0 50px 100px rgba(0,0,0,0.6)",
            border: "12px solid white",
            marginBottom: "2rem"
          }} 
        />
        
        <h1 style={{ 
          fontSize: "6rem", 
          margin: "2.5rem 0 1rem", 
          background: "linear-gradient(90deg, #3182ce, #63b3ed, #9f7aea, #ec4899)", 
          WebkitBackgroundClip: "text", 
          WebkitTextFillColor: "transparent",
          textShadow: "0 6px 30px rgba(0,0,0,0.4)",
          fontWeight: 900,
          letterSpacing: "-2px"
        }}>
          PESCA EXTREMA
        </h1>
        
        <p style={{ 
		  fontSize: "2.2rem", 
          marginBottom: "4.5rem", 
          color: "white", 
          fontWeight: "bold",
          textShadow: "0 0 20px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.9)"
        }}>
        Amazonas • Patagonia • Arabia Saudí
        </p>
        
        <a 
          href="/blog" 
          style={{
            display: "inline-block",
            background: "linear-gradient(45deg, #3182ce, #ec4899)",
            color: "white",
            padding: "1.8rem 5rem",
            borderRadius: 80,
            fontSize: "2rem",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 25px 50px rgba(236, 72, 153, 0.5)",
            border: "6px solid white",
            transition: "all 0.4s ease"
          }}
          onMouseOver={e => e.currentTarget.style.transform = "translateY(-8px)"}
          onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
        >
          IR AL BLOG
        </a>
      </div>
    </Layout>
  )
}

export default Home