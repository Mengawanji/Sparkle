import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Helmet } from "react-helmet-async";
import PageTitle from '../../components/pagetitle/PageTitle';
import AboutSection from '../../components/about/about';
import TransformingSection from '../../components/TransformingSection/TransformingSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const AboutPage: React.FC = () => {
    return (
        <Fragment>
            <Helmet>
                <title>About Sandy Sparkle | Trusted Professional Cleaning Company</title>
                <meta
                    name="description"
                    content="Learn about Sandy Sparkle, our commitment to exceptional cleaning services, experienced professionals, and our mission to create spotless, healthy spaces."
                />
            </Helmet>
            <Navbar />
            <PageTitle pageTitle={'Clean Spaces. Healthy Living.'} pagesub={'About Us'} />
            <div className='section-padding'>
                <AboutSection />
            </div>
            <TransformingSection />
            <FaqSection />
            <MarqueeSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
