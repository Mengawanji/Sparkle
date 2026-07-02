import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Helmet } from "react-helmet-async";
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import Footer from '../../components/footer/Footer';

const ContactPage: React.FC = () => {

    return(
        <Fragment>
            <Helmet>
                <title>Contact Sandy Sparkle | Get a Free Cleaning Quote</title>
                <meta
                    name="description"
                    content="Contact Sandy Sparkle to request a free quote, ask questions, or schedule professional cleaning services. We're here to help keep your space spotless."
                />
            </Helmet>
            <Navbar />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/> 
            <Contactpage/>
            <MarqueeSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

