import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection';
import BookingSection from '../../components/BookingSection/BookingSection';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';


const ServicePage: React.FC = () => {

    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Where Clean Meets Comfort'} pagesub={'Services'}/> 
            <ServiceSection sClass={'section-padding'}/>
            <BookingSection bClass={'section-padding pt-0'}/>
            <MarqueeSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePage;

