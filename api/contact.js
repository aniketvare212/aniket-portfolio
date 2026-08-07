
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    // Check API key
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return res.status(500).json({
        success: false,
        message: "Email service is not configured.",
      });
    }

    // Create Resend client
    const resend = new Resend(apiKey);

    // Read request body
    const {
      name,
      email,
      subject,
      message,
    } = req.body || {};

    console.log("Contact request received:", {
      name,
      email,
      subject,
    });

    // Validate
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    // Send email
    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["vareaniket330@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,

      html: `
        <!DOCTYPE html>

        <html>

        <head>
          <meta charset="UTF-8">
          <title>Portfolio Contact</title>
        </head>

        <body
          style="
            margin:0;
            padding:30px;
            background:#f1f5f9;
            font-family:Arial,sans-serif;
          "
        >

          <div
            style="
              max-width:650px;
              margin:auto;
              background:white;
              border-radius:12px;
              padding:30px;
            "
          >

            <h2 style="color:#2563eb;">
              📩 New Portfolio Message
            </h2>

            <hr>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Subject:</strong>
              ${escapeHtml(subject)}
            </p>

            <h3>Message</h3>

            <div
              style="
                background:#f8fafc;
                padding:20px;
                border-radius:8px;
                line-height:1.6;
                white-space:pre-wrap;
              "
            >
              ${escapeHtml(message)}
            </div>

            <hr>

            <p
              style="
                color:#64748b;
                font-size:13px;
              "
            >
              Sent from Aniket Vare's portfolio website.
            </p>

          </div>

        </body>

        </html>
      `,
    });

    console.log("Resend result:", result);

    if (result.error) {
      console.error("Resend API error:", result.error);

      return res.status(500).json({
        success: false,
        message:
          result.error.message || "Email could not be sent.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("CONTACT FUNCTION ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error?.message || "Internal server error.",
    });
  }
}


// Escape user input before putting it into HTML
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

