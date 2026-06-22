import React from "react";
import { Fade } from "react-awesome-reveal";
import chooseImg from "../../images/choose/image.png";

import choose1 from "../../images/choose/1.svg";
import choose2 from "../../images/choose/2.svg";
import choose3 from "../../images/choose/3.svg";
import choose4 from "../../images/choose/4.svg";

interface ChooseItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const chooseData: ChooseItem[] = [
  {
    id: 1,
    icon: choose1,
    title: "Fast Response",
    description:
      "Quick and reliable plumbing support whenever you need emergency assistance.",
  },

  {
    id: 2,
    icon: choose2,
    title: "Expert Team",
    description:
      "Certified and experienced plumbers delivering professional service every time.",
  },

  {
    id: 3,
    icon: choose4,
    title: "Satisfaction Guaranteed",
    description:
      "We ensure quality workmanship and customer satisfaction on every project.",
  },

  {
    id: 4,
    icon: choose3,
    title: "24/7 Support",
    description:
      "Our support team is available around the clock for urgent plumbing issues.",
  },
];

const WhyChooseSection2: React.FC = () => {

  return (

    <section className="wpo-why-choose-section-2">

      <div className="container">

        <div className="why-choose-wraper">

          <div className="row">

            {/* LEFT SIDE */}
            <div className="col col-lg-6 col-md-12 col-12">

              <Fade
                direction="left"
                duration={1000}
                triggerOnce
              >

                <div className="wpo-choose-left-side">

                  <div className="wpo-choose-left-items">

                    <div className="wpo-section-title-s2">

                      <span>why choose us</span>

                      <h2 className="poort-text poort-in-right">
                        Experienced & Certified
                        Plumbers Flexible Pricing
                      </h2>

                      <p>
                        Communication and utilizes cutting
                        edge logistic planning to get your
                        shipment completed on time.
                        Itself founded of backgrounds,
                        which simply.
                      </p>

                    </div>

                    <ul>

                      <li>
                        <span>
                          Trusted & Vetted Cleaners
                        </span>
                      </li>

                      <li className="active">
                        <span>
                          Customizable Cleaning Plans
                        </span>
                      </li>

                      <li>
                        <span>
                          Affordable & Transparent Pricing
                        </span>
                      </li>

                      <li>
                        <span>
                          Satisfaction Guarantee
                        </span>
                      </li>

                    </ul>

                  </div>

                </div>

              </Fade>

            </div>

            {/* RIGHT IMAGE */}
            <div className="col col-lg-6 col-md-12 col-12">

              <div className="wpo-choose-right-image">

                <Fade
                  direction="up"
                  duration={1000}
                  triggerOnce
                >

                  <div>

                    <img
                      src={chooseImg}
                      alt="choose"
                    />

                    <div className="border-shape">

                      <div className="shape-1"></div>

                      <div className="shape-2"></div>

                      <div className="shape-3"></div>

                      <div className="shape-4"></div>

                    </div>

                  </div>

                </Fade>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM ITEMS */}
      <div className="wpo-choose-right-wrap">

        <div className="wpo-choose-right-box">

          {chooseData.map((item, index) => (

            <Fade
              key={item.id}
              direction="up"
              duration={1000 + index * 100}
              triggerOnce
              className="wpo-choose-right-items"
            >

              <div>

                <div className="icon">

                  <img
                    src={item.icon}
                    alt={item.title}
                  />

                </div>

                <div className="wpo-choose-right-content">

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

              </div>

            </Fade>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseSection2;