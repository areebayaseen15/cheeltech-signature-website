'use client';
import { useEffect, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import {
  fadeAnimation,
  scrollMovingText,
  gsapBackgroundAnim,
  panelPinAnimation,
  textInvertAnim3
} from '@/hooks/useGsapAnimation';

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

  // --------------------------
  // Global effects
  // --------------------------
  useCursorAndBackground({ bgColor: "#08041D" });
  useScrollSmooth();
  useParallax();

  // --------------------------
  // SCROLLER PROXY (Smooth Scroll Sync)
  // --------------------------
  useLayoutEffect(() => {
    const wrapper = document.querySelector("#smooth-wrapper") as HTMLDivElement | null;
    if (!wrapper) return;

    ScrollTrigger.scrollerProxy(wrapper, {
      scrollTop(value?: number) {
        if (value !== undefined) wrapper.scrollTop = value;
        return wrapper.scrollTop;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    // Refresh ScrollTrigger after layout is ready
    ScrollTrigger.addEventListener("refreshInit", () => {
      wrapper.style.overflow = "hidden";
    });
    ScrollTrigger.refresh();
  }, []);

  // --------------------------
  // INITIAL LOAD ANIMATIONS
  // --------------------------
  useLayoutEffect(() => {
    const wrapper = document.querySelector("#smooth-wrapper") as HTMLDivElement | null;
    if (!wrapper) return;

    const initAnimations = () => {
      fadeAnimation();
      panelPinAnimation();
      scrollMovingText();
      gsapBackgroundAnim();
      textInvertAnim3();

      ScrollTrigger.refresh();
    };

    requestAnimationFrame(initAnimations);
  }, []);

  // --------------------------
  // HASH / ID NAVIGATION FIX
  // --------------------------
  useEffect(() => {

    const reInitAnimations = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      fadeAnimation();
      panelPinAnimation();
      scrollMovingText();
      gsapBackgroundAnim();
      textInvertAnim3();
      ScrollTrigger.refresh(true);
    };

    const handleHashChange = () => {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const wrapper = document.querySelector("#smooth-wrapper") as HTMLDivElement | null;
        if (wrapper) wrapper.scrollTop = el.offsetTop;

        setTimeout(() => reInitAnimations(), 500);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Direct load with hash
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const wrapper = document.querySelector("#smooth-wrapper") as HTMLDivElement | null;
          if (wrapper) wrapper.scrollTop = el.offsetTop;

          reInitAnimations();
        }, 500);
      }
    }

    return () => window.removeEventListener("hashchange", handleHashChange);

  }, []);

  // --------------------------
  // SPLIT TEXT ANIMATION TIMING FIX
  // --------------------------
  useLayoutEffect(() => {
    const el = document.querySelector(".tp_text_invert_3");
    if (el) {
      requestAnimationFrame(() => {
        textInvertAnim3();
        ScrollTrigger.refresh();
      });
    }
  }, []);

  return (
    <>
      <div id="magic-cursor"><div id="ball"></div></div>
      <BackToTop />
      <MobileApplicationHeader />

      <div id="smooth-wrapper" style={{ backgroundColor: "#F7F7FD", overflowY: "scroll", height: "100vh" }}>
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
