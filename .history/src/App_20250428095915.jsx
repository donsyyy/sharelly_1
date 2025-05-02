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
    const duration = 1200;
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
          color: "#60aed4",
          content: (
            <div className="page">

              <div className="header">
                <img
                  className="logo"
                  src="https://dummyimage.com/100x100/000/fff&text=NF"
                  alt="Sharely Logo"/>
                <div id=signin>
                </>
              </div>

              <h1 className="brand">Sharely</h1>

            </div>
          ),
        },
        {
          color: "#60aed4",
          content: (
            <div className="section-content">
              <h2>Our Services</h2>
              <p>
                From branding to full-stack development, we create products that
                are fast, sleek, and user-friendly.
              </p>
            </div>
          ),
        },
        {
          color: "#60aed4",
          content: (
            <div className="section-content">
              <h2>Technologies</h2>
              <p>React, Node.js, Tailwind CSS, GraphQL, and more.</p>
            </div>
          ),
        },
        {
          color: "#60aed4",
          content: (
            <div className="section-content">
              <h2>Contact</h2>
              <p>Email us: contact@sharely.dev</p>
              <p>Follow us on socials: @sharely</p>
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
