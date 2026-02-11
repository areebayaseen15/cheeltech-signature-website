'use client';
import { useRef, useEffect } from 'react';
import { fadeAnimation, scrollMovingText, gsapBackgroundAnim, panelPinAnimation, textInvertAnim3 } from '@/hooks/useGsapAnimation';
import { useParallax } from '@/components/shared/Parallax/useParallax';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useScrollSmooth from '@/hooks/useScrollSmooth';

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
    const aboutRef = useRef<HTMLDivElement>(null);

    // Cursor, Scroll, Parallax
    useCursorAndBackground({ bgColor: "#08041D" });
    useScrollSmooth();
    useParallax();

    // GSAP Animations - client-side only
    useEffect(() => {
        fadeAnimation();
        panelPinAnimation();
        scrollMovingText();
        gsapBackgroundAnim();

        // textInvertAnim3 using ref
        if (aboutRef.current) {
            textInvertAnim3(aboutRef.current);
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
                        <section id="hero" >
                            <MobileApplicationHero />
                        </section>

                        <section id="brand" className='pt-50'>
                            <MobileApplicationBrand />
                        </section>

                        <section id="about" ref={aboutRef} className='pt-0'>
                            <DesignStudioAbout />
                        </section>

                        <section id="features" className='pt-80'>
                            <MobileApplicationFeature />
                        </section>

                        <section id="steps" className='pt-160'>
                            <ITSolutionStep />
                        </section>

                        <section id="template" className='pt-100'>
                            <PortfolioSlider />
                        </section>

                        {/* <section id="price">
                            <MobileApplicationPrice />
                        </section> */}

                        {/* <section id="testimonial">
                            <MobileApplicationTestimonial />
                        </section> */}

                        <section id="faq" className='pt-140'>
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
