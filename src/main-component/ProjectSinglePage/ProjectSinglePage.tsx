import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet-async";
import projects from "../../api/projects";
import project2 from "../../images/project-single/2.jpg";
import project3 from "../../images/project-single/3.jpg";



const faqItems = [
    {
        title: "What professional-grade equipment and products do you use for deep cleaning?",
        text: "We use hospital-grade, eco-friendly cleaning solutions combined with HEPA-filter vacuums and microfiber technology to ensure every corner of your home is spotless and safe for your family and pets."
    },
    {
        title: "How do I prepare my home before the cleaning team arrives?",
        text: "Simply tidy up loose items and personal belongings so our team can focus on deep cleaning surfaces. We handle everything else — from scrubbing bathrooms to sanitizing kitchens and dusting hard-to-reach areas."
    },
    {
        title: "Can I customize my cleaning plan based on my specific needs?",
        text: "Absolutely. We offer fully flexible cleaning packages — whether you need a one-time deep clean, recurring weekly visits, post-renovation cleanup, or move-in/move-out services tailored to your schedule and budget."
    },
    {
        title: "How do you ensure consistent quality across every cleaning visit?",
        text: "Every session follows a detailed checklist reviewed by a quality supervisor. We also welcome client feedback after each visit to ensure our standards continuously meet and exceed your expectations."
    }
];

