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
    const duration = 1000; // make it slower here
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
      {["#1e3c72", "#ff6f61", "#34a853", "#fbbc05"].map((color, i) => (
        <section
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className="section"
          style={{ backgroundColor: color }}
        >
          <h1>Page {i + 1}</h1>
        </section>
      ))}
    </div>
  );
}
