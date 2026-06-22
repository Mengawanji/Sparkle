import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import Footer from '../../components/footer/Footer';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';

const BlogDetailsLeftSide: React.FC = () => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={"Blog Single"} pagesub={'Blog'} />
            <BlogSingle bclass={'wpo-blog-single-left-sidebar-section'} blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <MarqueeSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetailsLeftSide;