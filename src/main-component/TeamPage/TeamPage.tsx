import React, {Fragment} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from '../../components/pagetitle/PageTitle'
import TeamSection from '../../components/TeamSection';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const TeamPage: React.FC = () => {

    return(
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Better Plumbing Better Living'} pagesub={'Team page'}/> 
            <TeamSection hideshape tClass={'style-3'} teamNumber={8}/>
            <MarqueeSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default TeamPage;

