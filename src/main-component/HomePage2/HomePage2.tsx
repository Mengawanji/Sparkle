import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2';
import AboutSection2 from '../../components/about2/about2';
import TransformingSectionS2 from '../../components/TransformingSectionS2/TransformingSectionS2';
import WhyChooseSection from '../../components/WhyChooseSection/WhyChooseSection';
import TestimonialSectionS2 from '../../components/Testimonial2/Testimonial2';
import GallerySection from '../../components/GallerySection/GallerySection';
import BookingSectionS2 from '../../components/BookingSectionS2/BookingSectionS2';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage2: React.FC = () => {
    return (
        <Fragment>
            <Navbar hclass='header-s2'/>
            <Hero2 />
            <AboutSection2 />
            <TransformingSectionS2 />
            <WhyChooseSection />
            <TestimonialSectionS2 />
            <GallerySection hideTop gClass={'wpo-gallery-section-2'}/>
            <BookingSectionS2 />
            <BlogSection />
            <MarqueeSection />
            <Footer />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage2;