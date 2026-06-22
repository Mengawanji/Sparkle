import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z.string().email(
    "Enter a valid email"
  ),

  phone: z.string().min(
    7,
    "Enter a valid phone number"
  ),

  address: z.string().min(
    5,
    "Please enter your full home address"
  ),

  subject: z.string().min(
    1,
    "Please select a service"
  ),

  bedrooms: z.string().min(
    1,
    "Please select number of bedrooms"
  ),

  bathrooms: z.string().min(
    1,
    "Please select number of bathrooms"
  ),

  date: z.string().min(
    1,
    "Please select a date"
  ),

  time: z.string().min(
    1,
    "Please select a time"
  ),

  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;


const HOURLY_RATE = 40;

type PricingCategory = "STUDIO_1BED" | "2BED" | "3BED" | "4BED_PLUS";

const REGULAR_HOURS: Record<PricingCategory, { min: number; max: number }> = {
  STUDIO_1BED: { min: 2, max: 2.5 },
  "2BED": { min: 2.5, max: 3 },
  "3BED": { min: 3, max: 4 },
  "4BED_PLUS": { min: 4, max: 5 },
};

const DEEP_RATES: Record<PricingCategory, { min: number; max: number | null }> = {
  STUDIO_1BED: { min: 180, max: 250 },
  "2BED": { min: 220, max: 300 },
  "3BED": { min: 300, max: 400 },
  "4BED_PLUS": { min: 0, max: null },
};

const MOVE_OUT_RATES: Record<PricingCategory, { min: number; max: number | null }> = {
  STUDIO_1BED: { min: 200, max: 280 },
  "2BED": { min: 280, max: 360 },
  "3BED": { min: 360, max: 450 },
  "4BED_PLUS": { min: 0, max: null },
};

const SERVICE_DISCLAIMERS: Record<string, string> = {
  "Regular Cleaning": "Final charge is actual time logged by the cleaner.",
  "Deep Cleaning":
    "Final price confirmed after walkthrough or photo review. Higher end applies to heavily soiled homes.",
  "Move-out/Move-in Cleaning":
    "Empty units take longer due to full access and landlord inspection standards.",
};

type PriceEstimate =
  | {
      pricingModel: "PER_HOUR";
      hourlyRate: number;
      estimatedHours: { min: number; max: number };
      estimatedPrice: { min: number; max: number };
      disclaimer: string;
    }
  | {
      pricingModel: "FLAT_RATE";
      estimate: { min: number; max: number | null };
      disclaimer: string;
    };

function bedroomsToCategory(bedrooms: string): PricingCategory {
  if (bedrooms === "Studio" || bedrooms === "1") return "STUDIO_1BED";
  if (bedrooms === "2") return "2BED";
  if (bedrooms === "3") return "3BED";
  return "4BED_PLUS";
}

function getEstimate(subject: string, bedrooms: string): PriceEstimate | null {
  if (!subject || !bedrooms) return null;

  const cat = bedroomsToCategory(bedrooms);
  const disclaimer = SERVICE_DISCLAIMERS[subject] ?? "";

  if (subject === "Regular Cleaning") {
    const hours = REGULAR_HOURS[cat];
    return {
      pricingModel: "PER_HOUR",
      hourlyRate: HOURLY_RATE,
      estimatedHours: hours,
      estimatedPrice: {
        min: Math.round(hours.min * HOURLY_RATE),
        max: Math.round(hours.max * HOURLY_RATE),
      },
      disclaimer,
    };
  }

  const rates =
    subject === "Deep Cleaning" ? DEEP_RATES[cat] : MOVE_OUT_RATES[cat];

  return {
    pricingModel: "FLAT_RATE",
    estimate: rates,
    disclaimer,
  };
}

function fmt(n: number) {
  return n.toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  });
}

// ── Price display sub-component ────────────────────────────────────────────

function PriceEstimateBox({ estimate }: { estimate: PriceEstimate }) {
  const isCustomQuote =
    estimate.pricingModel === "FLAT_RATE" && estimate.estimate.max === null;

  return (
    <div className="price-estimate-box">
      {estimate.pricingModel === "PER_HOUR" && (
        <>
          <div className="price-row">
            <span>Rate</span>
            <span>{fmt(estimate.hourlyRate)} / hr</span>
          </div>
          <div className="price-row">
            <span>Estimated time</span>
            <span>
              ~{estimate.estimatedHours.min}–{estimate.estimatedHours.max} hrs
            </span>
          </div>
          <div className="price-divider" />
          <div className="price-row price-total">
            <span>Estimated total</span>
            <span className="price-amount">
              {fmt(estimate.estimatedPrice.min)}–{fmt(estimate.estimatedPrice.max)}
            </span>
          </div>
        </>
      )}

      {estimate.pricingModel === "FLAT_RATE" && (
        <>
          <div className="price-row">
            <span>Pricing model</span>
            <span>Flat rate</span>
          </div>
          <div className="price-divider" />
          <div className="price-row price-total">
            <span>Estimated total</span>
            {isCustomQuote ? (
              <span className="price-custom-quote">Custom quote</span>
            ) : (
              <span className="price-amount">
                {fmt(estimate.estimate.min)}–{fmt(estimate.estimate.max!)}
              </span>
            )}
          </div>
          {isCustomQuote && (
            <p className="price-note">
              We'll reach out to confirm pricing for larger homes.
            </p>
          )}
        </>
      )}

      <p className="price-disclaimer">ⓘ {estimate.disclaimer}</p>
    </div>
  );
}

