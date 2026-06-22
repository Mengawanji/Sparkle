import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import MarqueeSection from "../../components/MarqueeSection/MarqueeSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

import teamMembers from "../../api/team";

import certificate1 from "../../images/certificate/1.jpg";
import certificate2 from "../../images/certificate/2.jpg";
import certificate3 from "../../images/certificate/3.jpg";
import certificate4 from "../../images/certificate/4.jpg";

const TeamSinglePage: React.FC = () => {

  const { slug } = useParams<{ slug: string }>();

  const TeamDetails = teamMembers.find(
    (item) => item.slug === slug
  );

  const SubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  if (!TeamDetails) {
    return <div style={{ padding: "120px", textAlign: "center" }}>Team member not found</div>;
  }

  return (
    <Fragment>

      <Navbar />

      <PageTitle
        pageTitle={`Better Plumbing Better Living`}
        pagesub={TeamDetails.name}
        pclass={'wpo-page-title-s2'}
      />

      <div className="team-pg-area section-padding">

        <div className="container">

          <div className="team-single-wrap">

            {/* TEAM INFO */}
            <div className="team-info-wrap">

              <div className="row align-items-center">

                <div className="col-lg-5">

                  <div className="team-info-img">

                    <img
                      src={TeamDetails.image}
                      alt={TeamDetails.name}
                    />

                  </div>

                </div>

                <div className="col-lg-7">

                  <div className="team-info-text">

                    <h2>{TeamDetails.name}</h2>

                    <ul>

                      <li>
                        Position:
                        <span>{TeamDetails.role}</span>
                      </li>

                      <li>
                        Practice Area:
                        <span>
                          Plumbing, Bathroom Fittings
                        </span>
                      </li>

                      <li>
                        Experience:
                        <span>12 Years</span>
                      </li>

                      <li>
                        Address:
                        <span>
                          6391 Elgin St. Celina,
                          Delaware 10299
                        </span>
                      </li>

                      <li>
                        Phone:
                        <span>+00 568 746 987</span>
                      </li>

                      <li>
                        Email:
                        <span>youremail@gmail.com</span>
                      </li>

                    </ul>

                    {/* CERTIFICATES */}
                    <div className="certificates-wrap">

                      <h2>Certificates</h2>

                      <div className="certificates-items">

                        <div className="certificates-item">
                          <img src={certificate1} alt="" />
                        </div>

                        <div className="certificates-item">
                          <img src={certificate2} alt="" />
                        </div>

                        <div className="certificates-item">
                          <img src={certificate3} alt="" />
                        </div>

                        <div className="certificates-item">
                          <img src={certificate4} alt="" />
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* EXPERIENCE */}
            <div className="team-exprience-area team-widget">

              <div className="row">

                <div className="col-lg-6">

                  <div className="exprience-wrap">

                    <h2>Personal Experience</h2>

                    <p>
                      There are many variations of passages
                      of Lorem Ipsum available, but the
                      majority have suffered alteration in
                      some form, by injected humour, or
                      randomised words which don’t look
                      even slightly believable.
                    </p>

                    <p>
                      All the Lorem Ipsum generators on
                      the Internet tend to repeat predefined
                      chunks as necessary, making this the
                      first true generator on the Internet.
                    </p>

                  </div>

                </div>

                <div className="col-lg-6">

                  <div className="education-area">

                    <h2>Education</h2>

                    <ul>

                      <li>
                        Academy University School of
                        plumbing, Boston, MA
                      </li>

                      <li>
                        Admization Institute of plumbing
                        and Technology
                      </li>

                      <li>
                        The Syntify High School Of New York
                      </li>

                      <li>
                        Education & Court Admissions
                      </li>

                      <li>
                        Management School of Cambridge
                      </li>

                    </ul>

                  </div>

                </div>

              </div>


              {/* SKILLS */}
              <div className="skills-area">

                <div className="row">

                  <div className="col-lg-6">

                    <div className="exprience-wrap">

                      <h2>Skills</h2>

                      <div className="wpo-skill-progress">

                        <div className="wpo-progress-single">

                          <h5 className="progress-title">
                            Pipe Fittings
                          </h5>

                          <div className="progress">

                            <div
                              className="progress-bar"
                              style={{ width: "85%" }}
                            ></div>

                          </div>

                          <span className="progress-number">
                            85%
                          </span>

                        </div>


                        <div className="wpo-progress-single">

                          <h5 className="progress-title">
                            Basine Repair
                          </h5>

                          <div className="progress">

                            <div
                              className="progress-bar"
                              style={{ width: "80%" }}
                            ></div>

                          </div>

                          <span className="progress-number">
                            80%
                          </span>

                        </div>


                        <div className="wpo-progress-single">

                          <h5 className="progress-title">
                            Bedroom Pipe Line
                          </h5>

                          <div className="progress">

                            <div
                              className="progress-bar"
                              style={{ width: "95%" }}
                            ></div>

                          </div>

                          <span className="progress-number">
                            95%
                          </span>

                        </div>


                        <div className="wpo-progress-single">

                          <h5 className="progress-title">
                            Gas Line Fittings
                          </h5>

                          <div className="progress">

                            <div
                              className="progress-bar"
                              style={{ width: "70%" }}
                            ></div>

                          </div>

                          <span className="progress-number">
                            70%
                          </span>

                        </div>

                      </div>

                    </div>

                  </div>


                  <div className="col-lg-6">

                    <div className="education-area ex-wiget">

                      <h2>Achievements</h2>

                      <ul>

                        <li>
                          Best Plumber award 2017
                        </li>

                        <li>
                          Specials awards for Plumber
                          activity 2018
                        </li>

                        <li>
                          Won 100 awards in 2025
                        </li>

                        <li>
                          Super Plumber Top 50 Plumber in USA
                        </li>

                        <li>
                          Young star Award at Plumber in 2025
                        </li>

                        <li>
                          Greatest Plumber Top 10
                        </li>

                      </ul>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* CONTACT FORM */}
            <div className="wpo-contact-area ex-wiget">

              <div className="wpo-contact-title">

                <h2>Make an Appointment</h2>

                <p>
                  Do not put off until tomorrow the problems that need to be solved today.
                </p>

              </div>


              <div className="quote-form">

                <form onSubmit={SubmitHandler}>

                  <div className="form-group half-col">
                    <input type="text" className="form-control" placeholder="Name:" name="name" />
                  </div>

                  <div className="form-group half-col">
                    <input type="email" className="form-control" placeholder="Email:" name="email" />
                  </div>

                  <div className="form-group half-col">
                    <input type="text" className="form-control" placeholder="Phone" name="phone" />
                  </div>

                  <div className="form-group half-col">

                    <select name="subject" className="form-control">

                      <option disabled selected>Subject</option>
                      <option>Pipe Fittings</option>
                      <option>Basine Repair</option>
                      <option>Bedroom Pipe Line</option>
                      <option>Gas Line Fittings</option>

                    </select>

                  </div>

                  <div className="form-group full-col">
                    <textarea className="form-control" name="note" placeholder="Case Description"></textarea>
                  </div>

                  <div className="form-group full-col text-center">
                    <button className="btn theme-btn-s2" type="submit">
                      Appointment
                    </button>
                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>
      <MarqueeSection />
      <Footer />
      <Scrollbar />

    </Fragment>
  );
};

export default TeamSinglePage;