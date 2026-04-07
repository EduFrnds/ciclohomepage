"use client"

import { MaterialIcon } from "@/components/ui/material-icon"
import Image from "next/image"

const cases = [
  {
    id: 1,
    image: "https://ui.shadcn.com/placeholder.svg",
    category: "Tecnologia",
    title: "Catalisadores de IA no Desenvolvimento",
    description:
      "Como ferramentas orientadas por IA estão transformando fluxos de trabalho de desenvolvimento de software e acelerando a inovação.",
  },
  {
    id: 2,
    image: "https://ui.shadcn.com/placeholder.svg",
    category: "Gestão",
    title: "Guia de Gestão Enxuta",
    description:
      "Abordagens de gestão enxuta que ajudam a reduzir desperdícios e criar rotinas mais produtivas e eficientes.",
  },
  {
    id: 3,
    image: "https://ui.shadcn.com/placeholder.svg",
    category: "Design",
    title: "Tendências de UI Acessível",
    description:
      "Como as tendências modernas de UI estão abraçando a acessibilidade sem abrir mão de experiências intuitivas e elegantes.",
  },
]

export function CasesSection() {
  return (
    <section id="casos" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-8">
        {/* Section Header */}

        <div className="mb-12 text-center">
          <span className="font-label text-xs tracking-widest text-on-surface uppercase">
            Casos de Uso
          </span>
          <h2
            id="pillars-heading"
            className="mt-4 font-headline text-4xl font-bold text-white"
          >
            Insights e Referências
          </h2>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={225}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-surface to-transparent opacity-60"
                  aria-hidden="true"
                />
              </div>
              <div className="space-y-3">
                <span className="font-label text-xs tracking-widest text-on-surface uppercase">
                  {item.category}
                </span>
                <h3 className="font-headline text-xl font-bold text-white transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-on-surface/60">
                  {item.description}
                </p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-accent"
                >
                  Saiba mais
                  <MaterialIcon name="north_east" className="text-base" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
