import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo-2.svg";

import services from "../../api/services";

const Footer: React.FC = () => {

  

  return (

    <footer className="wpo-site-footer">

      <div className="container">

        <div className="wpo-footer-wrap">

          {/* Top Footer */}
          <div className="wpo-top-footer moving-cursor-wrap">

            <div className="footer-top-text">

              <h3>

                <Link
                  to="/contact"
                  
                >

                  In need of Cleaning Services?
                  Get in <span>touch</span>

                </Link>

              </h3>

            </div>
          </div>

          {/* Upper Footer */}
          <div className="wpo-upper-footer">

            <div className="row">

              {/* About */}
              <div className="col col-lg-3 col-md-6 col-sm-12 col-12">

                <div className="widget about-widget">

                  <div className="widget-title">

                    <Link
                      to="/"
                      className="logo"
                      
                    >

                      <img
                        src={logo}
                        alt="logo"
                      />

                    </Link>

                  </div>

                  <div className="footer-content">

                    <p>
                      Every space deserves expert care. 
                      We combine skilled professionals, 
                      quality products, and proven techniques 
                      for outstanding results.
                    </p>

                  </div>

                </div>

              </div>

              {/* Services */}
              <div className="col col-lg-3 col-md-6 col-sm-12 col-12">

                <div className="widget link-widget">

                  <div className="widget-title">
                    <h3>Our services</h3>
                  </div>

                  <ul>

                    {services.map((service) => (

                      <li key={service.id}>

                        <Link
                          to={`/service-single/${service.slug}`}
                          
                        >

                          {service.title}

                        </Link>

                      </li>

                    ))}

                  </ul>

                </div>

              </div>

              {/* Contact Info */}
              <div className="col col-lg-3 col-md-6 col-sm-12 col-12">

                <div className="widget link-widget">

                  <div className="widget-title">
                    <h3>Contact info</h3>
                  </div>

                  <ul>

                    <li>
                      Ottawa, Kingston and Salaberry de valleyfield
                    </li>

                    <li>
                      +1 519 577 1711
                    </li>

                    <li>
                      bookings@sandysparkle.com
                    </li>

                    <li>
                      Working Hours: 8AM - 6PM
                    </li>

                    <li>
                      Monday - Sunday
                    </li>

                  </ul>

                </div>

              </div>

              {/* Newsletter */}
              <div className="col col-lg-3 col-md-6 col-sm-12 col-12">

                <div className="widget newsletter-widget">

                  <div className="widget-title">
                    <h3>newsletter</h3>
                  </div>

                  <div className="input-items">

                    <form className="form-fild">

                      <input
                        className="fild"
                        type="email"
                        placeholder="Enter Your Email"
                        required
                      />

                      <div className="submite-btn">

                        <button
                          type="submit"
                          className="theme-btn"
                        >

                          Subscribe

                        </button>

                      </div>

                    </form>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Lower Footer */}
          <div className="wpo-lower-footer">

            <div className="row g-0">

              <div className="col col-lg-6 col-12">

                <p className="copyright">

                  Copyright © <span>2026</span> by{" "}

                  <Link
                    to="/"
                    
                  >
                    Sandy Sparkle
                  </Link>

                  . All Rights Reserved

                </p>

              </div>

              {/* Social */}
              <div className="col col-lg-6 col-12">

                <ul className="links">

                  <li>
                    <a href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="ti-instagram"></i>
                    </a>
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;