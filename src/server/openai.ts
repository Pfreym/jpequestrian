import "server-only";

import OpenAI from "openai";

import { env } from "~/env";

let client: OpenAI | null = null;

export function getOpenAIClient() {
  if (!env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY");
  }

  client ??= new OpenAI({
    apiKey: env.OPENAI_API_KEY,
  });

  return client;
}

type GenerateProjectImageInput = {
  prompt: string;
  size?: "1024x1024" | "1536x1024" | "1024x1536" | "auto";
  quality?: "low" | "medium" | "high" | "auto";
  background?: "transparent" | "opaque" | "auto";
};

export async function generateProjectImage({
  prompt,
  size = "1536x1024",
  quality = "auto",
  background = "auto",
}: GenerateProjectImageInput) {
  const openai = getOpenAIClient();

  const result = await openai.images.generate({
    model: "gpt-image-1.5",
    prompt,
    size,
    quality,
    background,
  });

  const image = result.data?.[0];

  if (!image?.b64_json) {
    throw new Error("OpenAI did not return image data");
  }

  return {
    b64Json: image.b64_json,
  };
}
