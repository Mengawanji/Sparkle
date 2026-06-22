import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import HeroContactForm from "./HeroContactForm";

import bg1 from "../../images/hero/bg-img-3.jpg";
import bg2 from "../../images/hero/bg-img-4.jpg";
import bg3 from "../../images/hero/bg-img-2.jpg";

const slides = [bg1, bg2, bg3];

const HeroSection: React.FC = () => {
  return (
    <section className="static-hero">

      {/* SLIDER */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={false}
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        {slides.map((bg, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-inner slide-bg-image"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CONTENT */}
      <div className="hero-all-content">
        <div className="container-fluid">

          <div className="slide-content">

            {/* LEFT */}
            <div className="left-content">

              <div className="slide-title">
                <span>
                  Professional Plumbing with a Personal Touch
                </span>
              </div>

              <div className="slide-sub-title">
                <h2>Expert Plumbing</h2>
                <h2>for Homes & Businesses</h2>
              </div>

              <div className="slide-btns">
                <Link to="/appointment" className="theme-btn-s4">
                  Book An Appointment
                </Link>
              </div>

            </div>

            {/* RIGHT */}
            <div className="right-content">

              {/* CONTACT FORM */}
              <HeroContactForm />

              {/* BOTTOM TEXT */}
              <div className="right-content-bottom">
                <p>
                  We offer plumber services at a perfect highly innovative level,
                  with work guarantee for all working.
                </p>

                <div className="right-btn">
                  <Link to="/about" className="theme-btn-s3">
                    <span>Explore More</span>
                    <i className="ti-arrow-top-right"></i>
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;