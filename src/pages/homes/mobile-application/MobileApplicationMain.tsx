'use client';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import {
  fadeAnimation,
  scrollMovingText,
  gsapBackgroundAnim,
  panelPinAnimation,
  textInvertAnim3,
  splitTextAnimation,
} from '@/hooks/useGsapAnimation';

// Components
import MobileApplicationHero from '@/components/hero-banner/MobileApplicationHero';
import MobileApplicationFooter from '@/layouts/footers/MobileApplicationFooter';
import MobileApplicationHeader from '@/layouts/headers/MobileApplicationHeader';
import MobileApplicationBrand from '@/components/brand/MobileApplicationBrand';
import MobileApplicationFeature from '@/components/features/MobileApplicationFeature';
import MobileApplicationFaq from '@/components/faq/MobileApplicationFaq';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import PortfolioSlider from '@/components/portfolio/PortfolioSlider';
import DesignStudioAbout from '@/components/about/DesignStudioAbout';
import ITSolutionStep from '@/components/step/ITSolutio0nStep2';

gsap.registerPlugin(ScrollTrigger);

const MobileApplicationMain = () => {

  // -----------------------------
  // 🔹 Function to init all animations
  // -----------------------------
  const initAnimations = () => {
    fadeAnimation();
    panelPinAnimation();
      splitTextAnimation();
    scrollMovingText();
    gsapBackgroundAnim();
    textInvertAnim3();
    ScrollTrigger.refresh();
  };

  // -----------------------------
  // 🔹 Initial load + smooth scroll + scroll-trigger setup
  // -----------------------------
  useEffect(() => {
    const smoothWrapper = document.querySelector('#smooth-wrapper') as HTMLElement | null;
    if (!smoothWrapper) return;

    // -----------------------------
    // 🔹 ScrollTrigger proxy for smooth scroll
    // -----------------------------
    ScrollTrigger.scrollerProxy(smoothWrapper, {
      scrollTop(value?: number) {
        if (value !== undefined) smoothWrapper.scrollTop = value;
        return smoothWrapper.scrollTop;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    // -----------------------------
    // 🔹 Initial animations on load
    // -----------------------------
    setTimeout(initAnimations, 500);

    // -----------------------------
    // 🔹 Scroll-triggered animations
    // -----------------------------
    const handleScroll = () => {
      scrollMovingText();
      gsapBackgroundAnim();
      ScrollTrigger.update();
    };

    smoothWrapper.addEventListener('scroll', handleScroll);

    return () => {
      smoothWrapper.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []);

  // -----------------------------
  // 🔹 Hash / ID navigation fix
  // -----------------------------
  useEffect(() => {
    const reInitAnimations = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      initAnimations();
    };

    const handleHashChange = () => setTimeout(reInitAnimations, 800);

    window.addEventListener('hashchange', handleHashChange);

    if (window.location.hash) {
      setTimeout(reInitAnimations, 800);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);

  }, []);

  return (
    <>
      <div id="magic-cursor"><div id="ball"></div></div>
      <BackToTop />
      <MobileApplicationHeader />

      <div
        id="smooth-wrapper"
        style={{
          backgroundColor: '#F7F7FD',
          overflowY: 'auto',
          height: '100vh',
          scrollBehavior: 'smooth', // optional, makes scroll jumps smooth
        }}
      >
        <div id="smooth-content">
          <main>
            <section id="hero"><MobileApplicationHero /></section>
            <section id="brand" className="pt-50"><MobileApplicationBrand /></section>
            <section id="about" className="pt-0"><DesignStudioAbout /></section>
            <section id="features" className="pt-80"><MobileApplicationFeature /></section>
            <section id="steps" className="pt-160"><ITSolutionStep /></section>
            <section id="template" className="pt-100"><PortfolioSlider /></section>
            <section id="faq" className="pt-140"><MobileApplicationFaq /></section>
          </main>

          <MobileApplicationFooter />
        </div>
      </div>
    </>
  );
};

export default MobileApplicationMain;
