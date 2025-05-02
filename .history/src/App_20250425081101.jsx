import React, { useRef, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const sectionsRef = useRef([]);
  const isScrollingRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (!sectionsRef.current[index]) return;

    const target = sectionsRef.current[index].offsetTop;
    const start = window.scrollY;
    const distance = target - start;
    const duration = 1200; // Slower scroll duration
    let startTime = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      window.scrollTo(0, start + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        isScrollingRef.current = false;
        setCurrentIndex(index);
      }
    };

    requestAnimationFrame(step);
  };

  const handleWheel = (e) => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;

    if (e.deltaY > 0 && currentIndex < sectionsRef.current.length - 1) {
      scrollToIndex(currentIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    } else {
      isScrollingRef.current = false;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex]);

  return (
    <div>
      {[
        {
          color: "#0f172a",
          content: (
            <div className="hero">
              <img className="logo" src="https://dummyimage.com/100x100/fff/0f172a.png&text=N" alt="NovaFlow Logo" />
              <h1>NovaFlow</h1>
              <p>Elevate your digital experience.</p>
            </div>
          ),
        },
        {
          color: "#1e3a8a",
          content: (
            <div>
              <h2>What We Do</h2>
              <p>
                NovaFlow crafts seamless, high-performance websites and apps tailored for speed, design, and modern UX.
              </p>
            </div>
          ),
        },
        {
          color: "#047857",
          content: (
            <div>
              <h2>Our Products</h2>
              <ul>
                <li>FlowUI – Design system for developers</li>
                <li>NovaX – Ultra-fast static site engine</li>
                <li>DashCore – Analytics made simple</li>
              </ul>
            </div>
          ),
        },
        {
          color: "#f59e0b",
          content: (
            <div className="contact">
              <h2>Contact Us</h2>
              <p>Get in touch at <strong>hello@novaflow.dev</strong></p>
              <p>Follow us @NovaFlow on socials</p>
            </div>
          ),
        },
      ].map((section, i) => (
        <section
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className="section"
          style={{ backgroundColor: section.color }}
        >
          {section.content}
        </section>
      ))}
    </div>
  );
}
