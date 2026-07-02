import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import loader from "../../images/preloader.png";
const HomePage2 = lazy(() => import("../HomePage2/HomePage2"));
const AboutPage = lazy(() => import("../AboutPage/AboutPage"));
const AppointmentPage = lazy(() => import("../AppointmentPage/AppointmentPage"));
const ProjectPage = lazy(() => import("../ProjectPage/ProjectPage"));
const ProjectSinglePage = lazy(() => import("../ProjectSinglePage/ProjectSinglePage"));
const TeamSinglePage = lazy(() => import("../TeamSinglePage/TeamSinglePage"));
const FaqPage = lazy(() => import("../FaqPage"));
const ServicePage = lazy(() => import("../ServicePage/ServicePage"));
const ServiceSinglePage = lazy(() => import("../ServiceSinglePage/ServiceSinglePage"));
const BlogPage = lazy(() => import("../BlogPage/BlogPage"));
const BlogPageLeft = lazy(() => import("../BlogPageLeft/BlogPageLeft"));
const BlogPageFullwidth = lazy(() => import("../BlogPageFullwidth/BlogPageFullwidth"));
const BlogDetails = lazy(() => import("../BlogDetails/BlogDetails"));
const BlogDetailsLeftSide = lazy(() => import("../BlogDetailsLeftSide/BlogDetailsLeftSide"));
const BlogDetailsFull = lazy(() => import("../BlogDetailsFull/BlogDetailsFull"));
const ContactPage = lazy(() => import("../ContactPage/ContactPage"));
const NotFound = lazy(() => import("../../NotFound"));

const AllRoute: React.FC = () => {
  return (
    <Suspense fallback={
      <div className="preloader">
        <div className="vertical-centered-box">
          <div className="content">
            <div className="loader-circle"></div>
            <div className="loader-line-mask">
              <div className="loader-line"></div>
            </div>
            <img src={loader} alt="" />
          </div>
        </div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<HomePage2 />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="appointment" element={<AppointmentPage />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="single/:slug" element={<ProjectSinglePage />} />
        <Route path="team-single/:slug" element={<TeamSinglePage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="service-single/:slug" element={<ServiceSinglePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog-left-sidebar" element={<BlogPageLeft />} />
        <Route path="blog-fullwidth" element={<BlogPageFullwidth />} />
        <Route path="blog-single/:slug" element={<BlogDetails />} />
        <Route path="blog-single-left-sidebar/:slug" element={<BlogDetailsLeftSide />} />
        <Route path="blog-single-fullwidth/:slug" element={<BlogDetailsFull />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="404" element={<NotFound />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoute;