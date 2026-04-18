import fs from "fs/promises";
import path from "path";

import OpenAI from "openai";

const envPath = path.resolve(".env");
const envFile = await fs.readFile(envPath, "utf8");
const apiKeyLine = envFile
  .split("\n")
  .find((line) => line.startsWith("OPENAI_API_KEY="));

if (!apiKeyLine) {
  throw new Error("Missing OPENAI_API_KEY in .env");
}

const apiKey = apiKeyLine.replace("OPENAI_API_KEY=", "").trim();

if (!apiKey) {
  throw new Error("OPENAI_API_KEY is empty");
}

const openai = new OpenAI({ apiKey });
const outputDir = path.resolve("public/images/generated");

await fs.mkdir(outputDir, { recursive: true });

const images = [
  {
    filename: "dressage-hero-01.png",
    prompt: `Use case: photorealistic-natural
Asset type: website landing page hero image
Primary request: a premium equestrian hero image for a coaching website
Scene/backdrop: outdoor dressage arena at soft morning light with clean natural background and subtle haze
Subject: one elegant rider and one well-schooled dressage horse moving in collected trot
Style/medium: photorealistic editorial sports photography
Composition/framing: wide landscape composition with negative space for web copy, horse and rider offset slightly right of center
Lighting/mood: calm, confident, refined, grounded
Color palette: warm parchment light, soft greens, chestnut and leather tones
Materials/textures: visible horse musculature, tack leather, arena footing, competition fabric texture
Constraints: no text, no watermark, no logo, no extra riders, no distorted anatomy`,
  },
  {
    filename: "coaching-session-01.png",
    prompt: `Use case: photorealistic-natural
Asset type: website section image for coaching approach
Primary request: an equestrian coaching session showing clear mentorship
Scene/backdrop: outdoor arena rail during a private lesson
Subject: a mounted rider on a horse with a coach standing nearby giving instruction
Style/medium: photorealistic lifestyle sports photography
Composition/framing: medium-wide horizontal composition, intimate but professional, natural body language
Lighting/mood: warm daylight, observant, calm, supportive
Color palette: sand, sage, leather, cream
Materials/textures: arena dust, horse coat texture, riding boots, reins, soft natural background blur
Constraints: no text, no watermark, no logo, realistic anatomy, realistic tack and riding position`,
  },
  {
    filename: "show-jumping-01.png",
    prompt: `Use case: photorealistic-natural
Asset type: website services image for eventing or jumping
Primary request: a polished equestrian action image showing horse and rider clearing a jump
Scene/backdrop: outdoor show jumping arena with clean premium competition atmosphere
Subject: one athletic rider and one horse mid-jump over a tasteful obstacle
Style/medium: photorealistic editorial sports image
Composition/framing: wide composition with strong forward motion and room for cropping
Lighting/mood: focused, energetic, aspirational
Color palette: natural greens, warm sand, dark tack, crisp competition whites
Materials/textures: detailed horse coat, arena footing, jump rails, boots, saddle leather
Constraints: no text, no watermark, no logo, no crowd clutter, realistic anatomy and jumping form`,
  },
  {
    filename: "mentorship-rider-horse-01.png",
    prompt: `Use case: photorealistic-natural
Asset type: supporting website image for rider and horse development
Primary request: a quiet premium portrait-style equestrian image emphasizing partnership and trust
Scene/backdrop: stable yard or arena edge in soft evening light
Subject: one rider beside their horse in a calm coaching-oriented moment
Style/medium: photorealistic editorial portrait
Composition/framing: horizontal composition, close enough to feel personal, suitable for web section art
Lighting/mood: reflective, confident, warm, premium
Color palette: golden light, parchment, saddle brown, muted green
Materials/textures: horse mane, leather bridle, tailored riding clothes, natural stable materials
Constraints: no text, no watermark, no logo, no extra people, realistic anatomy`,
  },
];

for (const image of images) {
  console.log(`Generating ${image.filename}...`);

  const result = await openai.images.generate({
    model: "gpt-image-1.5",
    prompt: image.prompt,
    size: "1536x1024",
    quality: "high",
    background: "auto",
  });

  const b64 = result.data?.[0]?.b64_json;

  if (!b64) {
    throw new Error(`No image data returned for ${image.filename}`);
  }

  const outputPath = path.join(outputDir, image.filename);
  await fs.writeFile(outputPath, Buffer.from(b64, "base64"));
  console.log(`Saved ${outputPath}`);
}
