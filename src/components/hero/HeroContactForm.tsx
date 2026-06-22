import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSplitTextAnimation } from "../splittextAnimation/useSplitTextAnimation";

const schema = z.object({
  name: z.string().min(
    2,
    "Name is required"
  ),

  subject: z.string().min(
    1,
    "Please select a service"
  ),

  date: z.string().min(
    1,
    "Date is required"
  ),

  time: z.string().min(
    1,
    "Time is required"
  ),
});

type FormData = z.infer<typeof schema>;

const HeroContactForm: React.FC = () => {

  const [success, setSuccess] =
    useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<FormData>({
    resolver: zodResolver(schema),

    defaultValues: {
      name: "",
      subject: "",
      date: "",
      time: "13:00",
    },
  });

  const onSubmit = async (
    _data: FormData
  ) => {

    setSuccess(false);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setSuccess(true);

    reset();
  };

  return (
    <div
      className="wpo-contact-form-area"
      ref={ref}
    >

      <div className="contact-title">
        <h2 className="poort-text poort-in-right">
          Book an appointment
        </h2>
      </div>

      <form
        className="contact-validation-active"
        onSubmit={handleSubmit(onSubmit)}
      >

        <div className="row">

          <div className="col-lg-12">
            <div className="input-item">

              <input
                {...register("name")}
                type="text"
                className="form-control"
                placeholder="Name"
              />

              {errors.name && (
                <p className="error">
                  {errors.name.message}
                </p>
              )}

            </div>
          </div>

          <div className="col-lg-12">
            <div className="input-item">

              <select
                {...register("subject")}
                className="form-control"
              >

                <option value="">
                  Service Categories
                </option>

                <option value="Kitchen Plumbing">
                  Kitchen Plumbing
                </option>

                <option value="Gas Line Services">
                  Gas Line Services
                </option>

                <option value="Water Line Repair">
                  Water Line Repair
                </option>

                <option value="Bathroom Plumbing">
                  Bathroom Plumbing
                </option>

                <option value="Basement Plumbing">
                  Basement Plumbing
                </option>

              </select>

              {errors.subject && (
                <p className="error">
                  {errors.subject.message}
                </p>
              )}

            </div>
          </div>

          <div className="col-lg-6">
            <div className="input-item">

              <input
                {...register("date")}
                type="date"
                className="form-control"
              />

              {errors.date && (
                <p className="error">
                  {errors.date.message}
                </p>
              )}

            </div>
          </div>

          <div className="col-lg-6">
            <div className="input-item">

              <input
                {...register("time")}
                type="time"
                className="form-control"
              />

              {errors.time && (
                <p className="error">
                  {errors.time.message}
                </p>
              )}

            </div>
          </div>

          <div className="col-lg-12">
            <div className="submit-area">

              <button
                type="submit"
                className="theme-btn-s2"
                disabled={isSubmitting}
              >

                <span className="rolling-text">

                  {isSubmitting
                    ? "Booking..."
                    : "Book Now"}

                </span>

              </button>

              {success && (
                <p
                  className="success-message"
                  role="status"
                  aria-live="polite"
                >
                  Appointment request submitted successfully.
                </p>
              )}

            </div>
          </div>

        </div>

      </form>

      <div className="border-style"></div>

    </div>
  );
};

export default HeroContactForm;