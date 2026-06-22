import React, { useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

import {
  useFloatingCursor,
} from "../splittextAnimation/useSplitTextAnimation";

import ctaImg from "../../images/cta.jpg";

import VideoModal from "../VideoModal/VideoModal";

const CTASection: React.FC = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);

  useFloatingCursor(containerRef);

  /* VIDEO MODAL */
  const [open, setOpen] = useState(false);

  return (
    <section
      className="wpo-cta-section moving-cursor-wrap"
      ref={containerRef}
    >

      {/* Hidden Title */}
      <h2 className="d-none">display none</h2>

      <Fade direction="up" duration={1200} triggerOnce>

        <div className="cta-image">

          {/* IMAGE */}
          <img src={ctaImg} alt="cta" />

          {/* FLOATING VIDEO BUTTON */}
          <div className="booking-btn">

            <button
              type="button"
              className="btn-wrapper moving-cursor video-btn"
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
                  fill="#3CA200"
                />
              </svg>

            </button>

          </div>

        </div>

      </Fade>

      {/* VIDEO MODAL */}
      <VideoModal
        isOpen={open}
        videoId="UT1Ko2lpT10"
        onClose={() => setOpen(false)}
      />

    </section>
  );
};

export default CTASection;