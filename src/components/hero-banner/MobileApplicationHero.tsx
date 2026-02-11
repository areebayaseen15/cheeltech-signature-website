
import heroBottomBgTwo from '../../../public/assets/img/home-10/hero/app-hero-bg.png';
import shape from '../../../public/assets/img/home-10/hero/hero-round-shape.png';
import Image from 'next/image';
import Link from 'next/link';

const MobileApplicationHero = () => {

    return (
        <div className="app-hero-area app-hero-ptb p-relative include-bg z-index-1" style={{ backgroundImage: `url(${heroBottomBgTwo.src})` }}>
            <div className="container container-1430">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="app-hero-wrap z-index-2 pb-65 pl-55">
                            <div className="app-hero-heading mb-40">
                                <span className="tp-section-subtitle border-bg tp_fade_anim" data-delay=".3">Expert-Crafted HTML Templates</span>
                                <h4 className="tp-section-title-phudu tp_fade_anim" data-delay=".5">Professional Branding.

                                    <br /> Zero Effort.
                                </h4>
                            </div>
                            <div className="app-hero-btn-box d-flex align-item-center">
                                <div className="app-hero-btn mr-35 width-full tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                                    <div className="animated-border-box border-icon">
                                        <Link className="tp-btn-gradient p-relative" href="#template">
                                         
                                            View 2026 Templates
                                        </Link>
                                    </div>
                                </div>
                                <div className="app-hero-btn-text tp_text_anim">
                                    <p>
                                     
                                        Ditch blurry images for interactive
                                      HTML signatures. Perfect on every 
                                     device. Start for free today.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="app-hero-round-shape">
                            <Image src={shape} alt="shape" />
                        </div>
                    </div>
                </div>
           
            </div>
        </div>
    );
};

export default MobileApplicationHero;