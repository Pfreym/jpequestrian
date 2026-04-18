import { NextResponse } from "next/server";
import { z } from "zod";

import { generateProjectImage } from "~/server/openai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const generateImageSchema = z.object({
  prompt: z.string().min(1).max(4000),
  size: z
    .enum(["1024x1024", "1536x1024", "1024x1536", "auto"])
    .optional(),
  quality: z.enum(["low", "medium", "high", "auto"]).optional(),
  background: z.enum(["transparent", "opaque", "auto"]).optional(),
});

export async function POST(req: Request) {
  try {
    const json: unknown = await req.json();
    const input = generateImageSchema.parse(json);

    const image = await generateProjectImage(input);

    return NextResponse.json({
      ok: true,
      imageBase64: image.b64Json,
      dataUrl: `data:image/png;base64,${image.b64Json}`,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid request body",
          issues: error.flatten(),
        },
        { status: 400 }
      );
    }

    const message =
      error instanceof Error ? error.message : "Image generation failed";

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 }
    );
  }
}
