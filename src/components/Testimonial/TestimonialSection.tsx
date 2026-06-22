import React from "react";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import star from "../../images/star.svg";
import { useRef } from "react";
import { useSplitTextAnimation } from "../splittextAnimation/useSplitTextAnimation";
import testimonialImg from "../../images/testimonial/image.jpg";
import logo1 from "../../images/testimonial/logo-1.png";
import logo2 from "../../images/testimonial/logo2.png";

interface TestimonialItem {
  id: number;
  text: string;
  name: string;
  role: string;
}

const TestimonialSection: React.FC = () => {

  const ref = useRef<HTMLDivElement | null>(null);
  
    useSplitTextAnimation(ref);
  

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      text: "The plumber was polite, explained everything clearly, and fixed my water heater the same day. Great service from start to finish.",
      name: "Robert J. Hare",
      role: "Graphics Designer",
    },
    {
      id: 2,
      text: "Excellent service and very professional team. They solved the issue quickly and efficiently while ensuring everything was clean.",
      name: "John Doe",
      role: "Developer",
    },
    {
      id: 3,
      text: "Very fast response and affordable pricing. Highly recommended plumbing service with professional staff, quality workmanship.",
      name: "Michael Smith",
      role: "Business Owner",
    },
  ];

  const settings = {
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    pauseOnHover: true,
  };

  return (
    <section className="wpo-testimonial-section section-padding pb-0" ref={ref}>

      <div className="container">

        <div className="row align-items-center justify-content-center">

          <div className="col-lg-6">

            <div className="wpo-section-title">

              <span>testimonial</span>

              <h2 className="poort-text poort-in-right">
                Trusted by Hundreds for Fast Reliable Plumbing
              </h2>

            </div>

          </div>

        </div>

        <div className="testimonial-border">

          <div className="row">

            {/* Left Side */}
            <div className="col-lg-6 col-md-12 col-12">

              <Slider
                {...settings}
                className="testimonial-left-side"
              >

                {testimonials.map((item, i) => (

                  <Fade
                    key={item.id}
                    direction="up"
                    duration={1000 + i * 200}
                    triggerOnce
                  >

                    <div>

                      <div className="testimonial-items">

                        <div className="testimonial-icon">

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 52"
                            fill="none"
                          >

                            <path
                              d="M63.6796 25.5898L63.3593 0.965794L36.9608 1.33471L37.2812 25.9587L54.8812 25.7128C54.9328 30.0652 53.1315 34.2639 49.8726 37.3875C46.6137 40.5112 42.1633 42.3048 37.498 42.3747L37.6048 50.5827C44.6028 50.4778 51.2783 47.7874 56.1666 43.1019C61.055 38.4164 63.7569 32.1184 63.6796 25.5898H63.6796Z"
                              fill="#DADADA"
                            />

                            <path
                              d="M0.533827 42.8911L0.640611 51.0991C7.63919 50.995 14.3156 48.305 19.2046 43.6194C24.0936 38.9338 26.796 32.6353 26.7187 26.1062L26.3984 1.48215L-9.01442e-05 1.85107L0.32026 26.4751L17.9171 26.2292C17.9686 30.5816 16.1673 34.7803 12.9084 37.9039C9.6495 41.0276 5.19917 42.8212 0.533827 42.8911Z"
                              fill="#DADADA"
                            />

                          </svg>

                        </div>

                        <div className="testimonial-content">

                          <p>"{item.text}"</p>

                          <div className="testimonial-client">

                            <div className="name">
                              <h4>{item.name}/</h4>
                              <span>{item.role}</span>
                            </div>

                            <div className="star">

                              <ul>

                                {[...Array(5)].map((_, index) => (
                                  <li key={index}>
                                    <img src={star} alt="icon" />
                                  </li>
                                ))}

                              </ul>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </Fade>

                ))}

              </Slider>

            </div>

            {/* Right Side */}
            <div className="col-lg-6 col-md-12 col-12">
              <Fade
                direction="up"
                duration={1000}
                triggerOnce
              >
                <div className="testimonial-right">

                  <img
                    src={testimonialImg}
                    alt="testimonial"
                  />

                  <div className="bottom-logos">

                    <div className="bottom-logo-item">

                      <div className="b-logo">
                        <img src={logo1} alt="logo" />
                      </div>

                      <div className="b-logo">
                        <img src={logo2} alt="logo" />
                      </div>

                    </div>

                    <div className="left-shape">

                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 105 111"
                        preserveAspectRatio="xMidYMid meet"
                      >

                        <path
                          d="M0 0 C0 34.98 0 69.96 0 106 C-34.65 106 -69.3 106 -105 106 C-105 103.69 -105 101.38 -105 99 C-103.828 98.974 -102.656 98.948 -101.449 98.922 C-87.737 98.486 -76.616 96.421 -66 87 C-56.318 76.465 -54.445 63.636 -54.438 49.812 C-54.381 34.753 -51.779 23.127 -41.375 11.75 C-34.571 5.274 -25.654 1.108 -16.27 0.684 C-15.385 0.642 -14.5 0.6 -13.588 0.557 C-12.672 0.517 -11.756 0.478 -10.812 0.438 C-9.885 0.394 -8.958 0.351 -8.002 0.307 C-1.348 0 -1.348 0 0 0 Z"
                          fill="#ffffff"
                          transform="translate(105,5)"
                        />

                      </svg>

                    </div>

                    <div className="right-shape">

                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 105 111"
                        preserveAspectRatio="xMidYMid meet"
                      >

                        <path
                          d="M0 0 C31.067 1.479 31.067 1.479 44.188 15.188 C50.968 23.075 54.067 31.852 54.176 42.156 C54.212 43.939 54.212 43.939 54.248 45.758 C54.29 48.221 54.322 50.685 54.342 53.148 C54.634 65.779 57.252 77.481 66 87 C77.667 97.353 90.069 98.671 105 99 C105 101.31 105 103.62 105 106 C70.35 106 35.7 106 0 106 C0 71.02 0 36.04 0 0 Z"
                          fill="#ffffff"
                          transform="translate(0,5)"
                        />

                      </svg>

                    </div>

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

export default TestimonialSection;