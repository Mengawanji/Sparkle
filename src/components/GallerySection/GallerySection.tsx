import React from "react";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import { useSplitTextAnimation } from "../splittextAnimation/useSplitTextAnimation";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// images
import gImg1 from "../../images/gallery/1.jpg";
import gImg2 from "../../images/gallery/2.jpg";
import gImg3 from "../../images/gallery/3.jpg";
import gImg4 from "../../images/gallery/4.jpg";

/* ===== GALLERY DATA ===== */
const galleryImages = [
  {
    id: 1,
    image: gImg1,
  },
  {
    id: 2,
    image: gImg2,
  },
  {
    id: 3,
    image: gImg3,
  },
  {
    id: 4,
    image: gImg4,
  },
];

interface GallerySectionProps {
  hideTop?: boolean;
  gClass?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({
  hideTop = false,
  gClass = "",
}) => {

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  return (
    <section className={`wpo-gallery-section ${gClass}`} ref={ref}>

      <div className="container-fluid">

        {/* ===== TITLE ===== */}
        {!hideTop && (
          <div className="gallery-title">

            <span>Work Gallery</span>

            <h2 className="poort-text poort-in-right">
              We are professionally committed to delivering exceptional
               cleaning services that ensure our clients'
            </h2>

          </div>
        )}


        {/* ===== GALLERY ===== */}
        <div className="gallery-wrap">

          <div className="gallery-items">

            {galleryImages.map((item, i) => (

              <Fade
                key={item.id}
                direction="up"
                duration={1000 + i * 200}
                triggerOnce
              >

                <div className="gallery-image">

                  <button
                    className="img-holder"
                    onClick={() => {
                      setIndex(i);
                      setOpen(true);
                    }}
                  >

                    <img
                      src={item.image}
                      alt={`gallery-${item.id}`}
                      className="img img-responsive"
                    />

                  </button>

                </div>

              </Fade>

            ))}

          </div>

        </div>

      </div>

      {/* ===== LIGHTBOX ===== */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={galleryImages.map((item) => ({
          src: item.image,
        }))}
      />

    </section>
  );
};

export default GallerySection;