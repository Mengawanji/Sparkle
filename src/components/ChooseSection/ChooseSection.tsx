import React from "react";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import { useSplitTextAnimation } from "../splittextAnimation/useSplitTextAnimation";
import chooseImg from "../../images/choose/choose.jpg";
import radiusShape from "../../images/choose/radius-shape.svg";
import cleaningIcon from "../../images/cleaning-icon.svg";

const ChooseSection: React.FC = () => {

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-choose-section section-padding pt-0" ref={ref}>
      <div className="container">
        <div className="wpo-choose-wrap">
          <div className="row">

            {/* LEFT */}
            <div className="col-lg-6">
              <Fade direction="left" duration={1200} triggerOnce>
                <div className="wpo-choose-left-side">

                  <div className="wpo-choose-left-img left-to-right-light">
                    <img src={chooseImg} alt="choose" />
                  </div>

                  <div className="wpo-choose-left-box">
                    <div className="wrap">
                      <div className="inside">
                        <h2>
                          <span className="odometer">50</span>+
                        </h2>
                        <p>Team Member</p>
                      </div>
                    </div>

                    <div className="radius-shape">
                      <img src={radiusShape} alt="shape" />
                    </div>
                  </div>

                </div>
              </Fade>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6">
              <Fade direction="right" duration={1200} triggerOnce>
                <div className="wpo-choose-right-side">

                  <div className="wpo-section-title-s2">

                    <span>
                      <i>
                        <img src={cleaningIcon} alt="icon" />
                      </i>
                      why choose us
                    </span>

                    <h2 className="poort-text poort-in-right">
                      Your Space Deserves the Best Here’s Why We’re It
                    </h2>

                    <p>
                      Our team of trained professionals takes pride in every
                      detail, going above and beyond to exceed your expectations.
                      Whether it’s routine housekeeping.
                    </p>

                  </div>

                  <ul>
                    <li><span>Trusted & Vetted Cleaners</span></li>
                    <li className="active"><span>Customizable Cleaning Plans</span></li>
                    <li><span>Affordable & Transparent Pricing</span></li>
                    <li><span>Satisfaction Guarantee</span></li>
                  </ul>

                </div>
              </Fade>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;