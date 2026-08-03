import axios from "axios";

export interface SendBrevoEmailParams {
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  senderName?: string;
}
export const sendBrevoEmail = async ({
  to,
  subject,
  html,
  senderName = "Sifat Tech",
}: SendBrevoEmailParams) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: senderName,
          email: process.env.BREVO_SENDER,
        },
        to: [
          {
            email: to,
          },
        ],
        subject,
        htmlContent: html,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log("Brevo email sent successfully:", response.data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Brevo email error:",
        error.response?.data || error.message
      );
    } else {
      console.error("Brevo email error:", error);
    }

    throw error;
  }
};
