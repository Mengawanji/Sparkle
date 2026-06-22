import React from "react";
import ContactForm from "../ContactForm";


const ContactPage: React.FC = () => {

  return (

    <section className="contact-page section-padding">

      <div className="container">

        {/* OFFICE INFO */}
        <div className="office-info">

          <div className="row">

            {/* ADDRESS */}
            <div className="col col-lg-4 col-md-6 col-12">

              <div className="office-info-item">

                <div className="office-info-icon">

                  <div className="icon">

                    <i className="fi flaticon-home-address"></i>

                  </div>

                </div>

                <div className="office-info-text">

                  <h2>Address Line</h2>

                  <p>
                    Ottawa, Kingston and Salaberry 
                    <br />
                    de valleyfield
                  </p>

                </div>

              </div>

            </div>

            {/* PHONE */}
            <div className="col col-lg-4 col-md-6 col-12">

              <div className="office-info-item active">

                <div className="office-info-icon">

                  <div className="icon">

                    <i className="fi flaticon-phone-call"></i>

                  </div>

                </div>

                <div className="office-info-text">

                  <h2>Phone Number</h2>

                  <p>
                    +1 519 577 1711
                  </p>

                </div>

              </div>

            </div>

            {/* EMAIL */}
            <div className="col col-lg-4 col-md-6 col-12">

              <div className="office-info-item">

                <div className="office-info-icon">

                  <div className="icon">

                    <i className="fi flaticon-mail-1"></i>

                  </div>

                </div>

                <div className="office-info-text">

                  <h2>Email Address</h2>

                  <p>
                    bookings@sandysparkle.com
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* CONTACT WRAP */}
        <div className="contact-wrap">

          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-lg-6 col-12">

              <div className="contact-left">

                <h2>Get in touch</h2>

                <p>
                  Have questions or need a cleaning service? Our friendly team is here to help.
                  Contact us today for a free quote.
                </p>

                {/* MAP */}
                <div className="map">

                  <iframe
                    title="Google Map"
                    loading="lazy"
                    src="https://www.google.com/maps?q=Ottawa,+ON,+Canada&output=embed"
                    allowFullScreen
                  ></iframe>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6 col-12">

              <div className="contact-right">

                <div className="title">

                  <h2>Fill Up The Form</h2>

                  <p>
                    Your email address will
                    not be published.
                    Required fields are
                    marked *
                  </p>

                </div>

                {/* FORM */}
                <ContactForm/>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactPage;