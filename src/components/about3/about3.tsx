import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

import VideoModal from "../VideoModal/VideoModal";

import aboutImg from "../../images/about/about-2.jpg";

import {
  useSplitTextAnimation,
} from "../splittextAnimation/useSplitTextAnimation";

interface AboutItem {
  id: number;
  value: number;
  suffix?: string;
  title: string;
}

const aboutData: AboutItem[] = [
  {
    id: 1,
    value: 145,
    title: "Years of Experience",
  },

  {
    id: 2,
    value: 74,
    suffix: "k",
    title: "Satisfied Clients",
  },

  {
    id: 3,
    value: 134,
    title: "Team Members",
  },

  {
    id: 4,
    value: 85,
    title: "Customer Retention Rate",
  },
];

const AboutSection3: React.FC = () => {

  /* VIDEO MODAL */
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (

    <section
      className="wpo-about-section-3"
      ref={ref}
    >

      {/* VIDEO MODAL */}
      <VideoModal
        isOpen={open}
        videoId="fjopH5PZaC0"
        onClose={() => setOpen(false)}
      />

      <div className="container-fluid">

        <div className="wraper">

          <div className="row">

            {/* LEFT IMAGE */}
            <div className="col-lg-6">

              <Fade
                direction="left"
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

            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6">

              <Fade
                direction="right"
                duration={1200}
                triggerOnce
              >

                <div className="wpo-about-right-side">

                  <div className="wpo-section-title-s2">

                    <h2 className="poort-text poort-in-right">
                      The Pipe Whisperers –
                      Fixing Flows with Finesse.
                    </h2>

                    <p>
                      At Clanyco, we’re committed to
                      keeping homes and businesses
                      running smoothly with expert
                      plumbing solutions you can trust.
                      Whether it’s a dripping tap,
                      a clogged drain, or a full-scale
                      installation, our licensed
                      professionals deliver fast,
                      reliable, and clean service
                      every time.
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

                  <div className="about-btn">

                    <Link
                      to="/contact"
                      className="theme-btn-s2"
                    >

                      book now

                    </Link>

                  </div>

                </div>

              </Fade>

            </div>

          </div>

          {/* COUNTERS */}
          <div className="about-bottom-wraper">

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

                    <h3>{item.title}</h3>

                  </div>

                </Fade>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection3;