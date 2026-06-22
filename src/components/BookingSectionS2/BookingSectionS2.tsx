import React from "react";
import { Fade } from "react-awesome-reveal";

import bookingImg from "../../images/booking-2.jpg";
import BookingForm from "../BookingForm/BookingForm";

const BookingSectionS2: React.FC = () => {

  return (

    <section className="wpo-booking-section-2 section-padding pb-0">

      <div className="container">

        <div className="row">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-12 col-12">

            <Fade
              direction="left"
              duration={1200}
              triggerOnce
            >

              <div className="cta-image">

                <img
                  src={bookingImg}
                  alt="booking"
                />

              </div>

            </Fade>

          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-6 col-md-12 col-12">

            <Fade
              direction="right"
              duration={1200}
              triggerOnce
            >

              <div className="wpo-contact-form-area">

                <div className="wpo-section-title">

                  <h2>Need help ?</h2>

                  <h2 className="poort-text poort-in-right">
                    We’re just a call away.
                  </h2>

                </div>

                <BookingForm />

              </div>

            </Fade>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BookingSectionS2;