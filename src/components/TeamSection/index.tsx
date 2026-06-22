// TeamSection.tsx

import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import { useSplitTextAnimation } from "../splittextAnimation/useSplitTextAnimation";
import teamMembers from "../../api/team";


interface TeamSectionProps {
  hideshape?: boolean;
  tClass?: string;
  teamNumber?: number;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  hideshape = false,
  tClass = "",
  teamNumber = 4,
}) => {

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  

  return (
    <section className={`wpo-team-section ${tClass}`} ref={ref}>

      <div className="container-fluid">

        <div className="wpo-section-title">

          <span>team members</span>

          <h2 className="poort-text poort-in-right">
            Meet Our Expert Plumbing Team
          </h2>

        </div>

        <div className="team-wrap">

          <div className="row">

            {teamMembers.slice(0, teamNumber).map((member, index) => (

              <div
                key={member.id}
                className="col-lg-3 col-sm-6 col-12"
              >

                <Fade
                  direction="up"
                  duration={1000 + index * 200}
                  triggerOnce
                >

                  <div className="team-card">

                    <div className="image">

                      <img
                        src={member.image}
                        alt={member.name}
                      />

                      <div className="social">
                        <ul>

                          <li>
                            <a href={member.social.facebook}>
                              <i className="ti-facebook"></i>
                            </a>
                          </li>

                          <li>
                            <a href={member.social.twitter}>
                              <i className="ti-twitter-alt"></i>
                            </a>
                          </li>

                          <li>
                            <a href={member.social.instagram}>
                              <i className="ti-instagram"></i>
                            </a>
                          </li>

                          <li>
                            <a href={member.social.linkedin}>
                              <i className="ti-linkedin"></i>
                            </a>
                          </li>

                        </ul>
                      </div>


                    </div>

                    <div className="text">

                      <h2>

                        <Link
                          
                          to={`/team-single/${member.slug}`}
                        >
                          {member.name}
                        </Link>

                      </h2>

                      <span>{member.role}</span>

                    </div>

                  </div>

                </Fade>

              </div>

            ))}

          </div>

        </div>

        {!hideshape && (
          <>
            <div className="bottom-shape">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1920"
                height="938"
                viewBox="0 0 1920 938"
                fill="none"
              >

                <path
                  d="M1920 914C1920 927.255 1909.25 938 1896 938H1132C1118.75 938 1108 927.255 1108 914V878C1108 864.745 1097.25 854 1084 854H835C821.745 854 811 864.745 811 878V914C811 927.255 800.255 938 787 938H23C9.74515 938 -1 927.255 -1 914V24C-1 10.7452 9.74517 0 23 0H1896C1909.25 0 1920 10.7452 1920 24V914Z"
                  fill="url(#paint0_linear_887_1406)"
                />

                <defs>

                  <linearGradient
                    id="paint0_linear_887_1406"
                    x1="959.5"
                    y1="-93"
                    x2="959.5"
                    y2="938"
                    gradientUnits="userSpaceOnUse"
                  >

                    <stop
                      offset="0"
                      stopColor="#E5F4DC"
                      stopOpacity="0"
                    />

                    <stop
                      offset="1"
                      stopColor="#E5F4DC"
                    />

                  </linearGradient>

                </defs>

              </svg>

            </div>
            <div className="team-btn">

              <Link
                to="/appoinment"
                className="theme-btn-s4"
                
              >
                Book An Appointment
              </Link>

            </div>
          </>
        )}



      </div>

    </section>
  );
};

export default TeamSection;