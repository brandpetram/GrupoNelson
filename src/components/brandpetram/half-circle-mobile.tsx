/**
 * Half Circle Mobile
 *
 * OBJETIVO:
 * Recrear el componente HalfCircle (desktop) para móvil, pero con layout vertical
 * en lugar de horizontal. El semicírculo debe aparecer en el lado izquierdo
 * con números y labels al lado derecho.
 *
 * METODOLOGÍA:
 * 1. NO rotar componentes (aprendimos que transform rotate causa problemas de posicionamiento)
 * 2. Crear cada semicírculo DIRECTAMENTE en orientación vertical usando borderRadius apropiado
 * 3. Construir capa por capa, del más grande al más pequeño (igual que desktop)
 * 4. Usar misma estructura de capas que desktop pero con geometría vertical
 *
 * LECCIONES APRENDIDAS - TEXTOS:
 * ❌ NO usar transform rotate en textos (causa mismos problemas que en semicírculos)
 * ✅ Mantener textos en orientación normal (horizontal/legible)
 * ✅ Dividir textos largos en múltiples líneas con <br/> en lugar de rotar
 * ✅ Permitir que el texto sobresalga ligeramente del contenedor si es necesario
 * ✅ Usar tracking-tighter para comprimir espaciado entre letras
 * ✅ Usar font-black para peso pesado y text-left para alinear a la izquierda
 * ✅ Priorizar legibilidad sobre contención perfecta en el círculo
 *
 * LECCIONES APRENDIDAS - SEMICÍRCULOS Y SVG:
 * ❌ Intento fallido #1: Crear SVG paths complejos traduciendo coordenadas sin entender estructura
 * ❌ Intento fallido #2: Usar conic-gradient (no da bordes nítidos entre colores)
 * ❌ Conclusión errónea: "Las divisiones son semicírculos apilados" - INCORRECTO
 *
 * ✅ REALIDAD (después de analizar código desktop):
 * - Las 7 divisiones NO son semicírculos separados
 * - Es UN SOLO SVG que contiene 7 <path> dentro
 * - Cada <path> dibuja UNA REBANADA desde el centro hacia el arco (como pastel)
 * - Desktop: viewBox="0 0 100 50" (horizontal), centro en (50, 50)
 * - Mobile necesita: viewBox="0 0 50 100" (vertical), centro en (0, 50) - lado izquierdo
 * - Cada path: M 0 50 L [punto1] A [arco] Z
 * - 7 rebanadas iguales = 180° ÷ 7 = ~25.7° cada una
 *
 * LECCIONES APRENDIDAS - CÁLCULO DE PUNTOS SVG:
 * ✅ Para semicírculo vertical (mobile): viewBox="0 0 50 100", centro en (0, 50)
 * ✅ Radio = 50 (el ancho del viewBox)
 * ✅ Ángulos: de -90° (arriba) a +90° (abajo) = 180° total
 * ✅ 7 divisiones = 180° ÷ 7 = 25.714° cada una
 * ✅ Puntos calculados con: x = 0 + 50*cos(θ), y = 50 + 50*sin(θ)
 * ✅ 8 puntos totales (7 divisiones = 8 fronteras):
 *    P0 (-90°): (0, 0)
 *    P1 (-64.29°): (21.64, 4.74)
 *    P2 (-38.57°): (39.01, 18.82)
 *    P3 (-12.86°): (48.78, 38.87)
 *    P4 (12.86°): (48.78, 61.13)
 *    P5 (38.57°): (39.01, 81.18)
 *    P6 (64.29°): (21.64, 95.26)
 *    P7 (90°): (0, 100)
 * ✅ Cada path: M 0 50 L [punto_inicial] A 50 50 0 0 1 [punto_final] Z
 *
 * LECCIONES APRENDIDAS - PROPORCIONES Y GROSOR DE ANILLOS:
 * ❌ ERROR CRÍTICO: Copiar los porcentajes de desktop sin ajustar para mobile
 *    - Desktop: blanco 35%, brillante 50.4%, oscuro 56% → anillo de 15.4%
 *    - Mobile v1 (malo): blanco 50%, brillante 50.4%, oscuro 56% → anillo de 0.4% (DEMASIADO DELGADO)
 *    - Mobile v2 (correcto): blanco 50%, brillante 65.4%, oscuro 72.6% → anillo de 15.4% ✅
 *
 * ✅ REGLA: El grosor visual del anillo debe mantenerse constante
 *    - Grosor = (radio_exterior - radio_interior) / radio_base
 *    - Si cambiamos el círculo blanco, DEBEMOS ajustar los SVGs de colores proporcionalmente
 *    - En mobile aumentamos el blanco de 35% a 50% (+15%), entonces los SVGs también deben crecer +15%
 *
 * ❌ NO HACER: Copiar porcentajes sin entender las proporciones resultantes
 * ✅ HACER: Calcular el grosor del anillo y mantenerlo al adaptar entre desktop/mobile
 *
 * ESTRUCTURA DE CÍRCULOS CONCÉNTRICOS (referencia):
 * Desktop usa múltiples círculos invisibles como guías de posicionamiento:
 * - 35%: Círculo blanco con texto
 * - 50.4% y 56%: Anillo de 7 colores (2 capas)
 * - 85%: Círculo invisible donde terminan las líneas divisoras
 * - 115%: Círculo invisible donde se posicionan los números 01-07
 * - 160%: Círculo invisible donde se posicionan los labels de texto
 *
 * CAPAS DEL COMPONENTE:
 * 1. ✅ Semicírculo gradiente base (naranja-rojo) - 64vw mobile
 * 2. ✅ Semicírculo blanco central con texto - 50% (ajustado para texto legible)
 * 3. ✅ Anillo de 7-divisiones - DOS SVGs (oscuro 72.6%, brillante 65.4%)
 * 4. ✅ SVG invisible 85% - estructura para líneas divisoras
 * 5. ✅ Líneas divisoras blancas - del 63% al borde del SVG 115%
 * 6. ✅ Círculos numerados (01-07) - SVG 115% con overflow:visible, bisectriz angular exacta
 * 7. ⏳ Labels de texto para cada división - en SVG más grande (160%)
 *
 * LECCIÓN CRÍTICA - VIEWBOX Y OVERFLOW:
 * ❌ Expandir viewBox descentraliza las coordenadas
 * ✅ Mantener viewBox estándar + overflow:visible permite que elementos se salgan sin recorte
 *
 * PROGRESO ACTUAL: Capas 1-6 completadas ✅
 * PRÓXIMO PASO: Agregar labels de texto verticalmente a la derecha del semicírculo
 */

