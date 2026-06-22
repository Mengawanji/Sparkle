import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Update these for your business
const BUSINESS_EMAIL = process.env.EMAIL as string;
const FROM_EMAIL = process.env.ADMIN_EMAIL as string;

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = (req.body ?? {}) as ContactPayload;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: BUSINESS_EMAIL,
      replyTo: email,
      subject: `New contact message from ${name}`,
      html: `
        <h2>New contact message</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
          <tr>
            <td style="padding:6px 0;color:#666;width:80px;">Name</td>
            <td style="padding:6px 0;font-weight:600;">${name}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#666;">Email</td>
            <td style="padding:6px 0;font-weight:600;">
              <a href="mailto:${email}" style="color:#2563eb;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#666;vertical-align:top;">Message</td>
            <td style="padding:6px 0;white-space:pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="margin-top:16px;font-size:12px;color:#999;">
          Reply directly to this email to respond to ${name}.
        </p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}