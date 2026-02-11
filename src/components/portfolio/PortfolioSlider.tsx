import portfolioData from '@/data/portfolioData';
import { portfolioSliderElegantData } from '@/data/portfolioTwoData';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioSlider = () => {
    // Display portfolio items from index 47 to 53 (7 items)
    const displayPortfolioItems = portfolioData.slice(47, 54);

    return (
       <div id="smooth-wrapper">
                   <div id="smooth-content">
                       {/* Main Content Sections */}
                       <main>
                         <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="app-feature-heading text-center pt-40 mb-55">
                            <span className="tp-section-subtitle border-bg bg-color tp_fade_anim" data-delay=".3">
                              Premium Free Designs
                            </span>
                            <h3 className="tp-section-title-phudu fs-70 mb-20 tp_fade_anim" data-delay=".5">
                                Modern Layouts for   <br /> Every Professional Need
                            </h3>
                            <div className="tp_fade_anim" data-delay=".7">
                                <p>  Deploy sharp, clickable signatures without writing any code.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                           <div className="tp-slider-elegant-area pt-20 pb-80">
                            
                               <div className="tp-slider-elegant-wrapper">
                                   <div className="tp-slider-elegant-inner-wrap">
                                       {portfolioSliderElegantData.map((item, index) => (
                                           <div key={index} className="tp-slider-elegant-item">
                                               <div
                                                   className="tp-slider-elegant-thumb not-hide-cursor"
                                                   data-cursor="View<br>Demo"
                                               >
                                                   <Link className="cursor-hide" href={item.href}>
                                                       <Image src={item.img} alt={item.title} />
                                                   </Link>
                                               </div>
                                               <div className="tp-slider-elegant-content">
                                                   <h4 className="tp-slider-elegant-title">
                                                       <Link href={item.href}>{item.title}</Link>
                                                   </h4>
                                               </div>
                                           </div>
                                       ))}
                                   </div>
                               </div>
                           </div>
                       </main>
                   </div>
               </div>
    );
};

export default PortfolioSlider;