import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const BUSINESS_EMAIL = process.env.EMAIL as string;
const FROM_EMAIL = process.env.ADMIN_EMAIL as string;


interface BookingPayload {
  name: string;
  email: string;
  phone: string;
  address: string;
  subject: string;
  bedrooms: string;
  bathrooms: string;
  date: string;
  time: string;
  notes?: string;
  priceSummary?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = req.body as BookingPayload;

  const {
    name,
    email,
    phone,
    address,
    subject,
    bedrooms,
    bathrooms,
    date,
    time,
    notes,
    priceSummary,
  } = data || {};

  if (!name || !email || !phone || !address || !subject || !bedrooms || !bathrooms || !date || !time) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const detailsHtml = `
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:6px 0;color:#666;">Client</td><td style="padding:6px 0;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:6px 0;color:#666;">Phone</td><td style="padding:6px 0;font-weight:600;">${phone}</td></tr>
      <tr><td style="padding:6px 0;color:#666;">Service</td><td style="padding:6px 0;font-weight:600;">${subject}</td></tr>
      <tr><td style="padding:6px 0;color:#666;">Date</td><td style="padding:6px 0;font-weight:600;">${date}</td></tr>
      <tr><td style="padding:6px 0;color:#666;">Time</td><td style="padding:6px 0;font-weight:600;">${time}</td></tr>
      <tr><td style="padding:6px 0;color:#666;">Bedrooms</td><td style="padding:6px 0;font-weight:600;">${bedrooms}</td></tr>
      <tr><td style="padding:6px 0;color:#666;">Bathrooms</td><td style="padding:6px 0;font-weight:600;">${bathrooms}</td></tr>
      <tr><td style="padding:6px 0;color:#666;">Address</td><td style="padding:6px 0;font-weight:600;">${address}</td></tr>
      ${priceSummary ? `<tr><td style="padding:6px 0;color:#666;">Estimated price</td><td style="padding:6px 0;font-weight:600;">${priceSummary}</td></tr>` : ""}
      ${notes ? `<tr><td style="padding:6px 0;color:#666;">Notes</td><td style="padding:6px 0;">${notes}</td></tr>` : ""}
    </table>
  `;

  try {
    // 1. Notify the Sandy Sparkle
    await resend.emails.send({
      from: FROM_EMAIL,
      to: BUSINESS_EMAIL,
      replyTo: email,
      subject: `New booking: ${name} — ${subject}`,
      html: `
        <h2>New appointment request</h2>
        <p><strong>${name}</strong> just requested an appointment.</p>
        ${detailsHtml}
      `,
    });

    // 2. Confirm with the customer
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Your cleaning appointment request has been received",
      html: `
        <h2>Thanks, ${name}!</h2>
        <p>We've received your appointment request. Here's a summary:</p>
        ${detailsHtml}
        <p style="margin-top:16px;color:#666;font-size:13px;">
          This is a request, not a final confirmation — we'll reach out shortly to confirm availability and finalize pricing.
        </p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}