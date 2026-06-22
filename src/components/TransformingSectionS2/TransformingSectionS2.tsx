import React, { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useSplitTextAnimation } from "../splittextAnimation/useSplitTextAnimation";
import afterImg from "../../images/before-after/before-img.jpg";
import beforeImg from "../../images/before-after/after-img.jpg";

interface TransformingSectionS2Props {
  tClass?: string;
}

const TransformingSectionS2: React.FC<
  TransformingSectionS2Props
> = ({ tClass = "" }) => {

  const containerRef = useRef<HTMLDivElement | null>(null);

  const sliderRef = useRef<HTMLInputElement | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);
  useSplitTextAnimation(ref);

  useEffect(() => {

    const container = containerRef.current;

    const slider = sliderRef.current;

    if (!container || !slider) return;

    container.style.setProperty("--position", "50%");

    const handleInput = () => {

      container.style.setProperty(
        "--position",
        `${slider.value}%`
      );

    };

    slider.addEventListener("input", handleInput);

    return () => {
      slider.removeEventListener("input", handleInput);
    };

  }, []);

  return (

    <section className={`transforming-section-2 section-padding ${tClass}`} ref={ref} >

      <div className="container">

        <div className="transforming-wrap">

          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-lg-7">

              <Fade
                direction="left"
                duration={1200}
                triggerOnce
              >

                <div className="wpo-transforming-left-side">

                  <div
                    className="wpo-transforming-left-img"
                    ref={containerRef}
                  >

                    <div className="transforming-image-container">

                      <img
                        className="transforming-image-before slider-image"
                        src={beforeImg}
                        alt="before"
                      />

                      <img
                        className="transforming-image-after slider-image"
                        src={afterImg}
                        alt="after"
                      />

                    </div>

                    <input
                      ref={sliderRef}
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="50"
                      className="slider"
                      aria-label="Percentage of before photo shown"
                    />

                    <div
                      className="transforming-slider-line"
                      aria-hidden="true"
                    ></div>

                    <div
                      className="transforming-slider-button"
                      aria-hidden="true"
                    >

                      Drag

                    </div>

                  </div>

                  <div className="before">
                    <span>before</span>
                  </div>

                  <div className="after">
                    <span>After</span>
                  </div>

                </div>

              </Fade>

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-5">

              <Fade
                direction="right"
                duration={1200}
                triggerOnce
              >

                <div className="wpo-transforming-right-side">

                  <div className="wpo-section-title-s2">

                    <h2 className="poort-text poort-in-right">
                      Bringing Freshness and Comfort to Every Space
                    </h2>

                    <p>
                      Experience professional cleaning services 
                      designed to leave every corner spotless 
                      and every client delighted.
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

                  <div className="transforming-btns">

                    <Link
                      to="/contact"
                      className="theme-btn-s2"
                    >

                      Try yours now

                    </Link>

                    <Link
                      to="/about"
                      className="theme-btn-s3"
                    >

                      <span className="rolling-text">
                        Learn More
                      </span>

                    </Link>

                  </div>

                </div>

              </Fade>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TransformingSectionS2;