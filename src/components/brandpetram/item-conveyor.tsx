/**
 * Item Conveyor (Genérico)
 *
 * Componente reutilizable para items de imagen con texto
 * Acepta props para diferentes tipos de conveyors
 */

import { PlusSign } from './plus-sign'

interface ItemConveyorProps {
  image: string
  textTop: string
  textBottom: string
  alt: string
  isSelected?: boolean
}

export function ItemConveyor({ image, textTop, textBottom, alt, isSelected }: ItemConveyorProps) {
  return (
    <div className="flex items-start gap-4 cursor-pointer group/item">
      <div className={`relative flex-shrink-0  w-32 1536:w-42 aspect-square ${isSelected ? 'ring-2 ring-orange-500' : 'ring-0 ring-transparent'} transition-all duration-200`}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover rounded-xs ring-0 ring-transparent group-hover/item:ring-2 group-hover/item:ring-orange-500 transition-all duration-200"
        />
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 group-hover/item:scale-110">
          <PlusSign size={27} />
        </div>
      </div>
      <div className="flex flex-col justify-start pt-1">
        <p className="text-sm font-light text-foreground tracking-tighter">
          {textTop}
        </p>
        <p className="text-base font-extrabold text-foreground leading-tight tracking-tighter whitespace-pre-line transition-all duration-200 group-hover/item:bg-gradient-to-r group-hover/item:from-blue-600 group-hover/item:to-blue-700 group-hover/item:bg-clip-text group-hover/item:text-transparent">
          {textBottom}
        </p>
      </div>
    </div>
  )
}
