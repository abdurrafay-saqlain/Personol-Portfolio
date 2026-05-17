"use server";
import ContactFormEmail from "@/email/contact-form-email";
import { ContactFormInputs } from "@/lib/types";
import { validateEmail, validateLength, getErrorMessage } from "@/lib/utils";

import { render } from "@react-email/components";

import { createTransport, TransportOptions } from "nodemailer";

const transport = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
} as TransportOptions);

export const sendEmail = async ({
  message,
  senderEmail,
  senderName,
  ip = "",
}: ContactFormInputs) => {
  // simple server-side validation
  if (validateEmail(senderEmail).error) {
    return {
      error: "Invalid sender email",
    };
  }
  if (validateLength(senderName, 2, 50).error) {
    return {
      error: "Invalid sender name",
    };
  }
  if (validateLength(message, 4, 5000).error) {
    return {
      error: "Invalid message",
    };
  }

  const emailHtml = await render(
    ContactFormEmail({
      message: message,
      senderEmail: senderEmail,
      senderName: senderName,
      ip: ip,
      extra: JSON.stringify({
        extraFields: 123,
      }),
    })
  );

  const descriptor = {
    from: `"Contact Form" <${process.env.SENDER_EMAIL}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `Message from portfolio contact form`,
    replyTo: senderEmail,
    html: emailHtml,
  };
  let data;
  try {
    data = await transport.sendMail(descriptor);
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
