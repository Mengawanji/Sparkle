import React, { Fragment } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from '../../components/pagetitle/PageTitle'
import FaqSection from '../../components/FaqSection/FaqSection';
import BookingSection from '../../components/BookingSection/BookingSection';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const FaqPage: React.FC = () => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Better Plumbing Better Living'} pagesub={'Faq Page'} />
            <div className='section-padding pt-0'>
                <FaqSection />
            </div>
            <BookingSection bClass={'section-padding pt-0'} />
            <MarqueeSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default FaqPage;