// ── Main form ────────────────────────────────────────────────────────────────

const BookingForm: React.FC = () => {

  const [success, setSuccess] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<FormData>({
    resolver: zodResolver(schema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      subject: "",
      bedrooms: "",
      bathrooms: "",
      date: "",
      time: "13:00",
      notes: "",
    },
  });

  const subject = watch("subject");
  const bedrooms = watch("bedrooms");
  const estimate = getEstimate(subject, bedrooms);

  const [submitError, setSubmitError] = useState<string | null>(null);

  function formatPriceSummary(): string | undefined {
    if (!estimate) return undefined;
    if (estimate.pricingModel === "PER_HOUR") {
      return `${fmt(estimate.estimatedPrice.min)}–${fmt(estimate.estimatedPrice.max)} (${estimate.hourlyRate}/hr × ${estimate.estimatedHours.min}-${estimate.estimatedHours.max} hrs)`;
    }
    if (estimate.estimate.max === null) return "Custom quote";
    return `${fmt(estimate.estimate.min)}–${fmt(estimate.estimate.max)}`;
  }

  const onSubmit = async (
    data: FormData
  ) => {

    setSuccess(false);
    setSubmitError(null);

    try {
      const res = await fetch("/api/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          priceSummary: formatPriceSummary(),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send confirmation email");
      }

      setSuccess(true);
      reset();
    } catch (err) {
      console.error(err);
      setSubmitError(
        "Something went wrong sending your confirmation. Please try again or contact us directly."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="contact-validation-active"
      id="contact-form-main"
    >
      <div className="row">

        {/* NAME */}
        <div className="col col-lg-6 col-12">

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
        <div className="col col-lg-6 col-12">

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

        {/* PHONE */}
        <div className="col col-lg-6 col-12">

          <input
            {...register("phone")}
            type="tel"
            className="form-control"
            placeholder="Phone Number"
          />

          {errors.phone && (
            <p className="error">
              {errors.phone.message}
            </p>
          )}

        </div>

        {/* ADDRESS */}
        <div className="col col-lg-6 col-12">

          <input
            {...register("address")}
            type="text"
            className="form-control"
            placeholder="Full Home Address"
          />

          {errors.address && (
            <p className="error">
              {errors.address.message}
            </p>
          )}

        </div>

        {/* SERVICE */}
        <div className="col col-lg-12 col-12">

          <select
            {...register("subject")}
            className="form-control"
          >
            <option
              value=""
              disabled
            >
              Service Categories
            </option>

            <option value="Regular Cleaning">
              Regular Cleaning
            </option>

            <option value="Deep Cleaning">
              Deep Cleaning
            </option>

            <option value="Move-out/Move-in Cleaning">
              Move-out/Move-in Cleaning
            </option>

          </select>

          {errors.subject && (
            <p className="error">
              {errors.subject.message}
            </p>
          )}

        </div>

        {/* BEDROOMS */}
        <div className="col col-lg-6 col-12">

          <select
            {...register("bedrooms")}
            className="form-control"
          >
            <option
              value=""
              disabled
            >
              Bedrooms
            </option>

            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5+">5+ Bedrooms</option>

          </select>

          {errors.bedrooms && (
            <p className="error">
              {errors.bedrooms.message}
            </p>
          )}

        </div>

        {/* BATHROOMS */}
        <div className="col col-lg-6 col-12">

          <select
            {...register("bathrooms")}
            className="form-control"
          >
            <option
              value=""
              disabled
            >
              Bathrooms
            </option>

            <option value="1">1 Bathroom</option>
            <option value="2">2 Bathrooms</option>
            <option value="3">3 Bathrooms</option>
            <option value="4">4 Bathrooms</option>
            <option value="5+">5+ Bathrooms</option>

          </select>

          {errors.bathrooms && (
            <p className="error">
              {errors.bathrooms.message}
            </p>
          )}

        </div>

        {/* PRICE ESTIMATE — shown once a service + bedroom count are picked */}
        {estimate && (
          <div className="col col-lg-12 col-12">
            <PriceEstimateBox estimate={estimate} />
          </div>
        )}

        {/* DATE */}
        <div className="col col-lg-6 col-12">

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
        <div className="col col-lg-6 col-12">

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

        {/* NOTES */}
        <div className="col col-lg-12 col-12">

          <textarea
            {...register("notes")}
            className="form-control"
            rows={4}
            placeholder="Let us know if you have any special requirements, areas to focus on..."
          />

          {errors.notes && (
            <p className="error">
              {errors.notes.message}
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
                Appointment request submitted successfully. Check your email for confirmation.
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

        </div>

      </div>
    </form>
  );
};

export default BookingForm;