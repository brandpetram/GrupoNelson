"use client"

import { delay, wrap } from "motion"
import { Typewriter } from "motion-plus/react"
import { useState } from "react"

export function TypewriterClients({
  clients = ["Gulfstream", "Honeywell", "DHL", "Skyworks", "Vertiv", "Rheem"],
}: {
  clients?: string[]
}) {
  const [index, setIndex] = useState(0)

  return (
    <Typewriter
      as="span"
      cursorStyle={{
        background: "#2563eb",
        width: 3,
      }}
      onComplete={() => {
        delay(() => setIndex(wrap(0, clients.length, index + 1)), 1.5)
      }}
      textStyle={{
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
      }}
    >
      {clients[index]}
    </Typewriter>
  )
}
