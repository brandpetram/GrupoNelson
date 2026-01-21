/**
 * Half Circle
 * Componente cero props, hardcodeado
 * Semicírculo en color emerald-600 - fácil de redimensionar
 * Contenedor: 100vh | Half-circle: 50vh de altura
 *
 * PERSONALIZACIÓN:
 * - circleWidth: ancho del círculo exterior (ej: 80vw, 70vw, 90vw)
 *   Cambia este valor para hacer el círculo más ancho o más estrecho
 */

import { motion } from 'motion/react';


const circleWidth = "72vw"; // Ancho del círculo exterior
const rayLength = 20; // Longitud de los rayos - extienden hacia afuera

// Posiciones de los 7 textos en el semicircle - ajusta x y y según necesites
const labels = [
  { x: 8.5, y: 35, text: ["Parques de", "Clase Mundial"] },
  { x: 11.9, y:20, text: ["Innovación", "Técnica"] },
  { x: 28.8, y: 7, text: ["Built", "to Suit"] },
  { x: 50, y: 3, text: ["Desarrollo de", "Parques Clase"] },
  { x: 71.2, y: 7, text: ["Parques", "Sustentables"] },
  { x: 85.1, y: 19, text: ["Excelencia", "Industrial"] },
  { x: 93.5, y: 34, text: ["Confianza", "por Décadas"] },
];

