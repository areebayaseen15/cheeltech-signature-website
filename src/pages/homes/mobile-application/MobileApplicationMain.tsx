'use client';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import { fadeAnimation, scrollMovingText, gsapBackgroundAnim, panelPinAnimation, textInvertAnim3 } from '@/hooks/useGsapAnimation';

import { useParallax } from '@/components/shared/Parallax/useParallax';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useScrollSmooth from '@/hooks/useScrollSmooth';

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

  // Global effects
  useCursorAndBackground({ bgColor: "#08041D" });
  useScrollSmooth();
  useParallax();

  // -----------------------------------
  // INITIAL LOAD ANIMATIONS
  // -----------------------------------
  useEffect(() => {

    const initAnimations = () => {

      fadeAnimation();
      panelPinAnimation();
      scrollMovingText();
      gsapBackgroundAnim();
      textInvertAnim3();

      ScrollTrigger.refresh();
    };

    // Delay for smooth scroll wrapper
    setTimeout(initAnimations, 500);

  }, []);

  // -----------------------------------
  // 🔥 HASH / ID NAVIGATION FIX
  // -----------------------------------
// 🔥 HASH + DIRECT ID LOAD + NAV CLICK FIX
useEffect(() => {

  const reInitAnimations = () => {

    // Kill old triggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Re-run all animations
    fadeAnimation();
    panelPinAnimation();
    scrollMovingText();
    gsapBackgroundAnim();
    textInvertAnim3();

    // Force refresh positions
    ScrollTrigger.refresh(true);
  };

  // 1️⃣ Navbar hash click
  const handleHashChange = () => {
    setTimeout(reInitAnimations, 800);
  };

  window.addEventListener("hashchange", handleHashChange);

  // 2️⃣ Direct page load with ID
  if (window.location.hash) {
    setTimeout(reInitAnimations, 800);
  }

  return () => {
    window.removeEventListener("hashchange", handleHashChange);
  };

}, []);
useEffect(() => {
  // Delay 1 frame for React render + smooth scroll
  const el = document.querySelector(".tp_text_invert_3");
  if (el) {
    // Force SplitText animation to run after element is in DOM
    setTimeout(() => {
      textInvertAnim3();
      ScrollTrigger.refresh();
    }, 200);
  }
}, []);

  return (
    <>
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>

      <BackToTop />
      <MobileApplicationHeader />

      <div id="smooth-wrapper" style={{ backgroundColor: "#F7F7FD" }}>
        <div id="smooth-content">

          <main>

            <section id="hero">
              <MobileApplicationHero />
            </section>

            <section id="brand" className="pt-50">
              <MobileApplicationBrand />
            </section>

            <section id="about" className="pt-0">
              <DesignStudioAbout />
            </section>

            <section id="features" className="pt-80">
              <MobileApplicationFeature />
            </section>

            <section id="steps" className="pt-160">
              <ITSolutionStep />
            </section>

            <section id="template" className="pt-100">
              <PortfolioSlider />
            </section>

            <section id="faq" className="pt-140">
              <MobileApplicationFaq />
            </section>

          </main>

          <MobileApplicationFooter />

        </div>
      </div>
    </>
  );
};

export default MobileApplicationMain;
