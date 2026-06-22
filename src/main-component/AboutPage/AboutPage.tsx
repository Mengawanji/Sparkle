import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
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
