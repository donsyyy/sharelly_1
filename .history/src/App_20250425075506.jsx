import React, { useRef } from "react";
import "./LandingPage.css";

export default function App() {
  const sectionRef = useRef(null);

  const smoothScroll = () => {
    const target = sectionRef.current;
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // in ms
    let start = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3); // Deceleration easing

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      const eased = easeOutCubic(percent);
      window.scrollTo(0, startPosition + distance * eased);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div>
      <section className="hero">
        <h1>Welcome to My Landing Page</h1>
        <button onClick={smoothScroll}>Scroll Down</button>
      </section>

      <section ref={sectionRef} className="content">
        <h2>More Content</h2>
        <p>This is the section we scroll to.</p>
      </section>
    </div>
  );
}
