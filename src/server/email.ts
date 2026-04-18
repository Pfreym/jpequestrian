import "server-only";

import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

import { env } from "~/env";

let transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo> | null =
  null;

function requireValue(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

export function getMailer() {
  const host = requireValue(env.SMTP_HOST, "SMTP_HOST");
  const port = Number(requireValue(env.SMTP_PORT, "SMTP_PORT"));
  const user = requireValue(env.SMTP_USER, "SMTP_USER");
  const pass = requireValue(env.SMTP_PASS, "SMTP_PASS");

  transporter ??= nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  return transporter;
}

type BookingEmailInput = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  comments?: string;
};

export async function sendBookingRequestEmail(input: BookingEmailInput) {
  const to = requireValue(env.BOOKING_EMAIL_TO, "BOOKING_EMAIL_TO");
  const from = requireValue(env.BOOKING_EMAIL_FROM, "BOOKING_EMAIL_FROM");

  const mailer = getMailer();

  const text = [
    "New booking request",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    `Date: ${input.date}`,
    `Time: ${input.time}`,
    "",
    "Comments:",
    input.comments?.trim() ?? "None",
  ].join("\n");

  await mailer.sendMail({
    to,
    from,
    replyTo: input.email,
    subject: `Booking request from ${input.name}`,
    text,
  });
}
