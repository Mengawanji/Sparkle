import React from "react";
import { useRef } from "react";
import { useSplitTextAnimation } from "../splittextAnimation/useSplitTextAnimation";
import bookingImg from "../../images/booking.jpg";
import sparkleIcon from "../../images/cleaning-icon.svg";
import BookingForm from "../BookingForm/BookingForm";

interface BookingSectionProps {
  hideTop?: boolean;
  bClass?: string;
}

const BookingSection: React.FC<BookingSectionProps> = ({
  bClass = "",
}) => {

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (

    <section className={`wpo-booking-section ${bClass}`} ref={ref}>

      <div className="cta-image">

        <img
          src={bookingImg}
          alt="booking"
        />

      </div>

      <div className="wpo-contact-form-area">

        <div className="wpo-section-title">

          <span>

            <i>
              <img
                src={sparkleIcon}
                alt="icon"
              />
            </i>

            Book an appointment

          </span>

          <h2 className="poort-text poort-in-right">
            Need help getting your home clean again? 
            We’re just a call away.
          </h2>

        </div>

        <BookingForm />

      </div>

    </section>

  );
};

export default BookingSection;