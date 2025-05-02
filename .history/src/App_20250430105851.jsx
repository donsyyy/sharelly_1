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
            <div className="page1">

              <div className="header1">
                <img className="logo-topleft" src="/Logo_Sharely.png" alt="Sharely Logo"/>
                <div className="right-buttons">
                  <div className="button" id="sign-in">SIGN IN</div>
                  <div className="button" id="sign-up">SIGN UP</div>
                </div>
              </div>

              <div class="intro">
                <div class="intro-left">
                  <div class="intro-text">
                    <span class="welcome">Welcome to </span><br/>
                    <span class="highlight">SHARELY</span><br/>
                    <span class="sharing">Share Files Faster, Smarter, and Securely!</span>
                  </div>
                  <div class="intro-buttons">
                    <div class="buttons">Get Started</div>
                    <div class="buttons">Learn More</div>
                  </div>
                </div>
                <div class="intro-logo">
                  <img src="/logo.png" alt="Brand Logo" />
                </div>
              </div>

            </div>
          ),
        },
        {
          color: "#60aed4",
          content: (
            <div className="page2">
              <div className="header2">
                <h2 id="whychoose">Why choose us</h2>
                <p id="weoffer">
                  We offers fast, secure, and hassle-free file sharing. With top-tier encryption and cross-platform access,
                  we make sharing files simple and safe for everyone.
                </p><br/>
              </div>
              <div className="icons2">
                <img src="/Rocket1.png" />
                <img src="/flash1.png" />
                <img src="/globe1.png" />
                <img src="/collabgrp1.png" />
                <p>Fast Transfers</p>
              </div>
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
