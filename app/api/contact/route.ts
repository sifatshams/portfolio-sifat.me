import { sendBrevoEmail } from "@/lib/brevo";
import { NextResponse } from "next/server";
import { z } from "zod";

// Validation
const contactMessageSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name must be less than 100 characters long." }),

  email: z.string().trim().email("Please provide a valid email address."),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(200, "Subject is too long."),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message is too long."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validationResult = contactMessageSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide valid contact information!",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>New Contact Message</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 40px 20px;
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
          "
        >
          <div
            style="
              max-width: 600px;
              margin: 0 auto;
              padding: 30px;
              background-color: #ffffff;
              border-radius: 12px;
            "
          >
            <h2 style="margin-top: 0;">
              New Contact Message
            </h2>

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

            <hr />

            <h3>Message</h3>

            <p style="white-space: pre-line;">
              ${message}
            </p>
          </div>
        </body>
      </html>
    `;

    await sendBrevoEmail({
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      replyTo: email,
      subject: `New Contact Message: ${subject}`,
      html,
      senderName: "Sifat Portfolio",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your message right now. Please try again later!",
      },
      { status: 500 }
    );
  }
}
