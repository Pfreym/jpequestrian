import { NextResponse } from "next/server";
import { z } from "zod";

import { sendBookingRequestEmail } from "~/server/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const bookingSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email(),
  phone: z.string().trim().min(5).max(40),
  date: z.string().trim().min(1),
  time: z.string().trim().min(1),
  comments: z.string().trim().max(4000).optional().default(""),
});

function getRedirectUrl(request: Request, success: boolean) {
  const url = new URL("/book", request.url);
  url.searchParams.set(success ? "success" : "error", "1");
  return url;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const input = bookingSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      time: formData.get("time"),
      comments: formData.get("comments"),
    });

    await sendBookingRequestEmail(input);

    return NextResponse.redirect(getRedirectUrl(request, true), 303);
  } catch {
    return NextResponse.redirect(getRedirectUrl(request, false), 303);
  }
}
