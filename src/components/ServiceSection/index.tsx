import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useSplitTextAnimation } from "../splittextAnimation/useSplitTextAnimation";
import services from "../../api/services";

interface ServiceSectionProps {
  hideTop?: boolean;
  sClass?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  hideTop = false,
  sClass = "",
}) => {

  const ref = useRef<HTMLDivElement | null>(null);
  useSplitTextAnimation(ref);

  return (
    <section className={`wpo-service-section ${sClass}`} ref={ref}>

      {/* ===== TOP ===== */}

      {!hideTop && (

        <div className="container">

          <div className="row">

            <div className="col-lg-7 col-md-12 col-12">

              <div className="wpo-section-title-s2">

                <span>our services</span>

                <h2 className="poort-text poort-in-right">
                  Professional Cleaning Solutions
                </h2>

              </div>

            </div>

            <div className="col-lg-5 col-md-12 col-12">

              <div className="service-title-btn">

                <Link
                  to="/appointment"
                  className="theme-btn-s4"
                >
                  Book An Appointment
                </Link>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* ===== SERVICES ===== */}
      <div className="container-fluid">
        <div className="service-wrap">
          <div className="service-content">

            {services.slice(0, 4).map((service, index) => (

              <Fade
                key={service.id}
                direction="up"
                delay={index * 200}
                triggerOnce
                className="service-items"
              >

                <div>
                  {/* ICON / IMAGE */}
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>

                  {/* TEXT */}
                  <div className="service-text">

                    <h3>
                      {/* <Link to={`/service-single/${service.slug}`}>
                        {service.title}
                      </Link> */}
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                    {/* BOTTOM */}
                    {/* <div className="service-bottom">

                      <div className="text">
                        <Link to={`/service-single/${service.slug}`}>
                          <span className="rolling-text">
                            Explore More
                          </span>
                        </Link>
                      </div>

                      <div className="icon">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="16"
                          viewBox="0 0 19 16"
                          fill="none"
                        >
                          <path
                            d="M14.7821 15H4.21786C1.66786 15 1 14.7647 1 11.8824V4.11765C1 1.23529 1.66786 1 4.21786 1H14.7821C17.3321 1 18 1.23529 18 4.11765V11.8824C18 14.7647 17.3321 15 14.7821 15Z"
                            stroke="#036C5F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.5 5L10.37 8.5C9.34 9.32 9.65 9.32 8.62 8.5L4.5 5"
                            stroke="#036C5F"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                      </div>

                    </div> */}

                  </div>

                </div>

              </Fade>

            ))}

          </div>
        </div>
      </div>

    </section>
  );
};

export default ServiceSection;