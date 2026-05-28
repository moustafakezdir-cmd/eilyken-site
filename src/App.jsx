import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">EILYKEN</h1>
            <p className="hero-subtitle">MIRAGE</p>
            <p className="hero-tagline">Cinematic Fashion Energy</p>
          </div>

          <div className="cta-buttons">
            <button className="btn btn-primary">EXPLORE COLLECTION</button>
            <button className="btn btn-secondary">DISCOVER NOW
            </button>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL</span>
          </div>
        </div>

        {/* Animated gradient background */}
        <div className="gradient-bg gradient-1"></div>
        <div className="gradient-bg gradient-2"></div>
        <div className="gradient-bg gradient-3"></div>
      </section>

      {/* Collection Section */}
      <section className="collection-section">
        <h2 className="section-title">FEATURED COLLECTION</h2>
        <div className="gallery-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="gallery-item">
              <div className="gallery-placeholder">
                <span>EILYKEN</span>
              </div>
              <h3>Collection {item}</h3>
              <p>Luxury Fashion Design</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">ABOUT EILYKEN</h2>
        <p className="about-text">
          Experience the essence of luxury fashion with our cinematic collection. 
          Each piece tells a story of elegance, innovation, and timeless beauty.
        </p>
        <button className="btn btn-primary">DISCOVER MORE</button>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#instagram">Instagram</a>
          <a href="#tiktok">TikTok</a>
          <a href="#twitter">Twitter</a>
        </div>
        <p>&copy; 2026 EILYKEN MIRAGE. All rights reserved.</p>
      </footer>
    </div>
  )
}
