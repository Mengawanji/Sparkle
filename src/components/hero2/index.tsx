import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

import heroImg from "../../images/hero/hero-2.png";
import reviewImg from "../../images/review/review-1.png";

import BookingForm from "../BookingForm/BookingForm";

const Hero2: React.FC = () => {

  

  return (

    <section className="static-hero-s2">

      <div className="container-fluid">

        <div className="wraper">

          <div className="row align-items-center">

            <div className="col-lg-7 col-12">

              <Fade
                direction="left"
                duration={1000}
                triggerOnce
              >

                <div className="hero-left">

                  {/* Title */}
                  <div className="slide-sub-title">

                    <span>
                      Professional Home Cleaning with a Personal Touch
                    </span>

                    <h2 className="poort-text poort-in-right">
                      Sandy Sparkle 
                    </h2>

                    <h2 className="poort-text poort-in-right">
                      Professional Cleaning Services
                    </h2>

                  </div>

                  <div className="right-content">

                    {/* Booking Form */}
                    <div className="wpo-contact-form-area">

                      <div className="contact-title">

                        <h2 className="poort-text poort-in-right">
                          Book an appointment
                        </h2>

                      </div>

                      <BookingForm />

                    </div>

                    {/* Bottom Content */}
                    <div className="right-content-bottom">

                      <p>
                        We offer trusted cleaning services with
                        fast response times, professional support,
                        and guaranteed attention to details for
                        every project.
                      </p>

                      <div className="right-btn">

                        <Link
                          to="/about"
                          className="theme-btn-s3"
                          
                        >

                          <span>Explore More</span>

                          <i className="ti-arrow-top-right"></i>

                        </Link>

                      </div>

                    </div>

                  </div>

                </div>

              </Fade>

            </div>

          </div>

          {/* Hero Image */}
          <Fade
            direction="right"
            duration={1000}
            triggerOnce
            className="hero-img"
          >

            <div>

              <img
                src={heroImg}
                alt="hero"
              />

              <div className="review-image">

                <img
                  src={reviewImg}
                  alt="review"
                />

              </div>

            </div>

          </Fade>

        </div>

      </div>

    </section>
  );
};

export default Hero2;