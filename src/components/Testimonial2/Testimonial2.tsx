import React from "react";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";

import star from "../../images/star.svg";

interface TestimonialItem {
  id: number;
  text: string;
  name: string;
  role: string;
}

const TestimonialSectionS2: React.FC = () => {

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      text: "The team arrived on time and left my home spotless. Their attention to detail exceeded my expectations.",
      name: "Robert J. Hare",
      role: " Enterprise Architect",
    },

    {
      id: 2,
      text: "Professional, reliable, and friendly. They transformed our office into a clean and welcoming workspace.",
      name: "James Baker",
      role: "Corporate Controller",
    },

    {
      id: 3,
      text: "Outstanding service at a fair price. I highly recommend them to anyone looking for quality cleaning.",
      name: "Aliza Anny",
      role: "Nurse Practitioners",
    },
  ];


  const settings = {
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    infinite: true,
    pauseOnHover: true,
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (

    <section className="wpo-testimonial-section-2 section-padding">

      <div className="container">

        {/* SECTION TITLE */}
        <div className="row align-items-center justify-content-center">

          <div className="col-lg-6 col-12">

            <div className="wpo-section-title">

              <span>testimonial</span>

              <h2 className="poort-text poort-in-right">
                Trusted by many for Fast Reliable Cleaning
              </h2>

            </div>

          </div>

        </div>

        {/* SLIDER */}
        <Fade
          direction="up"
          duration={1200}
          triggerOnce
        >

          <Slider
            {...settings}
            className="testimonial-left-side-s2"
          >

            {testimonials.map((item) => (

              <div key={item.id}>

                <div className="testimonial-items">

                  {/* ICON */}
                  <div className="testimonial-icon">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 52"
                      fill="none"
                    >

                      <path
                        d="M63.6796 25.5898L63.3593 0.965733L36.9608 1.33465L37.2812 25.9587L54.8812 25.7127C54.9328 30.0651 53.1315 34.2638 49.8726 37.3875C46.6137 40.5111 42.1633 42.3047 37.498 42.3747L37.6048 50.5827C44.6028 50.4777 51.2783 47.7874 56.1666 43.1019C61.055 38.4164 63.7569 32.1184 63.6796 25.5898H63.6796Z"
                        fill="#1A3C03"
                      />

                      <path
                        d="M0.533827 42.8911L0.640611 51.0991C7.63919 50.995 14.3156 48.305 19.2046 43.6194C24.0936 38.9338 26.796 32.6353 26.7187 26.1062L26.3984 1.48215L-9.01442e-05 1.85107L0.32026 26.4751L17.9171 26.2292C17.9686 30.5816 16.1673 34.7803 12.9084 37.9039C9.6495 41.0276 5.19917 42.8212 0.533827 42.8911Z"
                        fill="#1A3C03"
                      />

                    </svg>

                  </div>

                  {/* CONTENT */}
                  <div className="testimonial-content">

                    <p>"{item.text}"</p>

                    <div className="testimonial-client">

                      <div className="name">

                        <h4>{item.name}/</h4>

                        <span>{item.role}</span>

                      </div>

                      {/* STARS */}
                      <div className="star">

                        <ul>

                          {[...Array(5)].map((_, index) => (

                            <li key={index}>

                              <img
                                src={star}
                                alt="star"
                              />

                            </li>

                          ))}

                        </ul>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </Slider>

        </Fade>

      </div>

    </section>
  );
};

export default TestimonialSectionS2;