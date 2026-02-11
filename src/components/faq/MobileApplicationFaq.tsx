import faqShape from '../../../public/assets/img/home-10/faq/faq-shape-1.png';
import Image from 'next/image';


const MobileApplicationFaq = () => {
    const faqItems = [
        {
            id: "collapseOne",
            question: "Is SignSolution really free to use?",
            answer: "Yes. Our entire library of professional HTML templates is 100% free for individual use. You can customize, generate, and export your signature without any hidden fees or credit card requirements.",
            show: true
        },
        {
            id: "collapseTwo",
            question: "Why should I use HTML instead of a single image?",
            answer: "Single images often appear blurry on mobile, can’t be clicked, and frequently trigger spam filters. Our HTML signatures stay pixel-perfect, allow for clickable links (like WhatsApp or LinkedIn), and are optimized for 2026 inbox standards.",
            show: false
        },
        {
            id: "collapseThree",
            question: "How do I add my logo to a free template?",
            answer: "For our free templates, we do not host images. You simply upload your logo to your own server or a public hosting service and paste the direct image link into our editor. We then generate the code to display it perfectly.",
            show: false
        },
        {
            id: "collapseFour",
            question: "Do I need any coding knowledge?",
            answer: "Not at all. We’ve handled the engineering for you. Simply choose a template, enter your details in our intuitive editor, and our system will generate the professional HTML code for you instantly.",
            show: false
        },
        {
            id: "collapseFive",
            question: "Which email clients are supported?",
            answer: "Our signatures are rigorously tested for Gmail, Outlook (Desktop & Web), Apple Mail, and Yahoo. We provide specific guides for each platform to ensure your installation is seamless and professional.",
            show: false
        },
        {
            id: "collapseSix",
            question: "Will my signature look good in Dark Mode?",
            answer: "Yes. Unlike traditional image signatures that show a jarring white box, our templates are engineered with modern CSS to ensure your branding looks professional regardless of the recipient's theme settings.",
            show: false
        },
          {
            id: "collapseSeven",
            question: "What does the SignSolution Pro Plan offer?",
            answer: "The Pro Plan is designed for growing teams. It includes centralized Employee Management, high-performance Image Hosting (CDN), Link Tracking, and Banner Management for marketing. Plus, you can send signatures directly to employees with automated installation guides.",
            show: false
        }
    ];

    return (
        <div className="app-faq-area p-relative pb-100">
            <div className="app-faq-shape" data-speed=".8">
                <Image src={faqShape} alt="faq-shape" />
            </div>
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="app-faq-heading p-relative mb-40">
                            <span className="tp-section-subtitle border-bg bg-color tp_fade_anim" data-delay=".3">FAQ</span>
                            <h3 className="tp-section-title-phudu fs-70 mb-20 tp_fade_anim" data-delay=".5">Got any <br /> questions?</h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="app-faq-wrap pl-70">
                            <div className="ai-faq-accordion-wrap">
                                <div className="accordion" id="accordionExample">
                                    {faqItems.map((item, index) => (
                                        <div className="accordion-items" key={index}>
                                            <h2 className="accordion-header">
                                                <button
                                                    className={`accordion-buttons ${item.show ? '' : 'collapsed'}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${item.id}`}
                                                    aria-expanded={item.show ? "true" : "false"}
                                                    aria-controls={item.id}
                                                >
                                                    {item.question}
                                                    <span className="accordion-icon"></span>
                                                </button>
                                            </h2>
                                            <div
                                                id={item.id}
                                                className={`accordion-collapse collapse ${item.show ? 'show' : ''}`}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <p>{item.answer}</p>
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
        </div>
    );
};

export default MobileApplicationFaq;