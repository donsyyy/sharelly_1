import React from 'react';
import './LandingPage.css'; // You'll need to create this CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">BrandName</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Discover the best solution for your needs</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Feature One</h3>
            <p>Description of the first amazing feature.</p>
          </div>
          <div className="feature-card">
            <h3>Feature Two</h3>
            <p>Description of the second great feature.</p>
          </div>
          <div className="feature-card">
            <h3>Feature Three</h3>
            <p>Description of the third outstanding feature.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to get started?</h2>
        <button className="cta-button">Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 BrandName. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
