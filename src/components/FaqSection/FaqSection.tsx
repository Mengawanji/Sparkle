import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: "What cleaning services do you offer?",
      answer:
        "We provide regular home cleaning, deep cleaning, move-in/move-out cleaning, office cleaning, kitchen and bathroom cleaning, and customized cleaning solutions.",
    },

    {
      id: 2,
      question: "Do I need to provide cleaning supplies and equipment?",
      answer:
        "No. Our professional cleaners arrive fully equipped with high-quality cleaning products and equipment. If you have specific product preferences, we're happy to accommodate them.",
    },

    {
      id: 3,
      question: "How long does a typical cleaning service take?",
      answer:
        "The duration depends on the size and condition of your property. Most standard home cleanings take between 2 and 4 hours, while deep cleaning may require additional time.",
    },

    {
      id: 4,
      question: "Can I schedule recurring cleaning services?",
      answer:
        "Absolutely! We offer weekly, bi-weekly, and monthly cleaning plans to keep your home or office consistently clean and fresh.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  

  return (
    <section className="wpo-faq-section">

      <div className="container">

        <div className="wpo-faq-wrap">

          <div className="row">

            {/* Left Side */}
            <div className="col-lg-6 col-12">

              <Fade
                direction="left"
                duration={1200}
                triggerOnce
              >

                <div className="wpo-faq-box">

                  <div className="wpo-section-title-s2">

                    <span>frequently ask question</span>

                    <h2 className="poort-text poort-in-right">
                      Freequently ask questions...
                    </h2>

                    <p>
                      We deliver reliable, high-quality cleaning services that leave your home or
                      workplace spotless. Our experienced team pays attention to every detail,
                      ensuring a clean, healthy, and welcoming environment every time.
                    </p>

                  </div>

                  <Link
                    to="/appointment"
                    className="theme-btn-s4"
                    
                  >
                    Book An Appointment
                  </Link>

                </div>

              </Fade>

            </div>

            {/* Right Side */}
            <div className="col-lg-6 col-12">

              <Fade
                direction="right"
                duration={1200}
                triggerOnce
              >

                <div className="wpo-faq-items">

                  <div className="accordion">

                    {faqs.map((faq, index) => (

                      <div
                        key={faq.id}
                        className={`accordion-item ${
                          activeIndex === index ? "active" : ""
                        }`}
                      >

                        <h3
                          className="accordion-header"
                          onClick={() => toggleFaq(index)}
                        >

                          <button className="accordion-button">

                            {faq.question}

                          </button>

                        </h3>

                        {activeIndex === index && (

                          <div className="accordion-body">

                            <p>{faq.answer}</p>

                          </div>

                        )}

                      </div>

                    ))}

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

export default FaqSection;