import React, { useRef } from "react";
import "./styles.css";

export default function App() {
  const section2Ref = useRef(null);

  const smoothScrollToSection = () => {
    const target = section2Ref.current;
    if (!target) return;

    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + startY;
    const distance = endY - startY;
    const duration = 1000;
    let startTime = null;

    // Deceleration easing function
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const scroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <div>
      <section className="section section1">
        <h1>Landing Page</h1>
        <button className="scroll-btn" onClick={smoothScrollToSection}>
          Scroll Down
        </button>
      </section>

      <section ref={section2Ref} className="section section2">
        <h2>Welcome to Section 2</h2>
        <p>This transition was smooth and decelerated ✨</p>
      </section>
    </div>
  );
}
