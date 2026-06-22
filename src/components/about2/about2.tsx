import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";
import VideoModal from "../VideoModal/VideoModal";

import {
  useSplitTextAnimation,
  useFloatingCursor,
} from "../splittextAnimation/useSplitTextAnimation";

import aboutImg from "../../images/about/about-image.jpg";

interface AboutItem {
  id: number;
  value: number;
  suffix?: string;
  label: string;
}

const aboutData: AboutItem[] = [
  {
    id: 1,
    value: 145,
    label: "Years of experience we give cleaning service",
  },
  {
    id: 2,
    value: 85,
    label: "Trusted clients across Canada",
  },
  {
    id: 3,
    value: 24,
    label: "Professional cleaning teams available",
  },
  {
    id: 4,
    value: 365,
    label: "Days a year customer support available",
  },
];

const AboutSection2: React.FC = () => {

  /* VIDEO MODAL */
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(containerRef);
  useFloatingCursor(containerRef);

  return (

    <section
      className="wpo-about-section-2 moving-cursor-wrap"
      ref={containerRef}
    >

      {/* VIDEO MODAL */}
      <VideoModal
        isOpen={open}
        videoId="UT1Ko2lpT10"
        onClose={() => setOpen(false)}
      />
      
      <div className="container">

        {/* TITLE */}
        <div className="about-title">

          <h2 className="poort-text poort-in-right">
            We are <span>team</span> of professional
            <span> cleaning experts</span> dedicated to
            <span> helping</span> homeowners enjoy <span> cleaner</span> &
            <span> healthier</span> environments every day.
          </h2>

        </div>

        {/* IMAGE */}
        <Fade
          direction="up"
          duration={1200}
          triggerOnce
        >

          <div className="about-image">

            <div className="about-image-style-2">

              <img
                src={aboutImg}
                alt="about"
              />

              <div className="video-holder">

                <button
                  className="video-btn"
                  onClick={() => setOpen(true)}
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19 22"
                    fill="none"
                  >

                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.761719 0.591309L9.92688 5.89288L19.008 11.28L9.92688 16.5815L0.761719 21.9686L0.761719 11.28L0.761719 0.591309Z"
                      fill="white"
                    />

                  </svg>

                </button>

              </div>

            </div>

          </div>

        </Fade>

        {/* COUNTERS */}
        <div className="about-content">

          {aboutData.map((item, index) => (

            <Fade
              className="about-items"
              key={item.id}
              direction="up"
              delay={index * 100}
              triggerOnce
            >

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

                  <span>
                    {item.label.charAt(0).toLowerCase()}
                  </span>

                  {item.label.slice(1)}

                </h3>

              </div>

            </Fade>

          ))}

        </div>

      </div>

    </section>
  );
};

export default AboutSection2;