import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(
    2,
    "Name is required"
  ),

  email: z.string().email(
    "Enter a valid email"
  ),

  message: z.string().min(
    5,
    "Message must be at least 5 characters"
  ),
});

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC = () => {

  const [success, setSuccess] =
    useState(false);

  const [submitError, setSubmitError] =
    useState<string | null>(null);

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
      message: "",
    },
  });

  const onSubmit = async (
    data: FormData
  ) => {

    setSuccess(false);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      reset();
    } catch (err) {
      console.error(err);
      setSubmitError(
        "Something went wrong. Please try again or contact us directly."
      );
    }
  };

  return (

    <form
      className="contact-form contact-validation-active"
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
    >

      {/* NAME */}
      <div className="input-item">

        <input
          {...register("name")}
          id="name"
          className="fild"
          type="text"
          placeholder="Your Name*"
        />

        <label htmlFor="name">
          <i className="flaticon-user"></i>
        </label>

        {errors.name && (
          <p className="error">
            {errors.name.message}
          </p>
        )}

      </div>

      {/* EMAIL */}
      <div className="input-item">

        <input
          {...register("email")}
          id="email"
          className="fild"
          type="email"
          placeholder="Email Address*"
        />

        <label htmlFor="email">
          <i className="flaticon-email"></i>
        </label>

        {errors.email && (
          <p className="error">
            {errors.email.message}
          </p>
        )}

      </div>

      {/* MESSAGE */}
      <div className="input-item">

        <textarea
          {...register("message")}
          id="message"
          className="fild textarea"
          placeholder="Enter Your Message here"
          rows={5}
        />

        <label htmlFor="message">
          <i className="flaticon-edit"></i>
        </label>

        {errors.message && (
          <p className="error">
            {errors.message.message}
          </p>
        )}

      </div>

      {/* BUTTON */}
      <div className="input-item submitbtn">

        <button
          className="fild"
          type="submit"
          disabled={isSubmitting}
        >

          {isSubmitting
            ? "Sending..."
            : "Get In Touch"}

        </button>

        {success && (
          <p
            className="success-message"
            role="status"
            aria-live="polite"
          >
            Message sent! We'll get back to you shortly.
          </p>
        )}

        {submitError && (
          <p
            className="error"
            role="alert"
            aria-live="assertive"
          >
            {submitError}
          </p>
        )}

      </div>

    </form>
  );
};

export default ContactForm;