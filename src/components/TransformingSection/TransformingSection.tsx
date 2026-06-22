import React from "react";
import { Fade } from "react-awesome-reveal";

import beforeImg from "../../images/4.png";
import afterImg from "../../images/5.png";

const TransformingSection: React.FC = () => {
  return (
    <section className="wpo-transforming-section">

      {/* Hidden SEO heading */}
      <h2 className="d-none">Before After Transformation</h2>

      <div className="transforming-wrap">

        {/* BEFORE */}
        <Fade direction="left" duration={1000} triggerOnce>
          <div className="transforming-image">

            <img src={beforeImg} alt="before" />

            <div className="text">
              <span>Before</span>
            </div>

          </div>
        </Fade>

        {/* AFTER */}
        <Fade direction="right" duration={1000} triggerOnce>
          <div className="transforming-image">

            <img src={afterImg} alt="after" />

            <div className="text s2">
              <span>After</span>
            </div>

          </div>
        </Fade>

      </div>

    </section>
  );
};

export default TransformingSection;