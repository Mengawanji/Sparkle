import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z.string().email(
    "Enter a valid email"
  ),

  subject: z.string().min(
    1,
    "Please select a service"
  ),

  date: z.string().min(
    1,
    "Please select a date"
  ),

  time: z.string().min(
    1,
    "Please select a time"
  ),
});

type FormData = z.infer<typeof schema>;

const BookingForm2: React.FC = () => {

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
      setTimeout(resolve, 1000)
    );

    setSuccess(true);

    reset();
  };

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="contact-validation-active"
      id="contact-form-main"
    >

      <div className="row">

        {/* NAME */}
        <div className="col col-lg-12 col-12">

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

        {/* EMAIL */}
        <div className="col col-lg-12 col-12">

          <input
            {...register("email")}
            type="email"
            className="form-control"
            placeholder="Email"
          />

          {errors.email && (
            <p className="error">
              {errors.email.message}
            </p>
          )}

        </div>

        {/* SERVICE */}
        <div className="col col-lg-12 col-12">

          <select
            {...register("subject")}
            className="form-control"
          >

            <option value="" disabled>
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

        {/* DATE */}
        <div className="col col-lg-12 col-12">

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

        {/* TIME */}
        <div className="col col-lg-12 col-12">

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

        {/* SUBMIT */}
        <div className="col col-lg-12 col-12">

          <div className="submit-area">

            <button
              type="submit"
              className="theme-btn-s2"
              disabled={isSubmitting}
            >

              <span className="rolling-text">

                {isSubmitting
                  ? "Submitting..."
                  : "Make an Appointment"}

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
  );
};

export default BookingForm2;
