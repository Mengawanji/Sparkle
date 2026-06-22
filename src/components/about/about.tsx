import React, { useRef } from "react";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

import {
  useSplitTextAnimation,
  useFloatingCursor,
} from "../splittextAnimation/useSplitTextAnimation";

import arrowUp from "../../images/arrow-up.svg";

/* ===== TYPES ===== */
interface AboutItem {
  id: number;
  value: number;
  suffix?: string;
  label: string;
}

/* ===== DATA ===== */
const aboutData: AboutItem[] = [
  {
    id: 1,
    value: 15,
    label: "Years of experience providing professional cleaning services",
  },
  {
    id: 2,
    value: 12,
    suffix: "k",
    label: "Homes and offices cleaned with care",
  },
  {
    id: 3,
    value: 350,
    label: "Recurring clients who trust our team",
  },
  {
    id: 4,
    value: 98,
    suffix: "%",
    label: "Customer satisfaction rate",
  },
];

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(containerRef);
  useFloatingCursor(containerRef);

  return (
    <section className="wpo-about-section moving-cursor-wrap" ref={containerRef}>

      <div className="container">

        {/* TITLE */}
        <div className="about-title">
          <h2 className="poort-text poort-in-right">
            We are a <span>team</span> of professional cleaning experts dedicated to
            creating spotless spaces. Founded in <span>2018</span>, our mission is to
            keep homes and businesses <span>clean, fresh, and healthy</span>.
          </h2>
        </div>

        {/* COUNTERS */}
        <div className="about-content">
          {aboutData.map((item, index) => (
            <Fade className="about-items" key={item.id} direction="up" delay={index * 100} triggerOnce>
             <div>
              <h2>
                <span>
                  <CountUp
                    end={item.value}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>
                {item.suffix}
              </h2>

              <h3>
                <span>{item.label.charAt(0).toLowerCase()}</span>
                {item.label.slice(1)}
              </h3>
             </div>
            </Fade>
          ))}
        </div>

      </div>

      {/* BUTTON */}
      <div className="booking-btn">
        <Link to="/about" className="btn-wrapper moving-cursor">
          <small>
            <i>
              <img src={arrowUp} alt="icon" />
            </i>
            about us
          </small>
        </Link>
      </div>


    </section>
  );
};

export default AboutSection;