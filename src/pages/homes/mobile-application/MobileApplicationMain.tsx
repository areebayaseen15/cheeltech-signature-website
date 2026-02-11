'use client';
import { fadeAnimation, scrollMovingText, gsapBackgroundAnim, panelPinAnimation, textInvertAnim3 } from '@/hooks/useGsapAnimation';
import { useParallax } from '@/components/shared/Parallax/useParallax';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

// Components
import MobileApplicationTestimonial from '@/components/testimonial/MobileApplicationTestimonial';
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
    useCursorAndBackground({ bgColor: "#08041D" });
    useScrollSmooth();
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

            <BackToTop />
            <MobileApplicationHeader />

            <div id="smooth-wrapper" style={{ backgroundColor: "#F7F7FD" }}>
                <div id="smooth-content">
                    <main>
                        <section id="hero">
                            <MobileApplicationHero />
                        </section>

                        <section id="brand">
                            <MobileApplicationBrand />
                        </section>

                        <section id="about">
                            <DesignStudioAbout />
                        </section>

                        <section id="features">
                            <MobileApplicationFeature />
                        </section>

                        <section id="steps">
                            <ITSolutionStep />
                        </section>

                        <section id="template">
                            <PortfolioSlider />
                        </section>

                        {/* <section id="price">
                            <MobileApplicationPrice />
                        </section> */}

                        {/* <section id="testimonial">
                            <MobileApplicationTestimonial />
                        </section> */}

                        <section id="faq">
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
