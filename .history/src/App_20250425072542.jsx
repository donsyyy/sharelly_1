import React, { useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">BrandName</div>
        <ul className="nav-links">
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero animate fade-in">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Discover the best solution for your needs</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="animate slide-up">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card animate slide-up" style={{ transitionDelay: '0.1s' }}>
            <h3>Feature One</h3>
            <p>Description of the first amazing feature.</p>
          </div>
          <div className="feature-card animate slide-up" style={{ transitionDelay: '0.2s' }}>
            <h3>Feature Two</h3>
            <p>Description of the second great feature.</p>
          </div>
          <div className="feature-card animate slide-up" style={{ transitionDelay: '0.3s' }}>
            <h3>Feature Three</h3>
            <p>Description of the third outstanding feature.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section animate scale-in">
        <h2>Ready to get started?</h2>
        <button className="cta-button">Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer className="footer animate fade-in">
        <p>© {new Date().getFullYear()} BrandName. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
