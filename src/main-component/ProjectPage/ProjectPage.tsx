import React, {Fragment} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from '../../components/pagetitle/PageTitle'
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ProjectPage: React.FC = () => {

    return(
        <Fragment>
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

