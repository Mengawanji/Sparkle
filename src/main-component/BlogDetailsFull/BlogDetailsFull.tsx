import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import Footer from '../../components/footer/Footer';

const BlogDetailsFull: React.FC = () => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={"Blog Single"} pagesub={'Blog'} />
            <BlogSingle bclass={'blog-single-fullwidth'} blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <MarqueeSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetailsFull;