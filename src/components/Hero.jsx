import React, { useState, useEffect } from 'react';
import UiBtn from './UiBtn';
import useParallax from '../hooks/useParallax';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import portraitImage from '../assets/images/Sreejith_A_S.png';

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const parallaxRef = useParallax(prefersReducedMotion ? 0 : 0.5);

  const roles = ["Full Stack Developer", "Front-End Developer", "Back-End Developer", "Python Developer", "Software Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const role = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(prev => role.substring(0, prev.length + 1));
        if (displayedText === role) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(prev => role.substring(0, prev.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, prefersReducedMotion]);

  return (
    <section id="home" className="min-h-screen bg-primary flex items-center">
      <div className="container mx-auto px-4 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-2xl font-bold text-light">Hi there, Sreejith here,</p>
            <h1 className="text-5xl md:text-7xl font-bold text-light mb-4">
              <span className="block" style={{ textShadow: '2px 2px 0 #948979' }}>I'm a {displayedText}<span className="animate-pulse">|</span></span>
            </h1>
            <p className="text-xl text-light mb-6">Crafting digital experiences with passion and precision</p>
            <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects"><UiBtn>View My Work</UiBtn></a>
              <a href="/assets/resume/Sreejith-A-S-Full-Stack-Developer-Resume.pdf" target="_blank" rel="noopener noreferrer"><UiBtn className="ui-btn--ghost">Download Résumé</UiBtn></a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="card-offset p-8 hover:scale-105 transition-transform" ref={parallaxRef}>
              <img
                src={portraitImage}
                alt="Sreejith Portrait"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
