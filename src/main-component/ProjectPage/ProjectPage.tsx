import React, {Fragment} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import PageTitle from '../../components/pagetitle/PageTitle'
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ProjectPage: React.FC = () => {

    return(
        <Fragment>
            <Helmet>
                <meta
                    name="description"
                    content="Explore Sandy Sparkle's professional cleaning services, including residential, commercial, deep cleaning, and move-in/move-out solutions tailored to your needs."
                />
            </Helmet>
            <Navbar />
            <PageTitle pageTitle={'Better Plumbing Better Living'} pagesub={'projects page'}/> 
            <ProjectSection/>
            <MarqueeSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;

