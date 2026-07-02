import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Helmet } from "react-helmet-async";
import PageTitle from '../../components/pagetitle/PageTitle';
import { Fade } from "react-awesome-reveal";
import sparkleIcon from "../../images/cleaning-icon.svg";
import BookingForm from '../../components/BookingForm/BookingForm';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const AppointmentPage: React.FC = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Book a Cleaning Appointment | Sandy Sparkle</title>
        <meta
          name="description"
          content="Schedule your residential or commercial cleaning service with Sandy Sparkle. Book an appointment online and enjoy a cleaner, healthier space."
        />
      </Helmet>
      <Navbar />
      <PageTitle pageTitle={'Because Every Clean Space Matters'} pagesub={'Appoinment'} />
      <section className="wpo-booking-section style-3 section-padding">

        <div className="wpo-contact-form-area">

          <Fade
            direction="up"
            duration={1200}
            triggerOnce
          >

            <div className="wpo-section-title">

              <span>

                <i>

                  <img
                    src={sparkleIcon}
                    alt="icon"
                  />

                </i>

                Book an appointment

              </span>

              <h2 className="poort-text poort-in-right">

                Need help getting your home clean again? 
                We’re just a call away.

              </h2>

            </div>

          </Fade>

          <Fade
            direction="up"
            duration={1400}
            triggerOnce
          >

            <BookingForm />

          </Fade>

        </div>

      </section>
      <MarqueeSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  )
};
export default AppointmentPage;
