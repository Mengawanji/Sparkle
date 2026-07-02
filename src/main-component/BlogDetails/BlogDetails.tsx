import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Helmet } from "react-helmet-async";
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import Footer from '../../components/footer/Footer';

const BlogDetails: React.FC = () => {

    return (
        <Fragment>
            <Helmet>
                <title>Cleaning Tips & Insights | Sandy Sparkle Blog</title>
                <meta
                    name="description"
                    content="Read expert cleaning tips, home maintenance guides, and industry insights from Sandy Sparkle to keep your home and workplace fresh and spotless."
                />
            </Helmet>
            <Navbar />
            <BlogSingle />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;
