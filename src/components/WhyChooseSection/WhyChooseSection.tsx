import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

// icons
import choose1 from "../../images/choose/1.svg";
import choose2 from "../../images/choose/2.svg";
import choose3 from "../../images/choose/3.svg";
import choose4 from "../../images/choose/4.svg";

/* ===== FEATURES ===== */
const chooseFeatures = [
  "Trusted Cleaners",
  "Customizable Cleaning Plans",
  "Affordable & Transparent Pricing",
  "Satisfaction Guarantee",
];

/* ===== RIGHT ITEMS ===== */
const chooseItems = [
  {
    id: 1,
    icon: choose1,
    title: "Reliable & On-Time",
    description:
      "We arrive as scheduled and complete every cleaning with professionalism and care.",
  },
  {
    id: 2,
    icon: choose2,
    title: "Experienced Cleaners",
    description:
      "Our skilled cleaning specialists deliver spotless results and attention to detail.",
  },
  {
    id: 3,
    icon: choose3,
    title: "Eco-Friendly Products",
    description:
      "We use safe and effective cleaning products that protect your family and pets.",
  },
  {
    id: 4,
    icon: choose4,
    title: "Satisfaction Guaranteed",
    description:
      "Your happiness is our priority. We don't leave until you're completely satisfied.",
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="wpo-why-choose-section">

      <div className="container-fluid">

        <div className="row">

          {/* ===== LEFT SIDE ===== */}
          <div className="col col-lg-6 col-md-12 col-12">

            <div className="wpo-choose-left-side">

              <div className="wpo-choose-left-items">

                {/* TITLE */}
                <div className="wpo-section-title-s2">

                  <span>why choose us</span>

                  <h2 className="poort-text poort-in-right">
                    Experienced Cleaners & Flexible Pricing
                  </h2>

                  <Fade direction="up" triggerOnce>

                    <p>
                        We provide reliable, detail-oriented cleaning 
                        services that keep your home or workplace spotless, 
                        fresh, and healthy.
                    </p>

                  </Fade>

                </div>

                {/* LIST */}
                <Fade direction="up" delay={100} triggerOnce>

                  <ul>

                    {chooseFeatures.map((item, index) => (

                      <li
                        key={index}
                        className={index === 1 ? "active" : ""}
                      >
                        <span>{item}</span>
                      </li>

                    ))}

                  </ul>

                </Fade>

              </div>

              {/* BUTTON */}
              <div className="why-choose-btn">

                <Link
                  to="/appointment"
                  className="theme-btn-s2"
                >
                  <span className="rolling-text">
                    Book An Appointment
                  </span>
                </Link>

              </div>

            </div>

          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="col col-lg-6 col-md-12 col-12">

            <div className="wpo-choose-right-wrap">

              <div className="wpo-choose-right-box">

                {chooseItems.map((item, index) => (

                  <Fade
                    key={item.id}
                    direction="up"
                    delay={index * 100}
                    triggerOnce
                    className="wpo-choose-right-items"
                  >

                    <div>
                      {/* ICON */}
                      <div className="icon">
                        <img src={item.icon} alt={item.title} />
                      </div>

                      {/* CONTENT */}
                      <div className="wpo-choose-right-content">

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                      </div>

                    </div>

                  </Fade>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseSection;