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
                           <div className="tp-slider-elegant-area pt-140 pb-120">
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