const circleWidth = "64vw";

export function HalfCircleMobile() {
  return (
    <div
      style={{
        height: "800px",
        width: "100vw",
        margin: "0",
        padding: "0",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url('/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-303.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/0 z-0" />

      {/* CAPA 1: Semicírculo gradiente base */}
      <div
        className="bg-gradient-to-br from-orange-500 to-red-600 absolute left-0"
        style={{
          width: circleWidth,
          aspectRatio: "1 / 2",
          borderRadius: "0 100% 100% 0 / 0 50% 50% 0",
          opacity: 0.7,
          zIndex: 10,
          left: "-8vw",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* CAPA 3: SVG de 7-divisiones - versión oscura */}
      <svg
        style={{
          width: `calc(${circleWidth} * 0.726)`,
          height: "auto",
          position: "absolute",
          left: "-8vw",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 15,
        }}
        viewBox="0 0 50 100"
        preserveAspectRatio="none"
      >
        <path d="M 0 50 L 0 0 A 50 50 0 0 1 21.64 4.74 Z" fill="#571f0c" />
        <path d="M 0 50 L 21.64 4.74 A 50 50 0 0 1 39.01 18.82 Z" fill="#811313" />
        <path d="M 0 50 L 39.01 18.82 A 50 50 0 0 1 48.78 38.87 Z" fill="#9a1a1a" />
        <path d="M 0 50 L 48.78 38.87 A 50 50 0 0 1 48.78 61.13 Z" fill="#a72f2f" />
        <path d="M 0 50 L 48.78 61.13 A 50 50 0 0 1 39.01 81.18 Z" fill="#a33d08" />
        <path d="M 0 50 L 39.01 81.18 A 50 50 0 0 1 21.64 95.26 Z" fill="#ae500f" />
        <path d="M 0 50 L 21.64 95.26 A 50 50 0 0 1 0 100 Z" fill="#b18251" />
      </svg>

      {/* CAPA 3b: SVG de 7-divisiones - versión brillante (interior) */}
      <svg
        style={{
          width: `calc(${circleWidth} * 0.654)`,
          height: "auto",
          position: "absolute",
          left: "-8vw",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 16,
        }}
        viewBox="0 0 50 100"
        preserveAspectRatio="none"
      >
        <path d="M 0 50 L 0 0 A 50 50 0 0 1 21.64 4.74 Z" fill="#7c2d12" />
        <path d="M 0 50 L 21.64 4.74 A 50 50 0 0 1 39.01 18.82 Z" fill="#b91c1c" />
        <path d="M 0 50 L 39.01 18.82 A 50 50 0 0 1 48.78 38.87 Z" fill="#dc2626" />
        <path d="M 0 50 L 48.78 38.87 A 50 50 0 0 1 48.78 61.13 Z" fill="#ef4444" />
        <path d="M 0 50 L 48.78 61.13 A 50 50 0 0 1 39.01 81.18 Z" fill="#ea580c" />
        <path d="M 0 50 L 39.01 81.18 A 50 50 0 0 1 21.64 95.26 Z" fill="#f97316" />
        <path d="M 0 50 L 21.64 95.26 A 50 50 0 0 1 0 100 Z" fill="#fdba74" />
      </svg>

      {/* SVG invisible de referencia - define estructura para líneas y círculos */}
      <svg
        style={{
          width: `calc(${circleWidth} * 0.85)`,
          height: "auto",
          position: "absolute",
          left: "-8vw",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 19,
        }}
        viewBox="0 0 50 100"
        preserveAspectRatio="none"
      >
        <path d="M 0 50 L 0 0 A 50 50 0 0 1 21.64 4.74 Z" fill="#7c2d12" opacity="0" />
        <path d="M 0 50 L 21.64 4.74 A 50 50 0 0 1 39.01 18.82 Z" fill="#b91c1c" opacity="0" />
        <path d="M 0 50 L 39.01 18.82 A 50 50 0 0 1 48.78 38.87 Z" fill="#dc2626" opacity="0" />
        <path d="M 0 50 L 48.78 38.87 A 50 50 0 0 1 48.78 61.13 Z" fill="#ef4444" opacity="0" />
        <path d="M 0 50 L 48.78 61.13 A 50 50 0 0 1 39.01 81.18 Z" fill="#ea580c" opacity="0" />
        <path d="M 0 50 L 39.01 81.18 A 50 50 0 0 1 21.64 95.26 Z" fill="#f97316" opacity="0" />
        <path d="M 0 50 L 21.64 95.26 A 50 50 0 0 1 0 100 Z" fill="#fdba74" opacity="0" />
      </svg>

      {/* CAPA 6: Líneas divisoras blancas - extendidas más allá */}
      <svg
        style={{
          width: `calc(${circleWidth} * 1.15)`,
          height: "auto",
          position: "absolute",
          left: "-8vw",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
        }}
        viewBox="0 0 50 100"
        preserveAspectRatio="none"
      >
        {/* Línea 1 */}
        <line
          x1={0 + (21.64 - 0) * 0.63}
          y1={50 + (4.74 - 50) * 0.63}
          x2="21.64"
          y2="4.74"
          stroke="white"
          strokeWidth="0.1"
        />
        {/* Línea 2 */}
        <line
          x1={0 + (39.01 - 0) * 0.63}
          y1={50 + (18.82 - 50) * 0.63}
          x2="39.01"
          y2="18.82"
          stroke="white"
          strokeWidth="0.1"
        />
        {/* Línea 3 */}
        <line
          x1={0 + (48.78 - 0) * 0.63}
          y1={50 + (38.87 - 50) * 0.63}
          x2="48.78"
          y2="38.87"
          stroke="white"
          strokeWidth="0.1"
        />
        {/* Línea 4 */}
        <line
          x1={0 + (48.78 - 0) * 0.63}
          y1={50 + (61.13 - 50) * 0.63}
          x2="48.78"
          y2="61.13"
          stroke="white"
          strokeWidth="0.1"
        />
        {/* Línea 5 */}
        <line
          x1={0 + (39.01 - 0) * 0.63}
          y1={50 + (81.18 - 50) * 0.63}
          x2="39.01"
          y2="81.18"
          stroke="white"
          strokeWidth="0.1"
        />
        {/* Línea 6 */}
        <line
          x1={0 + (21.64 - 0) * 0.63}
          y1={50 + (95.26 - 50) * 0.63}
          x2="21.64"
          y2="95.26"
          stroke="white"
          strokeWidth="0.1"
        />
      </svg>

      {/* CAPA 4: Círculos numerados - en el centro angular de cada sección */}
      <svg
        style={{
          width: `calc(${circleWidth} * 1.15)`,
          height: "auto",
          position: "absolute",
          left: "-8vw",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 21,
          overflow: "visible",
        }}
        viewBox="0 0 50 100"
        preserveAspectRatio="none"
      >
        {/* Círculo 1: ángulo -77.145° (centro entre -90° y -64.29°), radio 50 desde (0,50) */}
        <circle cx="11.13" cy="2.51" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#7c2d12" strokeWidth="0.15" />
        <text x="11.13" y="2.51" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5">01</text>

        {/* Círculo 2: ángulo -51.43° (centro entre -64.29° y -38.57°), radio 50 desde (0,50) */}
        <circle cx="31.18" cy="11.09" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#b91c1c" strokeWidth="0.15" />
        <text x="31.18" y="11.09" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5">02</text>

        {/* Círculo 3: ángulo -25.715° (centro entre -38.57° y -12.86°), radio 50 desde (0,50) */}
        <circle cx="45.18" cy="28.41" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#dc2626" strokeWidth="0.15" />
        <text x="45.18" y="28.41" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5">03</text>

        {/* Círculo 4: ángulo 0° (centro entre -12.86° y +12.86°), radio 50 desde (0,50) */}
        <circle cx="50" cy="50" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#ef4444" strokeWidth="0.15" />
        <text x="50" y="50" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5">04</text>

        {/* Círculo 5: ángulo +25.715° (centro entre +12.86° y +38.57°), radio 50 desde (0,50) */}
        <circle cx="45.18" cy="71.59" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#ea580c" strokeWidth="0.15" />
        <text x="45.18" y="71.59" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5">05</text>

        {/* Círculo 6: ángulo +51.43° (centro entre +38.57° y +64.29°), radio 50 desde (0,50) */}
        <circle cx="31.18" cy="88.91" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#f97316" strokeWidth="0.15" />
        <text x="31.18" y="88.91" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5">06</text>

        {/* Círculo 7: ángulo +77.145° (centro entre +64.29° y +90°), radio 50 desde (0,50) */}
        <circle cx="11.13" cy="97.49" r="4.68" fill="rgba(0,0,0,0.7)" stroke="#fdba74" strokeWidth="0.15" />
        <text x="11.13" y="97.49" fontSize="2.8" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold" letterSpacing="-0.5">07</text>
      </svg>

      {/* CAPA 7: Labels de texto - usando divs en lugar de SVG para evitar deformaciones */}

      {/* Label 1: "Reparación Mantenimiento" */}
      <div
        style={{
          position: "absolute",
          left: "17vw",
          top: "60px",
          zIndex: 25,
          color: "white",
          fontSize: "1rem",
          fontWeight: "700",
          fontFamily: "var(--font-geist-sans), sans-serif",
          letterSpacing: "-0.025em",
          fontStretch: "condensed",
          lineHeight: "1.1",
          whiteSpace: "nowrap",
        }}
      >
        <div>Reparación</div>
        <div>Mantenimiento</div>
      </div>

      {/* Label 2: "Refacciones y Kits" */}
      <div
        style={{
          position: "absolute",
          left: "50vw",
          top: "120px",
          zIndex: 25,
          color: "white",
          fontSize: "1rem",
          fontWeight: "700",
          fontFamily: "var(--font-geist-sans), sans-serif",
          letterSpacing: "-0.025em",
          fontStretch: "condensed",
          lineHeight: "1.1",
          whiteSpace: "nowrap",
        }}
      >
        <div>Refacciones</div>
        <div>y Kits</div>
      </div>

      {/* Label 3: "Built to Suit" */}
      <div
        style={{
          position: "absolute",
          left: "70vw",
          top: "240px",
          zIndex: 25,
          color: "white",
          fontSize: "1rem",
          fontWeight: "700",
          fontFamily: "var(--font-geist-sans), sans-serif",
          letterSpacing: "-0.025em",
          fontStretch: "condensed",
          lineHeight: "1.1",
          whiteSpace: "nowrap",
        }}
      >
        <div>Built</div>
        <div>to Suit</div>
      </div>

      {/* Label 4: "Nuevas Líneas" */}
      <div
        style={{
          position: "absolute",
          left: "75vw",
          top: "370px",
          zIndex: 30,
          color: "white",
          fontSize: "1rem",
          fontWeight: "700",
          fontFamily: "var(--font-geist-sans), sans-serif",
          letterSpacing: "-0.025em",
          fontStretch: "condensed",
          lineHeight: "1.1",
          whiteSpace: "nowrap",
        }}
      >
        <div>Nuevas</div>
        <div>Líneas</div>
      </div>

      {/* Label 5: "Industria Alimenticia" */}
      <div
        style={{
          position: "absolute",
          left: "69vw",
          top: "520px",
          zIndex: 25,
          color: "white",
          fontSize: "1rem",
          fontWeight: "700",
          fontFamily: "var(--font-geist-sans), sans-serif",
          letterSpacing: "-0.025em",
          fontStretch: "condensed",
          lineHeight: "1.1",
          whiteSpace: "nowrap",
        }}
      >
        <div>Industria</div>
        <div>Alimenticia</div>
      </div>

      {/* Label 6: "Industria Manufactura" */}
      <div
        style={{
          position: "absolute",
          left: "49vw",
          top: "620px",
          zIndex: 25,
          color: "white",
          fontSize: "1rem",
          fontWeight: "700",
          fontFamily: "var(--font-geist-sans), sans-serif",
          letterSpacing: "-0.025em",
          fontStretch: "condensed",
          lineHeight: "1.1",
          whiteSpace: "nowrap",
        }}
      >
        <div>Industria</div>
        <div>Manufactura</div>
      </div>

      {/* Label 7: "Industria Automotriz" */}
      <div
        style={{
          position: "absolute",
          left: "20vw",
          top: "700px",
          zIndex: 25,
          color: "white",
          fontSize: "1rem",
          fontWeight: "700",
          fontFamily: "var(--font-geist-sans), sans-serif",
          letterSpacing: "-0.025em",
          fontStretch: "condensed",
          lineHeight: "1.1",
          whiteSpace: "nowrap",
        }}
      >
        <div>Industria</div>
        <div>Automotriz</div>
      </div>

      {/* CAPA 2: Semicírculo blanco central con texto */}
      <div
        className="bg-background absolute left-0 flex items-center justify-center"
        style={{
          width: `calc(${circleWidth} * 0.5)`,
          aspectRatio: "1 / 2",
          borderRadius: "0 100% 100% 0 / 0 50% 50% 0",
          zIndex: 20,
          left: "-8vw",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div className="text-left text-foreground font-black tracking-tighter uppercase px-3 w-full">
          <div className="text-lg leading-tight">
            Conveyors<br/>Industriales
          </div>
        </div>
      </div>
    </div>
  )
}