const ProjectSinglePage: React.FC = () => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

    const { slug } = useParams<{ slug: string }>();

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <h2 style={{ textAlign: "center", padding: "120px" }}>
                Project not found
            </h2>
        );
    }

    return (
        <Fragment>

            <Helmet>
                <title>Professional Deep Cleaning | Sandy Sparkle</title>
                <meta
                    name="description"
                    content="Our deep cleaning service reaches every corner of your home, removing built-up dirt, bacteria, and allergens for a fresher and healthier living space."
                />
            </Helmet>

            <Navbar />

            <PageTitle
                pageTitle={'Clean Spaces. Healthy Living.'}
                pagesub={project.title}
            />

            <section className="wpo-project-details-area section-padding">

                <div className="container">

                    <div className="row">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-8 col-12">

                            {/* IMAGE + VIDEO */}
                            <div className="wpo-minimal-wrap">

                                <div className="wpo-minimal-img">
                                    <img src={project.image} alt={project.title} />
                                </div>

                            </div>


                            {/* PROJECT INFO */}
                            <div className="wpo-project-details-list">

                                <div className="row">

                                    <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text">
                                            <span>Client Name</span>
                                            <h2> KD Gilbert</h2>
                                        </div>
                                    </div>

                                    <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text-3">
                                            <span>Service Value</span>
                                            <h2>$500</h2>
                                        </div>
                                    </div>

                                    <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text">
                                            <span>Date</span>
                                            <h2>19 Nov 2026</h2>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            {/* PROJECT DESCRIPTION */}
                            <div className="wpo-p-details-section">

                                <h5>Service Requirement</h5>

                                <p>
                                    The client required a comprehensive deep cleaning of their 4-bedroom home, including kitchen degreasing, bathroom sanitization, carpet vacuuming, and window washing. The property had not undergone a professional clean in several months, requiring extra attention to buildup in high-traffic areas and hard-to-reach spaces.
                                </p>

                                <p>
                                    Special care was requested for allergen-sensitive areas, as one family member suffers from dust allergies. Our team used only hypoallergenic, non-toxic cleaning products throughout the entire home to ensure a safe and healthy living environment for all residents.
                                </p>


                                {/* PROCESS */}
                                <div className="process-wrap">

                                    <h5>Our work process</h5>

                                    <div className="row">

                                        <div className="col-lg-4 col-md-6 col-12">

                                            <div className="process-item">

                                                <div className="process-icon">
                                                    <i className="fi flaticon-handshake"></i>
                                                </div>

                                                <div className="process-text">
                                                    <h3>Quality We Ensure</h3>
                                                    <p>
                                                        Every room is inspected after cleaning to guarantee
                                                        spotless results that meet our high standards.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="col-lg-4 col-md-6 col-12">

                                            <div className="process-item">

                                                <div className="process-icon">
                                                    <i className="fi flaticon-medal"></i>
                                                </div>

                                                <div className="process-text">
                                                    <h3>Experienced Cleaners</h3>
                                                    <p>
                                                        Our trained and background-checked staff bring
                                                        years of professional home cleaning expertise.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="col-lg-4 col-md-6 col-12">

                                            <div className="process-item">

                                                <div className="process-icon">
                                                    <i className="fi flaticon-gift-box"></i>
                                                </div>

                                                <div className="process-text">
                                                    <h3>Modern Equipment Use</h3>
                                                    <p>
                                                        We use professional-grade tools and eco-friendly
                                                        products for a thorough and safe clean.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                <p>
                                    Our cleaning team followed a room-by-room checklist to ensure no surface was overlooked. From scrubbing grout lines in the bathrooms to degreasing stovetops and wiping down cabinet interiors in the kitchen, every task was completed with precision. Floors were mopped, skirting boards dusted, and all light fixtures cleaned — leaving the home feeling truly refreshed and hygienic.
                                </p>


                                {/* GALLERY */}
                                <div className="row">

                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={project2} alt="" />
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={project3} alt="" />
                                        </div>
                                    </div>

                                </div>


                                <p>
                                    Upon completion, the client performed a walkthrough with our team leader to confirm full satisfaction. Any areas requiring a second pass were immediately addressed at no extra cost. Our commitment to delivering a clean, healthy home doesn't end until the client is completely happy with the results.
                                </p>

                            </div>


                            {/* FAQ / ACCORDION */}
                            <div className="wpo-faq-section">
                                <h4>Service Solutions</h4>

                                <div className="accordion">

                                    {faqItems.map((item, index) => {

                                        const isOpen = activeIndex === index;

                                        return (
                                            <div className="accordion-item" key={index}>

                                                <h3 className="accordion-header">

                                                    <button
                                                        className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
                                                        onClick={() =>
                                                            setActiveIndex(isOpen ? null : index)
                                                        }
                                                    >
                                                        {item.title}
                                                    </button>

                                                </h3>

                                                <div
                                                    className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                                >

                                                    <div className="accordion-body">
                                                        <p>{item.text}</p>
                                                    </div>

                                                </div>

                                            </div>
                                        );

                                    })}

                                </div>
                            </div>

                        </div>


                        {/* SIDEBAR */}
                        <div className="col-lg-4 col-12">

                            <div className="blog-sidebar">

                                {/* SEARCH */}
                                <div className="widget search-widget">

                                    <form>

                                        <div>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search Service.."
                                            />

                                            <button type="submit">
                                                <i className="ti-search"></i>
                                            </button>

                                        </div>

                                    </form>

                                </div>


                                {/* SERVICES */}
                                <div className="widget category-widget">

                                    <h3>Our Services</h3>

                                    <ul>

                                        {projects.map((service) => {

                                            return (
                                                <li key={service.id}>

                                                    <Link to={`/project-single/${service.slug}`}>

                                                        {service.title}

                                                        <span>{service.id}</span>

                                                    </Link>

                                                </li>
                                            );

                                        })}

                                    </ul>

                                </div>

                                {/* SERVICE INFO */}
                                <div className="service-info">

                                    <div className="icon">
                                        <i className="flaticon-phone-call"></i>
                                    </div>

                                    <h2>
                                        Need a Reliable Home Cleaning Service?
                                    </h2>

                                    <span>Call anytime</span>

                                    <a href="tel:+1 519 577 1711" className="num">
                                        <span>+1 519 577 1711</span>
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <MarqueeSection />

            <Footer />

            <Scrollbar />

        </Fragment>
    );
};

export default ProjectSinglePage;