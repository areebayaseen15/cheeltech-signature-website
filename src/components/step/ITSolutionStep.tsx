import aboutShape from '../../../public/assets/img/images/shap-removebg-preview.png';
import aboutShapeTwo from '../../../public/assets/img/images/step-shape-2.png';
import aboutShapeThree from '../../../public/assets/img/images/about-shape-1.webp';
import aboutShapeFour from '../../../public/assets/img/images/about-shape-2.webp';
import about1 from '../../../public/assets/img/images/about-1.webp';
import { AccordionId, AccordionItemDT } from '@/types/custom-d-t';
import React, { useState } from 'react';
import Image from 'next/image';
import { HeroShape } from '@/svg';


const ITSolutionStep = () => {
    const [activeAccordion, setActiveAccordion] = useState<AccordionId | null>('collapseOne');

    const accordionData: AccordionItemDT[] = [
        {
            id: 'collapseOne',
            step: 'Step 1',
            title: 'Deep Dive & Strategy',
            content: 'We begin by listening to your needs, defining project scope, user requirements, and technical strategy to ensure alignment with your business objectives.'
        },
        {
            id: 'collapseTwo',
            step: 'Step 2',
            title: 'Architecture & UX/UI',
            content: 'Based on the strategy, we craft the site architecture, wireframes, and user interface (UI/UX) design for approval, creating a clear technical blueprint.'
        },
        {
            id: 'collapseThree',
            step: 'Step 3',
            title: 'Development & Integration',
            content: 'Our developers build the solution—writing clean, optimized code, integrating databases, and deploying content onto secure server environments.'
        },
        {
            id: 'collapseFour',
            step: 'Step 4',
            title: 'Testing & Launch',
            content: 'We perform rigorous testing (QA) across all devices and browsers, followed by a final client review before the secure, high-performance launch.'
        }
    ];

    const handleAccordionClick = (id: AccordionId) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <div className="it-step-area it-step-bg paste-bg-2 p-relative pt-120 pb-140">
            
            <div className="it-step-shape-1">
                <Image data-speed="1.1" src={aboutShape} alt="about-shape" />
            </div>
            <div className="it-step-shape-2 d-none d-xxl-block">
                <Image data-speed="1.1" src={aboutShapeTwo} alt="about-shape" />
            </div>
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="it-step-title-box z-index-1 text-center mb-105">
                            <span className="tp-section-subtitle-platform mb-20 tp-split-text tp-split-right">Our Process</span>
                            <h4 className="tp-section-title-platform mb-20 tp-split-text tp-split-right">Transforming Your Digital Vision, Step by Step.</h4>
                            <div className="tp_text_anim">
                                <p>
                                    Every business needs a unique digital strategy. We work together to align <br/>our expertise with your specific goals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-5">
                        <div className="it-step-thumb-wrap p-relative">
                            <div className="it-step-thumb">
                                <Image style={{ width: "100%", height: "auto" }} src={about1} alt="about" />
                            </div>
                            <Image className="it-step-thumb-shape-1" data-speed=".9" src={aboutShapeThree} alt="about-shape" />
                            <Image className="it-step-thumb-shape-2" src={aboutShapeFour} alt="about-shape" />
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="it-step-accordion-wrap it-faq-wrap">
                            <div className="accordion it-faq-accordion" id="accordionExample">
                                {accordionData.map((item) => (
                                    <div
                                        className={`accordion-items ${activeAccordion === item.id ? 'faq-active' : ''}`}
                                        key={item.id}
                                    >
                                        <h2 className="accordion-header">
                                          <button
  type="button"
  className="accordion-buttons"
  onClick={() => handleAccordionClick(item.id)}
>
  <i>{item.step}</i>
  <span>{item.title}</span>
</button>
                                        </h2>
                                        <div
                                            id={item.id}
                                            className={`accordion-collapse collapse ${activeAccordion === item.id ? 'show' : ''}`}
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionStep;