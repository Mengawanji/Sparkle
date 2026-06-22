import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/hero/hero';
import ReviewSection from '../../components/ReviewSection/ReviewSection';
import AboutSection from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection';
import TransformingSection from '../../components/TransformingSection/TransformingSection';
import GallerySection from '../../components/GallerySection/GallerySection';
import CTASection from '../../components/CTASection/CTASection';
import WhyChooseSection from '../../components/WhyChooseSection/WhyChooseSection';
import TestimonialSection from '../../components/Testimonial/TestimonialSection';
import TeamSection from '../../components/TeamSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import BookingSection from '../../components/BookingSection/BookingSection';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage: React.FC = () => {
    return (
        <Fragment>
            <Navbar />
            <HeroSection />
            <ReviewSection />
            <AboutSection />
            <ServiceSection sClass={'section-padding'}/>
            <TransformingSection />
            <GallerySection />
            <CTASection />
            <WhyChooseSection />
            <TestimonialSection />
            <TeamSection />
            <FaqSection />
            <BookingSection />
            <MarqueeSection />
            <BlogSection />
            <Footer />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage;