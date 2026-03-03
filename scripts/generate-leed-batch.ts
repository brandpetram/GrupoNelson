import { GoogleGenAI } from "@google/genai";
import { writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";

// ---------------------------------------------------------------------------
// Configuración
// ---------------------------------------------------------------------------
const project = process.env.GOOGLE_CLOUD_PROJECT;

if (!project) {
    console.error("Error: GOOGLE_CLOUD_PROJECT no está definida en .env.local");
    process.exit(1);
}

// Dos regiones = dos quotas separadas de 1 req/min → efectivamente 2 req/min
const REGIONS = ["us-central1", "us-east4"];
const DELAY_BETWEEN_PAIRS_MS = 62000;

const MODEL = "imagen-3.0-generate-002";
const ASPECT_RATIO = "1:1";

const NEGATIVE_PROMPT =
    "text, letters, words, watermark, " +
    "cartoon, illustration, painting, 3D render, anime, drawing, " +
    "abstract, geometric shapes, triangles, gradients";

// ---------------------------------------------------------------------------
// Convención de nombres: {leedId}-mexicali-nave-industrial-{tema}-{variante}.png
// Esto permite que cualquier IA haga match directo con leedCarruselItems por id
//
// leedCarruselItems referencia:
//   leed1 → Experiencia en Clima Extremo (+45°C, radiación solar, Mexicali)
//   leed2 → Proceso & Certificación LEED (documentación técnica, USGBC, BD+C)
//   leed3 → Sistemas Operativos Inteligentes (BMS, submedición energía y agua)
//   leed4 → Sitios Sostenibles & Agua (techos reflectivos, pavimentos claros, isla de calor)
//   leed5 → Calidad Ambiental Interior (aire limpio, iluminación, bajo COV)
//   leed6 → Materiales & Recursos (EPDs, contenido reciclado, residuos de obra)
//   leed7 → Energía & Atmósfera (ASHRAE 90.1, fotovoltaicos en cubierta)
// ---------------------------------------------------------------------------
const images = [

    // ── leed1: Clima Extremo ─────────────────────────────────────────────────
    // Subtítulo: +45°C, radiación solar, Mexicali
    {
        id: "leed1-1",
        prompt: `Aerial photography of large industrial warehouse in Mexicali Sonoran desert, 
             bright white reflective metal roof, vast asphalt parking lot surrounding building, 
             heat haze visible above surface, midday harsh sun, 
             arid landscape stretching to horizon, no people`,
        output: "leed/leed1-mexicali-nave-industrial-clima-extremo-1.png",
    },
    {
        id: "leed1-2",
        prompt: `Ground level wide angle photo of industrial warehouse facade in Mexicali desert, 
             corrugated metal wall with dramatic hard shadow line across surface, 
             intense direct sunlight, dry scrub vegetation at base, blue sky, no people`,
        output: "leed/leed1-mexicali-nave-industrial-clima-extremo-2.png",
    },
    {
        id: "leed1-3",
        prompt: `Close up detail of white reflective industrial metal roof panels under intense sun, 
             heat shimmer rising above surface, geometric seam pattern, 
             deep blue desert sky above, sharp architectural detail photography, no people`,
        output: "leed/leed1-mexicali-nave-industrial-clima-extremo-3.png",
    },

    // ── leed2: Proceso & Certificación LEED ─────────────────────────────────
    // Subtítulo: documentación técnica, submittals USGBC, proceso integrativo
    {
        id: "leed2-1",
        prompt: `Architects reviewing large technical blueprints and construction drawings 
             on table inside industrial building under construction, 
             hard hats and safety vests, steel structure visible in background, 
             professional documentary photography`,
        output: "leed/leed2-mexicali-nave-industrial-certificacion-bdc-1.png",
    },
    {
        id: "leed2-2",
        prompt: `Modern industrial building construction site showing coordinated installation 
             of mechanical electrical and plumbing systems simultaneously, 
             organized construction, steel structure with insulation panels, wide angle, no people`,
        output: "leed/leed2-mexicali-nave-industrial-certificacion-bdc-2.png",
    },
    {
        id: "leed2-3",
        prompt: `Completed modern industrial logistics facility exterior, 
             clean precise metal and glass facade, 
             drought-resistant landscaping at entrance, 
             overcast soft light, professional architectural photography, no people`,
        output: "leed/leed2-mexicali-nave-industrial-certificacion-bdc-3.png",
    },

    // ── leed3: Sistemas Operativos Inteligentes ──────────────────────────────
    // Subtítulo: BMS, submedición de energía y agua, control total, datos en tiempo real
    {
        id: "leed3-1",
        prompt: `Industrial warehouse rooftop with organized HVAC mechanical units, 
             cooling towers and sensor equipment arrays, 
             blue sky, elevated photography, technical and precise, no people`,
        output: "leed/leed3-mexicali-nave-industrial-sistemas-bms-1.png",
    },
    {
        id: "leed3-2",
        prompt: `Industrial smart metering and electrical submetering panel mounted on warehouse wall, 
             digital meters and circuit breakers, clean organized components, 
             indicator lights, dramatic side lighting, no people`,
        output: "leed/leed3-mexicali-nave-industrial-sistemas-bms-2.png",
    },
    {
        id: "leed3-3",
        prompt: `Interior of large industrial facility showing insulated ductwork 
             and mechanical systems running along high steel ceiling, 
             LED lighting strips, organized infrastructure, wide angle, no people`,
        output: "leed/leed3-mexicali-nave-industrial-sistemas-bms-3.png",
    },

    // ── leed4: Sitios Sostenibles & Agua ─────────────────────────────────────
    // Subtítulo: techos reflectivos, pavimentos claros, isla de calor, zona árida
    {
        id: "leed4-1",
        prompt: `Aerial view of industrial warehouse with bright white reflective cool roof, 
             light colored concrete parking lot and access roads surrounding building, 
             strong contrast against darker surroundings, Mexicali desert, no people`,
        output: "leed/leed4-mexicali-nave-industrial-sitios-sostenibles-1.png",
    },
    {
        id: "leed4-2",
        prompt: `Light colored concrete pavement at industrial facility entrance, 
             pale reflective surface reducing heat island effect, 
             industrial warehouse facade in background, midday sun, no people`,
        output: "leed/leed4-mexicali-nave-industrial-sitios-sostenibles-2.png",
    },
    {
        id: "leed4-3",
        prompt: `Industrial park with drought-resistant native desert landscaping, 
             gravel beds and desert plants around warehouse perimeter, 
             water efficient drip irrigation system visible, golden hour light, no people`,
        output: "leed/leed4-mexicali-nave-industrial-sitios-sostenibles-3.png",
    },

    // ── leed5: Calidad Ambiental Interior ────────────────────────────────────
    // Subtítulo: aire limpio, confort térmico, iluminación óptima, bajo COV
    {
        id: "leed5-1",
        prompt: `Spacious industrial warehouse interior with continuous rows of skylights 
             in metal roof structure, soft even natural daylight flooding entire space, 
             clean polished concrete floor, wide angle architectural photography, no people`,
        output: "leed/leed5-mexicali-nave-industrial-calidad-ambiental-1.png",
    },
    {
        id: "leed5-2",
        prompt: `Industrial warehouse interior with tall clerestory windows along upper wall, 
             warm natural light beam streaming in, 
             dust particles visible in light shaft, atmospheric industrial photography, no people`,
        output: "leed/leed5-mexicali-nave-industrial-calidad-ambiental-2.png",
    },
    {
        id: "leed5-3",
        prompt: `Large aluminum louvered ventilation panels on industrial building exterior wall, 
             geometric pattern of blades controlling airflow, 
             dramatic raking light casting sharp parallel shadows, no people`,
        output: "leed/leed5-mexicali-nave-industrial-calidad-ambiental-3.png",
    },

    // ── leed6: Materiales & Recursos ─────────────────────────────────────────
    // Subtítulo: EPDs verificadas, alto contenido reciclado, residuos de obra
    {
        id: "leed6-1",
        prompt: `Recycled steel structural beams and columns of industrial building under construction, 
             looking up at steel skeleton frame against blue sky, 
             dramatic perspective, construction photography, no people`,
        output: "leed/leed6-mexicali-nave-industrial-materiales-recursos-1.png",
    },
    {
        id: "leed6-2",
        prompt: `Construction waste management area at industrial building site, 
             clearly labeled sorting containers for concrete rubble, 
             scrap metal and wood debris, organized material segregation, no people`,
        output: "leed/leed6-mexicali-nave-industrial-materiales-recursos-2.png",
    },
    {
        id: "leed6-3",
        prompt: `Close up texture of corrugated recycled steel cladding panels 
             on industrial building exterior wall, 
             strong raking side light revealing surface texture and shadow pattern, 
             architectural detail photography, no people`,
        output: "leed/leed6-mexicali-nave-industrial-materiales-recursos-3.png",
    },

    // ── leed7: Energía & Atmósfera ────────────────────────────────────────────
    // Subtítulo: ASHRAE 90.1, modelado energético, envolvente térmica, fotovoltaicos en cubierta
    {
        id: "leed7-1",
        prompt: `Aerial photography of entire industrial warehouse roof covered with 
             photovoltaic solar panel array, Mexicali desert visible beyond building, 
             bright midday sun, precise geometric rows of panels, no people`,
        output: "leed/leed7-mexicali-nave-industrial-energia-atmosfera-1.png",
    },
    {
        id: "leed7-2",
        prompt: `Close up detail of solar photovoltaic panels installed on industrial metal roof, 
             aluminum mounting rails and tempered glass panels, 
             dramatic side lighting showing panel depth and shadow, no people`,
        output: "leed/leed7-mexicali-nave-industrial-energia-atmosfera-2.png",
    },
    {
        id: "leed7-3",
        prompt: `Industrial warehouse exterior at dusk, LED perimeter lighting activated, 
             warm glow through translucent polycarbonate roof panels, 
             deep blue hour sky, desert silhouette on horizon, 
             atmospheric architectural photography, no people`,
        output: "leed/leed7-mexicali-nave-industrial-energia-atmosfera-3.png",
    },

];

// ---------------------------------------------------------------------------
// Resume desde un ID específico
// Uso: RESUME_FROM=leed4-1 pnpm generate-leed
// ---------------------------------------------------------------------------
const resumeFrom = process.env.RESUME_FROM;
const startIndex = resumeFrom
    ? Math.max(0, images.findIndex((img) => img.id === resumeFrom))
    : 0;

// ---------------------------------------------------------------------------
// Generador por región
// ---------------------------------------------------------------------------
async function generateImage(
    prompt: string,
    outputRelative: string,
    region: string
): Promise<void> {
    const ai = new GoogleGenAI({ vertexai: true, project, location: region });

    const response = await ai.models.generateImages({
        model: MODEL,
        prompt,
        config: {
            numberOfImages: 1,
            aspectRatio: ASPECT_RATIO,
            outputMimeType: "image/png",
            negativePrompt: NEGATIVE_PROMPT,
        },
    });

    const imageData = response.generatedImages?.[0]?.image?.imageBytes;
    if (!imageData) throw new Error("No se recibió imagen del modelo");

    const outputPath = join(process.cwd(), "public", outputRelative);
    await mkdir(dirname(outputPath), { recursive: true });

    const buffer = Buffer.from(imageData, "base64");
    await writeFile(outputPath, buffer);
    console.log(`  ✅ [${region}] ${outputRelative} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

// ---------------------------------------------------------------------------
// Countdown
// ---------------------------------------------------------------------------
async function countdown(seconds: number): Promise<void> {
    for (let i = seconds; i > 0; i--) {
        process.stdout.write(`\r  ⏳ Siguiente par en ${i}s...`);
        await new Promise((r) => setTimeout(r, 1000));
    }
    process.stdout.write("\r  ✓ Generando...                    \n");
}

// ---------------------------------------------------------------------------
// Main — procesa en pares usando ambas regiones simultáneamente
// ---------------------------------------------------------------------------
async function main() {
    const pending = images.slice(startIndex);
    const pairs = Math.ceil(pending.length / 2);
    const estimatedMinutes = ((pairs - 1) * DELAY_BETWEEN_PAIRS_MS) / 60000;

    console.log(`\n🎨 Generando ${pending.length} imágenes LEED con Imagen 3`);
    console.log(`   Proyecto: ${project}`);
    console.log(`   Regiones: ${REGIONS.join(" + ")} (quota independiente por región)`);
    if (resumeFrom) console.log(`   Retomando desde: ${resumeFrom}`);
    console.log(`   Tiempo estimado: ~${Math.ceil(estimatedMinutes + 1)} minutos\n`);

    const results: { id: string; output: string; status: "ok" | "error"; error?: string }[] = [];

    for (let i = 0; i < pending.length; i += 2) {
        const pair = pending.slice(i, i + 2);
        const pairNum = Math.floor(i / 2) + 1;
        const totalPairs = Math.ceil(pending.length / 2);

        console.log(`[Par ${pairNum}/${totalPairs}]`);

        const promises = pair.map((img, idx) => {
            const region = REGIONS[idx % REGIONS.length];
            console.log(`  → ${img.id} en ${region}`);
            return generateImage(img.prompt, img.output, region)
                .then(() => results.push({ id: img.id, output: img.output, status: "ok" }))
                .catch((err: any) => {
                    console.error(`  ❌ ${img.id}: ${err.message}`);
                    results.push({ id: img.id, output: img.output, status: "error", error: err.message });
                });
        });

        await Promise.all(promises);

        if (i + 2 < pending.length) {
            await countdown(DELAY_BETWEEN_PAIRS_MS / 1000);
        }
    }

    // Resumen
    console.log("\n── Resumen ──────────────────────────────────");
    const ok = results.filter((r) => r.status === "ok");
    const errors = results.filter((r) => r.status === "error");
    console.log(`✅ Generadas: ${ok.length}/${pending.length}`);
    if (errors.length > 0) {
        console.log(`❌ Fallidas:  ${errors.length}`);
        errors.forEach((e) => console.log(`   - ${e.id}: ${e.error}`));
        console.log(`\n   Para retomar: RESUME_FROM=${errors[0].id} pnpm generate-leed`);
    }

    // imageMap — usa la variante -1 por defecto para cada leed
    // Puedes cambiar manualmente a -2 o -3 si prefieres otra variante
    console.log("\n── imageMap para CarruselLeed ───────────────");
    console.log("const imageMap: { [key: string]: string } = {");
    ["leed1","leed2","leed3","leed4","leed5","leed6","leed7"].forEach((leedId) => {
        const img = images.find((r) => r.id === `${leedId}-1`);
        const result = results.find((r) => r.id === `${leedId}-1`);
        if (img && result?.status === "ok") {
            console.log(`  '${leedId}': '/${img.output}',`);
        }
    });
    console.log("};");
}

main().catch((err) => {
    console.error("Error fatal:", err.message ?? err);
    process.exit(1);
});