import { AwesomeDesignIcon, FastPerformanceIcon, GuaranteedSafetyIcon } from '@/svg/FeaturesIcons';
import Link from 'next/link';
import React from 'react';

// Feature data
const features = [
    {
        id: 1,
        title: "Verified HTML",
        description: "Clean, spam-proof code that ensures your emails always land in the inbox.",
        icon: <GuaranteedSafetyIcon />,
        delay: ".3"
    },
    {
        id: 2,
        title: "Zero Blur",
        description: "CDN-hosted assets for signatures that load instantly and stay sharp on all screens",
        icon: <FastPerformanceIcon />,
        delay: ".5"
    },
    {
        id: 3,
        title: "Responsive Layouts",
        description: "Pixel-perfect templates that adapt seamlessly to mobile, desktop, and Dark Mode.",
        icon: <AwesomeDesignIcon />,
        delay: ".7"
    }
];

const MobileApplicationFeature = () => {
    return (
        <div className="app-feature-area app-feature-border-style  pb-100">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="app-feature-heading text-center mb-55">
                            <span className="tp-section-subtitle border-bg bg-color tp_fade_anim" data-delay=".3">
                              Smart Automation
                            </span>
                            <h3 className="tp-section-title-phudu fs-70 mb-20 tp_fade_anim" data-delay=".5">
                                Launch Your New  <br /> Brand in 60 Seconds
                            </h3>
                            <div className="tp_fade_anim" data-delay=".7">
                                <p> Generate, customize, and deploy interactive signatures instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-feature-bg tp_fade_anim">
                    <div className="row gx-10">
                        {features.map((feature) => (
                            <div key={feature.id} className="col-lg-4 col-md-6">
                                <div className="app-feature-item mb-30">
                                    <div className="app-feature-item-icon">
                                        <span>{feature.icon}</span>
                                    </div>
                                    <div className="app-feature-item-content">
                                        <h4 className="app-feature-title">{feature.title}</h4>
                                        <p>
                                            {feature.description.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="app-feature-bottom text-center mt-20">
                            <p>
                                <span>Launch</span> Browse our  <Link href="#">free templates</Link> and upgrade your signature today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileApplicationFeature;