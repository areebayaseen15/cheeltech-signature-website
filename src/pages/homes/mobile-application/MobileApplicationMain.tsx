"use client"
import { fadeAnimation,scrollMovingText, gsapBackgroundAnim, panelPinAnimation,textInvertAnim3 } from '@/hooks/useGsapAnimation';
import { useParallax } from '@/components/shared/Parallax/useParallax';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';


// Components
import MobileApplicationTestimonial from '@/components/testimonial/MobileApplicationTestimonial';
import MobileApplicationBenefit from '@/components/benefits/MobileApplicationBenefit';
import MobileApplicationFeature from '@/components/features/MobileApplicationFeature';
import MobileApplicationPrice from '@/components/price-area/MobileApplicationPrice';
import MobileApplicationHero from '@/components/hero-banner/MobileApplicationHero';
import MobileApplicationFooter from '@/layouts/footers/MobileApplicationFooter';
import MobileApplicationHeader from '@/layouts/headers/MobileApplicationHeader';
import MobileApplicationBrand from '@/components/brand/MobileApplicationBrand';
import MobileApplicationFaq from '@/components/faq/MobileApplicationFaq';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import PortfolioSlider from '@/components/portfolio/PortfolioSlider';
import DesignStudioAbout from '@/components/about/DesignStudioAbout';
import ITSolutionStep from '@/components/step/ITSolutio0nStep2';

const MobileApplicationMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#08041D" });

    // Enable smooth scroll animations
    useScrollSmooth();

    // Initialize effects and animations
    useParallax();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            panelPinAnimation();
            scrollMovingText();
            gsapBackgroundAnim();
            textInvertAnim3();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <MobileApplicationHeader />

            <div id="smooth-wrapper" style={{ backgroundColor: "#F7F7FD" }}>
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <MobileApplicationHero />
                        <MobileApplicationBrand />
                        <DesignStudioAbout/>
                        <MobileApplicationFeature />
                        <ITSolutionStep/>
                        <PortfolioSlider/>
                        {/* <MobileApplicationBenefit /> */}
                        <MobileApplicationPrice />
                        <MobileApplicationTestimonial />
                        <MobileApplicationFaq />
                    </main>
                    <MobileApplicationFooter />
                </div>
            </div>
        </>
    );
};

export default MobileApplicationMain;