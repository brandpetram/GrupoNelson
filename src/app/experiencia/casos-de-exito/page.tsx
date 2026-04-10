import type { Metadata } from "next";
import Header from "@/components/Header";
import { HeroMarketing1Beta } from "./sections/hero-marketing-1-beta";
import { SplitStickyCasos } from "./sections/split-sticky-casos";
import { MosaicoCasos } from "./sections/mosaico-casos";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description:
    "Las empresas más exigentes que operan en Mexicali ya eligieron a Grupo Nelson. Gulfstream 35 años, Honeywell 30+, 80% repeat business.",
};

export default function CasosDeExitoPage() {
  return (
    <div className="min-h-screen mt-30">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Casos de Éxito
            Ángulo: la exigencia del cliente valida a Nelson
            Brief: docs/copy/angle-briefs/casos-de-exito-experiencia.md
            Dirección visual: docs/estrategia/direccion-visual-casos-de-exito.md
            Status: layout en construcción — ronda visual
            ══════════════════════════════════════════════════════════ */}

        {/* Bloque 1: Hero con overlay, grid, CTAs + div inferior 2 cols */}
        <HeroMarketing1Beta />

        {/* Bloque 2: Split sticky — texto scrolleable + imagen fija */}
        <SplitStickyCasos />

        {/* Bloque 3: Mosaico — versión local para territorio casos-de-exito */}
        <MosaicoCasos />

        {/* FIN COPY COMERCIAL */}
      </main>
    </div>
  );
}
