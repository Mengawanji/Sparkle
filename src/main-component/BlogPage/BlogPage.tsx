import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import BlogList from '../../components/BlogList/BlogList.js'
import Navbar from '../../components/Navbar/Navbar.js';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'

const BlogPage: React.FC = () => {
    return(
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList/>
            <MarqueeSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPage;

