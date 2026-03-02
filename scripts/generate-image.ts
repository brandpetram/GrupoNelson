import { GoogleGenAI } from "@google/genai";
import { writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";

// --- Parseo de argumentos ---
const args = process.argv.slice(2);

function getArg(long: string, short: string): string | undefined {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === `--${long}` || args[i] === `-${short}`) {
      return args[i + 1];
    }
  }
  return undefined;
}

const prompt = getArg("prompt", "p");
const output = getArg("output", "o");
const model = getArg("model", "m") ?? "imagen-3.0-generate-002";
const aspectRatio = getArg("aspect-ratio", "a") ?? "1:1";

if (!prompt || !output) {
  console.error(
    "Uso: pnpm generate-image --prompt <descripción> --output <ruta-en-public>"
  );
  console.error(
    '  Ejemplo: pnpm generate-image --prompt "Edificio industrial moderno" --output parques/hero.png'
  );
  console.error(
    '  Aspect ratios disponibles: 1:1 (default), 16:9, 9:16, 4:3, 3:4'
  );
  process.exit(1);
}

// --- Configuración Vertex AI ---
const project = process.env.GOOGLE_CLOUD_PROJECT;
const location = process.env.GOOGLE_CLOUD_LOCATION ?? "us-central1";

if (!project) {
  console.error("Error: GOOGLE_CLOUD_PROJECT no está definida en .env.local");
  console.error("  Agrega: GOOGLE_CLOUD_PROJECT=tu-project-id");
  process.exit(1);
}

const ai = new GoogleGenAI({
  vertexai: true,
  project,
  location,
});

// --- Generación ---
async function main() {
  console.log(`Generando imagen con Vertex AI - modelo: ${model}`);
  console.log(`Proyecto: ${project} | Región: ${location}`);
  console.log(`Prompt: "${prompt}"`);
  console.log(`Aspect ratio: ${aspectRatio}`);

  const response = await ai.models.generateImages({
    model,
    prompt: prompt!,
    config: {
      numberOfImages: 1,
      aspectRatio,
      outputMimeType: "image/png",
    },
  });

  const generatedImages = response.generatedImages;
  if (!generatedImages || generatedImages.length === 0) {
    console.error("Error: No se recibió imagen del modelo.");
    process.exit(1);
  }

  const imageData = generatedImages[0].image?.imageBytes;
  if (!imageData) {
    console.error("Error: El modelo no devolvió datos de imagen.");
    process.exit(1);
  }

  // Guardar la imagen
  const outputPath = join(process.cwd(), "public", output!);
  await mkdir(dirname(outputPath), { recursive: true });

  const buffer = Buffer.from(imageData, "base64");
  await writeFile(outputPath, buffer);
  console.log(`✅ Imagen guardada en: public/${output}`);
  console.log(`Tamaño: ${(buffer.length / 1024).toFixed(1)} KB`);
}

main().catch((err) => {
  console.error("Error generando imagen:", err.message ?? err);
  process.exit(1);
});
