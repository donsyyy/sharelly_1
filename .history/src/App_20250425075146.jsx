import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import styles
import './LandingPage.css';

const LandingPage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Lower = more "braking" effect (try 0.05-0.15)
      multiplier: 0.7, // Speed reduction
      getDirection: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      }
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="scroll-container" ref={scrollRef}>
      <div data-scroll-container>
        {/* Your existing content */}
        <nav className="navbar">...</nav>
        <section className="hero">...</section>
        {/* Other sections... */}
      </div>
    </div>
  );
};

export default LandingPage;