import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import Footer from '../../components/footer/Footer';

const ContactPage: React.FC = () => {

    return(
        <Fragment>
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

