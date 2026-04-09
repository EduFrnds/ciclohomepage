"use client"

import Image from "next/image"
import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MaterialIcon } from "@/components/ui/material-icon"

type CaseItem = {
  id: number
  image: string
  category: string
  title: string
  description: string
  challenge: string
  solution: string
  impact: string
}

const cases: CaseItem[] = [
  {
    id: 1,
    image: "/iot.png",
    category: "Escalabilidade Operacional",
    title: "Preparando uma operação para crescer com dados em tempo real",
    description:
      "Estruturamos uma arquitetura preparada para receber dados de dispositivos conectados, garantindo performance, confiabilidade e capacidade de crescimento sem comprometer a operação.",
    challenge:
      "A operação precisava se preparar para receber um volume crescente de dados de dispositivos conectados, sem comprometer estabilidade, velocidade e visibilidade gerencial.",
    solution:
      "Desenhamos uma estrutura preparada para escalar, organizar a entrada dos dados e sustentar o crescimento da operação com mais segurança e previsibilidade.",
    impact:
      "O projeto criou base para expansão com mais confiança, melhor aproveitamento dos dados e capacidade de tomada de decisão em um ambiente mais estável e preparado para crescer.",
  },
  {
    id: 2,
    image: "/fluxo_5s.png",
    category: "Qualidade e Auditoria",
    title: "Transformando auditorias em indicadores de ação imediata",
    description:
      "Saímos de registros dispersos e análises manuais para uma estrutura capaz de consolidar auditorias, identificar áreas críticas e direcionar planos de ação com clareza.",
    challenge:
      "As auditorias estavam distribuídas em registros manuais e análises pouco integradas, dificultando a comparação entre áreas, a priorização dos problemas e a visibilidade da gestão.",
    solution:
      "Estruturamos um fluxo capaz de consolidar auditorias, organizar os registros e transformar dados dispersos em indicadores claros para acompanhamento e ação gerencial.",
    impact:
      "A operação passou a identificar áreas críticas com mais rapidez, acompanhar evoluções com mais clareza e direcionar planos de ação com base em evidências.",
  },
  {
    id: 3,
    image: "/melo_dash.png",
    category: "Inteligência Operacional",
    title: "Da complexidade dos dados à clareza para decisões estratégicas",
    description:
      "Organizamos fluxos de dados operacionais e indicadores gerenciais para reduzir retrabalho, aumentar a confiança nos números e acelerar decisões críticas.",
    challenge:
      "A empresa lidava com dados operacionais complexos, consolidações demoradas e baixa confiança nas informações usadas pela gestão no dia a dia.",
    solution:
      "Organizamos o fluxo dos dados, estruturamos a lógica dos indicadores e transformamos informações dispersas em uma base confiável para leitura gerencial.",
    impact:
      "O resultado foi mais agilidade analítica, menos retrabalho manual e mais segurança para decisões estratégicas apoiadas em números confiáveis.",
  },
]

export function CasesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null)

  return (
    <>
      <section id="casos" className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 text-center">
            <span className="font-label text-xs tracking-widest text-on-surface uppercase">
              Resultados construídos sobre dores reais
            </span>

            <h2
              id="pillars-heading"
              className="mt-4 font-headline text-4xl font-bold text-white"
            >
              Casos reais de transformação com dados
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {cases.map((item) => (
              <article key={item.id} className="group">
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

                  <button
                    type="button"
                    onClick={() => setSelectedCase(item)}
                    className="inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-accent"
                  >
                    Saiba mais
                    <MaterialIcon name="north_east" className="text-base" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={!!selectedCase}
        onOpenChange={(open) => {
          if (!open) setSelectedCase(null)
        }}
      >
        <DialogContent className="max-h-[90vh] w-[95vw] max-w-5xl overflow-y-auto border border-outline-variant bg-surface-container p-4 text-white md:p-6">
          {selectedCase && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-outline-variant">
                <Image
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-5">
                <DialogHeader className="text-left">
                  <span className="font-label text-xs tracking-widest text-primary uppercase">
                    {selectedCase.category}
                  </span>

                  <DialogTitle className="pr-8 font-headline text-2xl leading-tight font-bold text-white md:text-3xl">
                    {selectedCase.title}
                  </DialogTitle>

                  <DialogDescription className="text-sm leading-relaxed text-on-surface/70 md:text-base">
                    {selectedCase.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-5">
                  <div>
                    <h4 className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
                      Desafio
                    </h4>
                    <p className="leading-relaxed text-on-surface/70">
                      {selectedCase.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
                      Solução
                    </h4>
                    <p className="leading-relaxed text-on-surface/70">
                      {selectedCase.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
                      Impacto
                    </h4>
                    <p className="leading-relaxed text-on-surface/70">
                      {selectedCase.impact}
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/5548991584156?text=Ol%C3%A1.%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista%20para%20avaliar%20oportunidades%20de%20melhoria%20na%20gest%C3%A3o%20dos%20nossos%20dados."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-6 py-3 font-bold text-white transition-all hover:bg-primary-alt"
                >
                  Quero aplicar algo parecido
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
