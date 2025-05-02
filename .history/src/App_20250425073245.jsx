import React, { useEffect, useRef } from 'react';
import SmoothScrollbar from 'smooth-scrollbar';
import { Scrollbar } from 'smooth-scrollbar/scrollbar';
import './LandingPage.css';

const LandingPage = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollbar = SmoothScrollbar.init(scrollContainerRef.current, {
      damping: 0.07,  // Lower = more "braking" effect (try 0.05-0.1)
      thumbMinSize: 20,
    renderByPixels: true,
      alwaysShowTracks: false,
      continuousScrolling: false,
    });

    // Custom easing for anchor links
    scrollbar.addListener(({ offset }) => {
      document.documentElement.style.setProperty('--scroll-position', offset.y);
    });

    return () => scrollbar.destroy();
  }, []);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <div className="landing-page">
        {/* Your existing content (nav, hero, sections, footer) */}
        {/* ... */}
      </div>
    </div>
  );
};

export default LandingPage;
