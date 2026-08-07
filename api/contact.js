
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "RESEND_API_KEY is missing.",
      });
    }

    const {
      name,
      email,
      subject,
      message,
    } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["vareaniket330@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto;">

          <h2 style="color: #2563eb;">
            📩 New Portfolio Message
          </h2>

          <hr />

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Subject:</strong>
            ${subject}
          </p>

          <h3>Message</h3>

          <div style="
            background: #f1f5f9;
            padding: 20px;
            border-radius: 10px;
            white-space: pre-wrap;
          ">
            ${message}
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return res.status(500).json({
        success: false,
        message: error.message || "Resend failed.",
      });
    }

    console.log("Email sent:", data);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Server Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error.",
    });
  }
}