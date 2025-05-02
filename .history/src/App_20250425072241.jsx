import React, { useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">
      {/* Navigation with smooth scroll */}
      <nav className="navbar">
        <div className="logo">BrandName</div>
        <ul className="nav-links">
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section with fade-in */}
      <section className="hero hidden fade-in">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Discover the best solution for your needs</p>
          <button className="cta-button pulse">Get Started</button>
        </div>
      </section>

      {/* Features Section with staggered animation */}
      <section id="features" className="features">
        <h2 className="hidden slide-up">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card hidden slide-up" style={{ transitionDelay: '0.1s' }}>
            <h3>Feature One</h3>
            <p>Description of the first amazing feature.</p>
          </div>
          <div className="feature-card hidden slide-up" style={{ transitionDelay: '0.2s' }}>
            <h3>Feature Two</h3>
            <p>Description of the second great feature.</p>
          </div>
          <div className="feature-card hidden slide-up" style={{ transitionDelay: '0.3s' }}>
            <h3>Feature Three</h3>
            <p>Description of the third outstanding feature.</p>
          </div>
        </div>
      </section>

      {/* CTA Section with scale animation */}
      <section className="cta-section hidden scale-in">
        <h2>Ready to get started?</h2>
        <button className="cta-button pulse">Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer className="footer hidden fade-in">
        <p>© 2023 BrandName. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;