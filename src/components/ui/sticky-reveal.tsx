/**
 * NOMBRE: sticky-reveal.tsx
 * DESCRIPCIÓN: Sistema de componentes para crear el efecto "Sticky Reveal"
 *              donde secciones ocultas se revelan progresivamente al hacer scroll.
 *
 * ORDEN IMPORTANTE EN EL DOM:
 *   1. StickyRevealContent (sticky) - VA PRIMERO - se revela
 *   2. StickyRevealCover (tapa) - VA DESPUÉS - cubre la anterior
 *
 * USO:
 *   <StickyRevealContent>
 *     <TuSeccionRevelada />
 *   </StickyRevealContent>
 *   <StickyRevealCover>
 *     <TuSeccionTapa />
 *   </StickyRevealCover>
 *
 * CÓMO FUNCIONA:
 *   - Content (sticky top:0) permanece fija en pantalla
 *   - Cover (relative bottom:100vh) se posiciona encima visualmente
 *   - Al hacer scroll, Cover se desliza revelando Content
 */

import { cn } from '@/lib/utils';
import { ReactNode } from "react";

interface StickyRevealCoverProps {
  children: ReactNode;
  className?: string;
  /** Aplica bordes redondeados inferiores para efecto "ventana" */
  rounded?: boolean | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  /** Altura de la sección (default: h-screen) */
  height?: string;
}

interface StickyRevealContentProps {
  children: ReactNode;
  className?: string;
  /** Altura de la sección (default: h-screen) */
  height?: string;
  /** Offset desde el top cuando está fijo (default: "0"). Ej: "50px", "5vh" */
  stickyOffset?: string;
}

/**
 * Sección "tapa" que cubre la sección sticky siguiente.
 * Se desliza hacia arriba al hacer scroll, revelando el contenido debajo.
 */
export function StickyRevealCover({
  children,
  className,
  rounded = false,
  height = "h-screen",
}: StickyRevealCoverProps) {
  const roundedClasses = rounded
    ? typeof rounded === "boolean"
      ? "rounded-b-[100px]"
      : {
          sm: "rounded-b-2xl",
          md: "rounded-b-3xl",
          lg: "rounded-b-[50px]",
          xl: "rounded-b-[75px]",
          "2xl": "rounded-b-[100px]",
          "3xl": "rounded-b-[150px]",
        }[rounded]
    : "";

  return (
    <div
      className={cn(
        "relative",
        height,
        "z-[1]",
        roundedClasses,
        rounded && "overflow-hidden",
        className
      )}
      style={{
        bottom: "100vh",
      }}
    >
      {children}
    </div>
  );
}

/**
 * Sección "revelada" que permanece fija mientras el usuario hace scroll.
 * Se descubre cuando la sección Cover se desliza hacia arriba.
 */
export function StickyRevealContent({
  children,
  className,
  height = "h-screen",
  stickyOffset = "0",
}: StickyRevealContentProps) {
  // Si hay offset, ajustar la altura para dejar espacio visible arriba
  const hasOffset = stickyOffset !== "0";

  return (
    <div
      className={cn(
        "sticky",
        !hasOffset && height,
        className
      )}
      style={{
        top: stickyOffset,
        ...(hasOffset && { height: `calc(100vh - ${stickyOffset})` }),
      }}
    >
      {children}
    </div>
  );
}

/**
 * Componente de conveniencia que agrupa Cover + Content.
 * Útil cuando quieres aplicar el efecto a un par de secciones.
 */
interface StickyRevealGroupProps {
  /** Contenido de la sección que cubre (tapa) */
  cover: ReactNode;
  /** Contenido de la sección que se revela */
  content: ReactNode;
  /** Props para la sección Cover */
  coverProps?: Omit<StickyRevealCoverProps, "children">;
  /** Props para la sección Content */
  contentProps?: Omit<StickyRevealContentProps, "children">;
  className?: string;
}

export function StickyRevealGroup({
  cover,
  content,
  coverProps,
  contentProps,
  className,
}: StickyRevealGroupProps) {
  return (
    <div className={cn("relative", className)}>
      {/* ORDEN CRÍTICO: Content (sticky) ANTES, Cover (tapa) DESPUÉS */}
      <StickyRevealContent {...contentProps}>{content}</StickyRevealContent>
      <StickyRevealCover {...coverProps}>{cover}</StickyRevealCover>
    </div>
  );
}
