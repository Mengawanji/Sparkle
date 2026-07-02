import React, {
  Fragment,
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/pagetitle/PageTitle";
import MarqueeSection from "../../components/MarqueeSection/MarqueeSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

import services from "../../api/services";

import videoImg from "../../images/service-single/video.jpg";

import gallery1 from "../../images/service-gallery/1.jpg";
import gallery2 from "../../images/service-gallery/2.jpg";
import gallery3 from "../../images/service-gallery/3.jpg";
import gallery4 from "../../images/service-gallery/4.jpg";


const ServiceSinglePage: React.FC = () => {

  const { slug } = useParams<{
    slug: string;
  }>();

  const ServiceDetails = services.find(
    (item) => item.slug === slug
  );

  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  const toggleAccordion = (
    index: number
  ) => {

    setActiveIndex(
      activeIndex === index ? null : index
    );

  };

  useEffect(() => {

    window.scrollTo(0, 0);

  }, [slug]);

  if (!ServiceDetails) {

    return (

      <div className="text-center section-padding">

        <div className="not-found">
          Service not found!
        </div>

      </div>

    );
  }

  return (

    <Fragment>

      <Helmet>
        <meta
          name="description"
          content="Our deep cleaning service reaches every corner of your home, removing built-up dirt, bacteria, and allergens for a fresher and healthier living space."
        />
    </Helmet>

      <Navbar />

      <PageTitle
        pageTitle={
          "Clean Environment, Better Health"
        }
        pagesub={ServiceDetails.title}
      />

      <section className="service-single-page section-padding">

        <div className="container">

          <div className="row">

            {/* LEFT CONTENT */}
            <div className="col-lg-8 col-12 order-lg-2">

              <div className="service-single-wrap">

                {/* IMAGE */}
                <div className="title-image">

                  <img
                    src={ServiceDetails.image}
                    alt={ServiceDetails.title}
                  />

                </div>

                {/* TITLE */}
                <h2>
                  {ServiceDetails.title}
                </h2>

                <p>
                  Our professional home cleaning
                  service in Canada is designed
                  to give you a spotless, fresh,
                  and healthy living space. Whether
                  you need a one-time deep clean or
                  regular maintenance, our trained
                  cleaners use eco-friendly products
                  that are safe for your family
                  and pets.
                </p>

                <h3>
                  Experienced cleaners.
                  Reliable service.
                </h3>

                <p>
                  Every home is different, which
                  is why we tailor our cleaning
                  plans to suit your specific
                  needs and schedule. From
                  kitchens and bathrooms to
                  bedrooms and living areas,
                  we ensure every corner of
                  your home gets the attention
                  it deserves — leaving it
                  looking and smelling its best.
                </p>

                {/* VIDEO */}
                <div className="video-wrap">

                  <div className="video-img">

                    <img
                      src={videoImg}
                      alt="video"
                    />

                    <div className="video-holder">


                    </div>

                  </div>

                  <div className="video-content">

                    <h2>
                      Why Professional Cleaning Matters?
                    </h2>

                    <p>
                      A clean home is more than
                      just aesthetics — it directly
                      impacts your health, reduces
                      allergens, and creates a
                      stress-free environment for
                      you and your family.
                    </p>

                    <ul>

                      <li>
                        Reduces dust, mold,
                        and allergens
                      </li>

                      <li>
                        Flexible scheduling
                        and competitive rates
                      </li>

                      <li>
                        Fully insured and
                        background-checked cleaners
                      </li>

                    </ul>

                  </div>

                </div>

                {/* TEXT */}
                <p>
                  We serve homeowners and renters
                  across Canada, offering standard
                  cleaning, deep cleaning, move-in
                  and move-out cleaning, and
                  post-renovation cleanup. Our
                  team arrives on time, fully
                  equipped, and ready to transform
                  your space.
                </p>

                {/* QUOTE */}
                <h3 className="quate">

                  A clean home is the foundation
                  of a healthy lifestyle — let us
                  handle the cleaning so you can
                  focus on what truly matters
                  to you.

                </h3>

                {/* GALLERY */}
                <div className="image-gallery">

                  <h2>
                    Eligibility checklist :
                  </h2>

                  <ul>

                    <li>
                      <img
                        src={gallery1}
                        alt=""
                      />
                    </li>

                    <li>
                      <img
                        src={gallery2}
                        alt=""
                      />
                    </li>

                    <li>
                      <img
                        src={gallery3}
                        alt=""
                      />
                    </li>

                    <li>
                      <img
                        src={gallery4}
                        alt=""
                      />
                    </li>

                  </ul>

                </div>

                {/* ACCORDION */}
                <div className="accordion">

                  {[
                    "What is included in a standard home cleaning?",
                    "Do I need to provide cleaning supplies?",
                    "How do I book a cleaning appointment?",
                    "Are your cleaners insured and background-checked?",
                  ].map((title, index) => (

                    <div
                      key={index}
                      className={`accordion-item ${
                        activeIndex === index
                          ? "active"
                          : ""
                      }`}
                    >

                      <button
                        className="accordion-header"
                        onClick={() =>
                          toggleAccordion(index)
                        }
                      >

                        {title}

                      </button>

                      {activeIndex === index && (

                        <div className="accordion-content">

                          <p>
                            {index === 0 &&
                              "Our standard cleaning covers dusting all surfaces, vacuuming and mopping floors, cleaning bathrooms and kitchens, wiping down appliances, and emptying trash bins throughout your home."}
                            {index === 1 &&
                              "No — our team arrives fully equipped with professional-grade, eco-friendly cleaning products and tools. If you have a preferred product you'd like us to use, just let us know in advance."}
                            {index === 2 &&
                              "Booking is easy! You can schedule an appointment online through our website, call us directly, or send us a message. We offer flexible time slots on weekdays and weekends to fit your schedule."}
                            {index === 3 &&
                              "Absolutely. All of our cleaners undergo thorough background checks and are fully insured. Your safety and peace of mind are our top priorities."}
                          </p>

                        </div>

                      )}

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4 col-12 order-lg-1">

              <div className="service-sidebar">

                {/* CATEGORY */}
                <div className="service-catagory">

                  <ul>

                    {services.map((service) => (

                      <li key={service.id}>

                        <Link
                          to={`/service-single/${service.slug}`}
                          className={
                            service.slug === slug
                              ? "active"
                              : ""
                          }
                        >

                          {service.title}

                        </Link>

                      </li>

                    ))}

                  </ul>

                </div>

                {/* SERVICE INFO */}
                <div className="service-info">

                  <div className="icon">

                    <i className="flaticon-phone-call"></i>

                  </div>

                  <h2>
                    Looking for Cleaning
                    service?
                  </h2>

                  <span>Call anytime</span>

                  <a
                    href="tel:+15195771711"
                    className="num"
                  >

                    <span>
                      +1 519 577 1711
                    </span>

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <MarqueeSection />
      <Footer />

      <Scrollbar />

    </Fragment>
  );
};

export default ServiceSinglePage;