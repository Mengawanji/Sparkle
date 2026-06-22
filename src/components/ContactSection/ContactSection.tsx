import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSplitTextAnimation } from "../splittextAnimation/useSplitTextAnimation";

const schema = z.object({
  name: z.string().min(
    3,
    "Name must be at least 3 characters"
  ),

  email: z.string().email(
    "Enter a valid email"
  ),

  subject: z.string().min(
    1,
    "Please select a service"
  ),

  date: z.string().optional(),

  time: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const ContactSection: React.FC = () => {

  const [success, setSuccess] =
    useState(false);

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
      email: "",
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
      setTimeout(resolve, 1200)
    );

    setSuccess(true);

    reset();
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (

    <section
      className="wpo-contact-section section-padding pt-0"
      ref={ref}
    >

      <div className="wpo-contact-section-wrapper box-style">

        <div className="container-fluid">

          <div className="row">

            <div className="col-lg-12 col-md-12 col-12">

              <div className="wpo-contact-form-area">

                <div className="wpo-section-title">

                  <h2 className="poort-text poort-in-right">
                    Reach Out for a Sparkling Space Today
                  </h2>

                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-validation-active"
                >

                  <div className="row">

                    {/* NAME */}
                    <div className="col-lg-6 col-12">

                      <input
                        type="text"
                        {...register("name")}
                        className="form-control"
                        placeholder="Your Name*"
                      />

                      {errors.name && (
                        <p className="error">
                          {errors.name.message}
                        </p>
                      )}

                    </div>

                    {/* EMAIL */}
                    <div className="col-lg-6 col-12">

                      <input
                        type="email"
                        {...register("email")}
                        className="form-control"
                        placeholder="Your Email*"
                      />

                      {errors.email && (
                        <p className="error">
                          {errors.email.message}
                        </p>
                      )}

                    </div>

                    {/* SERVICE */}
                    <div className="col-lg-12 col-12">

                      <select
                        {...register("subject")}
                        className="form-control"
                      >

                        <option value="">
                          Service Categories
                        </option>

                        <option value="Office Cleaning">
                          Office Cleaning
                        </option>

                        <option value="Home Cleaning">
                          Home Cleaning
                        </option>

                        <option value="Shop Cleaning">
                          Shop Cleaning
                        </option>

                        <option value="Road Cleaning">
                          Road Cleaning
                        </option>

                        <option value="Car Cleaning">
                          Car Cleaning
                        </option>

                      </select>

                      {errors.subject && (
                        <p className="error">
                          {errors.subject.message}
                        </p>
                      )}

                    </div>

                    {/* DATE */}
                    <div className="col-lg-6 col-12">

                      <input
                        type="date"
                        {...register("date")}
                        className="form-control"
                      />

                    </div>

                    {/* TIME */}
                    <div className="col-lg-6 col-12">

                      <input
                        type="time"
                        {...register("time")}
                        className="form-control"
                      />

                    </div>

                    {/* SUBMIT */}
                    <div className="col-lg-12 col-12">

                      <div className="submit-area">

                        <button
                          type="submit"
                          className="theme-btn-s2"
                          disabled={isSubmitting}
                        >

                          {isSubmitting
                            ? "Submitting..."
                            : "Book Now"}

                        </button>

                        {success && (
                          <p
                            className="success-message"
                            role="status"
                            aria-live="polite"
                          >
                            Booking request submitted successfully.
                          </p>
                        )}

                      </div>

                    </div>

                  </div>

                </form>

                <div className="border-style"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;
