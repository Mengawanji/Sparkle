import React from "react";

import marqueeShape from "../../images/marquee-shape.png";

interface MarqueeItem {
  id: number;
  text: string;
}

const MarqueeSection: React.FC = () => {

  const marqueeItems: MarqueeItem[] = [
    {
      id: 1,
      text: "8 AM – 6 PM Saturday: 9 AM – 4 PM Sunday: Closed",
    },

    {
      id: 2,
      text: "Ottawa, Kingston and Salaberry de valleyfield",
    },

    {
      id: 3,
      text: "Get In Touch — phone: +1 519 577 1711",
    },
  ];

  return (

    <section className="marquee-section">

      <div className="marquee_container">

        {[1, 2].map((_, index) => (

          <div
            className="marquee"
            key={index}
          >

            {marqueeItems.map((item) => (

              <h2 key={item.id}>

                <img
                  src={marqueeShape}
                  alt="icon"
                />

                {item.text}

              </h2>

            ))}

          </div>

        ))}

      </div>

    </section>

  );
};

export default MarqueeSection;