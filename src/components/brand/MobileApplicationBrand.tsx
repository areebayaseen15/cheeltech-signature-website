import brand1 from '../../../public/assets/img/web-logo/bnc-new.png';
import brand2 from '../../../public/assets/img/web-logo/vme-new.png';
import brand3 from '../../../public/assets/img/web-logo/br-new.png';
import brand4 from '../../../public/assets/img/web-logo/laila-hussain.png';
import brand5 from '../../../public/assets/img/web-logo/markable-new.png';
import brand6 from '../../../public/assets/img/web-logo/prepanation-new.png';
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const MobileApplicationBrand = () => {
    // Brand data array
    const brands = [
        { id: 1, logo: brand1, alt: 'Brand 1' },
        { id: 2, logo: brand2, alt: 'Brand 2' },
        { id: 3, logo: brand3, alt: 'Brand 3' },
        { id: 4, logo: brand4, alt: 'Brand 4' },
        { id: 5, logo: brand5, alt: 'Brand 5' },
        { id: 6, logo: brand6, alt: 'Brand 6' },
        { id: 7, logo: brand1, alt: 'Brand 1' },
        { id: 8, logo: brand2, alt: 'Brand 2' },
         { id: 9, logo: brand3, alt: 'Brand 3' },
        { id: 10, logo: brand4, alt: 'Brand 4' },
         { id: 11, logo: brand5, alt: 'Brand 5' },
         { id: 12, logo: brand6, alt: 'Brand 6' },
  
    ];

    return (
        <div className="app-brand-area">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="app-brand-heading text-center mb-45">
                            <span className="tp-section-subtitle subtitle-black">
                                Trusted by these amazing companies
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <Swiper
                            className='app-brand-active fix slider-transtion'
                            modules={[Autoplay, FreeMode]}
                            loop={true}
                            freeMode={true}
                            slidesPerView={4}
                            spaceBetween={0}
                            centeredSlides={true}
                            allowTouchMove={false}
                            speed={3000}
                            autoplay={{
                                delay: 1,
                                disableOnInteraction: true,
                            }}
                            breakpoints={{
                                '1600': { slidesPerView: 4 },
                                '1400': { slidesPerView: 4 },
                                '1200': { slidesPerView: 4 },
                                '992': { slidesPerView: 4 },
                                '768': { slidesPerView: 3 },
                                '576': { slidesPerView: 3 },
                                '0': { slidesPerView: 2 }
                            }
                            }
                        >
                            {brands.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <div className="app-brand-item">
                                        <Image src={brand.logo} alt={brand.alt} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileApplicationBrand;















