export function HalfCircle() {
  return (
    <div
      className="flex items-end justify-center relative"
      style={{
        height: "100vh",
        backgroundImage: "url('/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-282.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/0 z-0" />

      <div className="relative z-10 flex items-end justify-center w-full h-full">
        {/* Big gradient circle - only this should be transparent */}
        <div
          className="bg-gradient-to-br from-blue-600 to-sky-500"
          style={{
            width: circleWidth,
            aspectRatio: "2 / 1",
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            opacity: 0.7,
          }}
        />

        {/* 7-division semicircle overlay - darker version */}
        <svg
          style={{
            width: `calc(${circleWidth} * 0.56)`,
            height: "auto",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
        >
          <path d="M 50 50 L 0 50 A 50 50 0 0 1 4.945 28.306 Z" fill="#1e3a8a" />
          <path d="M 50 50 L 4.945 28.306 A 50 50 0 0 1 18.820 10.909 Z" fill="#1e40af" />
          <path d="M 50 50 L 18.820 10.909 A 50 50 0 0 1 38.876 1.251 Z" fill="#2563eb" />
          <path d="M 50 50 L 38.876 1.251 A 50 50 0 0 1 61.124 1.251 Z" fill="#3b82f6" />
          <path d="M 50 50 L 61.124 1.251 A 50 50 0 0 1 81.180 10.909 Z" fill="#60a5fa" />
          <path d="M 50 50 L 81.180 10.909 A 50 50 0 0 1 95.055 28.306 Z" fill="#93c5fd" />
          <path d="M 50 50 L 95.055 28.306 A 50 50 0 0 1 100 50 Z" fill="#bfdbfe" />
        </svg>

{/* 7-division semicircle overlay - bright version, 10% smaller */}
        <svg
          style={{
            width: `calc(${circleWidth} * 0.504)`,
            height: "auto",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
        >
          <path d="M 50 50 L 0 50 A 50 50 0 0 1 4.945 28.306 Z" fill="#1e40af" />
          <path d="M 50 50 L 4.945 28.306 A 50 50 0 0 1 18.820 10.909 Z" fill="#2563eb" />
          <path d="M 50 50 L 18.820 10.909 A 50 50 0 0 1 38.876 1.251 Z" fill="#3b82f6" />
          <path d="M 50 50 L 38.876 1.251 A 50 50 0 0 1 61.124 1.251 Z" fill="#60a5fa" />
          <path d="M 50 50 L 61.124 1.251 A 50 50 0 0 1 81.180 10.909 Z" fill="#93c5fd" />
          <path d="M 50 50 L 81.180 10.909 A 50 50 0 0 1 95.055 28.306 Z" fill="#bfdbfe" />
          <path d="M 50 50 L 95.055 28.306 A 50 50 0 0 1 100 50 Z" fill="#dbeafe" />
        </svg>

        {/* Semicircle on top - smaller to reveal 7-layered beneath - sensible a light/dark mode */}
        <div
          className="bg-background absolute flex items-end justify-center pb-6"
          style={{
            width: `calc(${circleWidth} * 0.35)`,
            aspectRatio: "2 / 1",
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <div className="text-center text-foreground font-black tracking-tighter uppercase ">
            <div className="text-lg md:text-2xl 1200:text-3xl lg:text-3xl 1728:text-4xl 1920:text-5xl">Naves Industriales </div>

          </div>
        </div>

        {/* 7-division semicircle transparent extended version (80% size) */}
        <svg
          style={{
            width: `calc(${circleWidth} * 0.85)`,
            height: "auto",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 19,
          }}
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
        >
          <path d="M 50 50 L 0 50 A 50 50 0 0 1 4.945 28.306 Z" fill="#1e40af" opacity="0" />
          <path d="M 50 50 L 4.945 28.306 A 50 50 0 0 1 18.820 10.909 Z" fill="#2563eb" opacity="0" />
          <path d="M 50 50 L 18.820 10.909 A 50 50 0 0 1 38.876 1.251 Z" fill="#3b82f6" opacity="0" />
          <path d="M 50 50 L 38.876 1.251 A 50 50 0 0 1 61.124 1.251 Z" fill="#60a5fa" opacity="0" />
          <path d="M 50 50 L 61.124 1.251 A 50 50 0 0 1 81.180 10.909 Z" fill="#0ea5e9" opacity="0" />
          <path d="M 50 50 L 81.180 10.909 A 50 50 0 0 1 95.055 28.306 Z" fill="#38bdf8" opacity="0" />
          <path d="M 50 50 L 95.055 28.306 A 50 50 0 0 1 100 50 Z" fill="#7dd3fc" opacity="0" />
        </svg>

        {/* Labels on larger invisible circle - above numbered circles */}
        {/* tracking-tighter (-0.05em) y leading-none */}
        <svg
          style={{
            width: `calc(${circleWidth} * 1.6)`,
            height: "auto",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
          }}
          viewBox="-15 -10 130 60"
          preserveAspectRatio="none"
        >
          {/* Labels - mapeados del array labels para fácil ajuste */}
          {labels.map((label, idx) => (
            <motion.text
              key={idx}
              x={label.x}
              y={label.y}
              fontSize="1.8"
              fill="white"
              textAnchor="middle"
              fontWeight="700"
              fontFamily="Geist"
              className="tracking-tight"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.06125, delay: 0.1225 + idx * 0.18375, ease: "easeOut" }}
              style={{ transformOrigin: `${label.x}px ${label.y}px` }}
            >
              {typeof label.text === "string" ? (
                <tspan x={label.x} dy="0">
                  {label.text}
                </tspan>
              ) : (
                <>
                  <tspan x={label.x} dy="0">
                    {label.text[0]}
                  </tspan>
                  <tspan x={label.x} dy="1.6">
                    {label.text[1]}
                  </tspan>
                </>
              )}
            </motion.text>
          ))}

        </svg>

        {/* Numbers positioned on invisible circle - between rays */}
        <svg
          style={{
            width: `calc(${circleWidth} * 1.15)`,
            height: "auto",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 21,
          }}
          viewBox="-7.5 -5 115 55"
          preserveAspectRatio="none"
        >
          {/* Circle + Number 1 - ANIMATED */}
          <motion.circle cx="2.5" cy="39.2" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#1e40af" strokeWidth="0.15" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.06125, ease: "easeOut" }} style={{ transformOrigin: "2.5px 39.2px" }} />
          <motion.text x="2.5" y="39.2" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.06125, ease: "easeOut" }} style={{ transformOrigin: "2.5px 39.2px" }}>01</motion.text>

          {/* Circle + Number 2 - ANIMATED */}
          <motion.circle cx="11.9" cy="19.6" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#2563eb" strokeWidth="0.15" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.245, ease: "easeOut" }} style={{ transformOrigin: "11.9px 19.6px" }} />
          <motion.text x="11.9" y="19.6" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.245, ease: "easeOut" }} style={{ transformOrigin: "11.9px 19.6px" }}>02</motion.text>

          {/* Circle + Number 3 - ANIMATED */}
          <motion.circle cx="28.8" cy="6.1" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#3b82f6" strokeWidth="0.15" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.42875, ease: "easeOut" }} style={{ transformOrigin: "28.8px 6.1px" }} />
          <motion.text x="28.8" y="6.1" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.42875, ease: "easeOut" }} style={{ transformOrigin: "28.8px 6.1px" }}>03</motion.text>

          {/* Circle + Number 4 - ANIMATED */}
          <motion.circle cx="50" cy="1.25" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#60a5fa" strokeWidth="0.15" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.6125, ease: "easeOut" }} style={{ transformOrigin: "50px 1.25px" }} />
          <motion.text x="50" y="1.25" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.6125, ease: "easeOut" }} style={{ transformOrigin: "50px 1.25px" }}>04</motion.text>

          {/* Circle + Number 5 - ANIMATED */}
          <motion.circle cx="71.2" cy="6.1" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#60a5fa" strokeWidth="0.15" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.79625, ease: "easeOut" }} style={{ transformOrigin: "71.2px 6.1px" }} />
          <motion.text x="71.2" y="6.1" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.79625, ease: "easeOut" }} style={{ transformOrigin: "71.2px 6.1px" }}>05</motion.text>

          {/* Circle + Number 6 - ANIMATED */}
          <motion.circle cx="88.1" cy="19.6" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#93c5fd" strokeWidth="0.15" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.98, ease: "easeOut" }} style={{ transformOrigin: "88.1px 19.6px" }} />
          <motion.text x="88.1" y="19.6" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.98, ease: "easeOut" }} style={{ transformOrigin: "88.1px 19.6px" }}>06</motion.text>

          {/* Circle + Number 7 - ANIMATED */}
          <motion.circle cx="97.5" cy="39.2" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#bfdbfe" strokeWidth="0.15" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 1.16375, ease: "easeOut" }} style={{ transformOrigin: "97.5px 39.2px" }} />
          <motion.text x="97.5" y="39.2" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 1.16375, ease: "easeOut" }} style={{ transformOrigin: "97.5px 39.2px" }}>07</motion.text>
        </svg>

        {/* 7-division semicircle with white division borders - from second circle to third */}
        <svg
          style={{
            width: `calc(${circleWidth} * 0.85)`,
            height: "auto",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
          }}
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
        >
          {/* Division borders - radial white lines from second circle to third circle */}
          {/* Line 1 - ANIMATED */}
          <motion.line x1={50 - (50 - 4.945) * 0.63} y1={50 - (50 - 28.306) * 0.63} x2="4.945" y2="28.306" stroke="white" strokeWidth="0.1" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, ease: "easeOut" }} />

          {/* Line 2 - ANIMATED */}
          <motion.line x1={50 - (50 - 18.820) * 0.63} y1={50 - (50 - 10.909) * 0.63} x2="18.820" y2="10.909" stroke="white" strokeWidth="0.1" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.18375, ease: "easeOut" }} />

          {/* Line 3 - ANIMATED */}
          <motion.line x1={50 - (50 - 38.876) * 0.63} y1={50 - (50 - 1.251) * 0.63} x2="38.876" y2="1.251" stroke="white" strokeWidth="0.1" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.3675, ease: "easeOut" }} />

          {/* Line 4 - ANIMATED */}
          <motion.line x1={50 + (61.124 - 50) * 0.63} y1={50 - (50 - 1.251) * 0.63} x2="61.124" y2="1.251" stroke="white" strokeWidth="0.1" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.55125, ease: "easeOut" }} />

          {/* Line 5 - ANIMATED */}
          <motion.line x1={50 + (81.180 - 50) * 0.63} y1={50 - (50 - 10.909) * 0.63} x2="81.180" y2="10.909" stroke="white" strokeWidth="0.1" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.735, ease: "easeOut" }} />

          {/* Line 6 - ANIMATED */}
          <motion.line x1={50 + (95.055 - 50) * 0.63} y1={50 - (50 - 28.306) * 0.63} x2="95.055" y2="28.306" stroke="white" strokeWidth="0.1" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.06125, delay: 0.91875, ease: "easeOut" }} />
        </svg>
      </div>
    </div>
  )
}