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

      <Navbar />

      <PageTitle
        pageTitle={
          "Better Plumbing Better Living"
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
                  Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                  Placeat qui ducimus illum modi?
                  Perspiciatis accusamus soluta
                  perferendis, ad illum,
                  nesciunt, reiciendis iusto
                  et cupidit.
                </p>

                <h3>
                  Expert plumbers.
                  Trusted service.
                </h3>

                <p>
                  Need something changed or
                  is there something not quite
                  working the way you envisaged?
                  Is your van a little old and
                  tired and need refreshing?
                  Lorem Ipsum is simply dummy
                  text of the printing and
                  typesetting industry.
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
                      Why Marketing Important ?
                    </h2>

                    <p>
                      Lorem ipsum dolor sit amet,
                      consectetur adipisici sed
                      do eiusmod tempor incididunt
                      ut labore et.
                    </p>

                    <ul>

                      <li>
                        Research beyond the
                        business plan
                      </li>

                      <li>
                        Marketing options and rates
                      </li>

                      <li>
                        The ability to turnaround
                        consulting
                      </li>

                    </ul>

                  </div>

                </div>

                {/* TEXT */}
                <p>
                  There are many variations of
                  passages of lorem ipsum is
                  simply free text available
                  in the market, but the
                  majority time you put aside
                  to be in our office.
                </p>

                {/* QUOTE */}
                <h3 className="quate">

                  Business is the activity
                  of making one's living or
                  making money by producing
                  or buying and selling
                  products.

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
                    "How to learn digital marketing?",
                    "Can I use the demos made by Ewebot?",
                    "Why didn’t you showcase my submission?",
                    "Why didn’t you showcase my submission?",
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
                            Ne summo dictas
                            pertinacia nam.
                            Illum cetero vocent
                            ei vim, case regione
                            signiferumque vim te.
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
                    Looking for Plumbing
                    service Provider?
                  </h2>

                  <span>Call anytime</span>

                  <a
                    href="tel:+871382023"
                    className="num"
                  >

                    <span>
                      +(2) 871 382 023
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