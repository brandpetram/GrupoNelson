interface StandardItem {
  label: string
  color?: string
  weight?: string
}

const defaultStandards: StandardItem[] = [
  { label: "LEED", weight: "font-black" },
  { label: "FM Global", weight: "font-light", color: "text-orange-600" },
  { label: "NFPA", weight: "font-black" },
  { label: "ISN", weight: "font-light", color: "text-orange-600" },
  { label: "BRB", weight: "font-black" },
  { label: "NOM", weight: "font-light" },
  { label: "IBC", weight: "font-black" },
  { label: "DC-3", weight: "font-light", color: "text-orange-600" },
]

export default function StandardsPoster({
  standards = defaultStandards,
}: {
  standards?: StandardItem[]
}) {
  return (
    <div data-component="StandardsPoster" data-component-file="src/components/brandpetram/standards-poster.tsx" data-component-props="true" className="relative">
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-border" />
      <div className="divide-y divide-border">
        {standards.map((item) => (
          <div key={item.label} className="py-8 md:py-12">
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl uppercase leading-none tracking-tight ${item.weight ?? "font-black"} ${item.color ?? "text-foreground"}`}
            >
              {item.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}
