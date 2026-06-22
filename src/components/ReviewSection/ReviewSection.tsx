import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* IMAGES */
import img1 from "../../images/review/1.jpg";
import img2 from "../../images/review/2.jpg";
import review1 from "../../images/review/review-1.png";
import review2 from "../../images/review/review-2.png";

gsap.registerPlugin(ScrollTrigger);

/* TYPES */
interface ReviewItem {
  id: number;
  type: "image" | "content";
  image?: string;
  avatar?: string;
  text?: string;
}

/* DATA */
const reviews: ReviewItem[] = [
  { id: 1, type: "image", image: img1 },
  {
    id: 2,
    type: "content",
    avatar: review1,
    text: "Cleaning hires great people from a widely variety of background which simply makes our company.",
  },
  { id: 3, type: "image", image: img2 },
  {
    id: 4,
    type: "content",
    avatar: review2,
    text: "Cleaning hires great people from a widely variety of background which simply makes our company.",
  },
];

const ReviewSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".review-items");

      if (!items.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power1.out",
          duration: 1,
        },
      });

      tl.from(items[0], { xPercent: 120 })
        .from(items[1], { xPercent: 45 }, "<")
        .from(items[2], { xPercent: -45 }, "<")
        .from(items[3], { xPercent: -130 }, "<");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wpo-review-section section-padding">
      <h2 className="d-none">Reviews</h2>

      <div className="container">
        <div className="review-wrap" ref={sectionRef}>

          {reviews.map((item) => (
            <div key={item.id} className="review-items">

              {item.type === "image" && (
                <div className="image">
                  <img src={item.image} alt="review" />
                </div>
              )}

              {item.type === "content" && (
                <div className="review-content">
                  <div className="image-review">
                    <img src={item.avatar} alt="user" />
                  </div>

                  <div className="review-text">
                    <p>{item.text}</p>
                  </div>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ReviewSection;