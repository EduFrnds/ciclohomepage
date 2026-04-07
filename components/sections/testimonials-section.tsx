"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
  link: string
}

const testimonials: Testimonial[] = [
  {
    name: "Lilian de Paula",
    role: "CEO LP Soluções.",
    image: "/LP.jpg",
    quote:
      "Trabalhar em parceria com a CICLO, tem sido uma experiência muito enriquecedora. Atuamos juntos em projetos de BI que exigem tanto profundidade técnica quanto visão estratégica, e essa troca tem agregado muito valor às entregas. É uma consultoria que realmente entrega profissionalismo, competência e dedicação.",
    link: "https://www.instagram.com/liliancdepaula/",
  },
  {
    name: "André Melo",
    role: "CEO Melo Logística.",
    image: "/MELO.jpg",
    quote:
      "Com a  consultoria de dados da CICLO, está sendo possível enxergar o que antes parecia distante. Muita informação está sendo transformada em dado real, fazendo nós, da MELO, ajustarmos as velas e continuarmos a navegar, porém de uma forma mais segura e confíavel.",
    link: "https://www.instagram.com/melo_logistica/",
  },
  {
    name: "Amanda de Carvalho",
    role: "Diretora Amanda de Carvalho - Consultoria e Treinamentos.",
    image: "/AMANDA.jpg",
    quote:
      "Projeto em desenvolvimento - A proposta é sair de registros dispersos e pouca visibilidade para um modelo consistente, onde cada auditoria gera informação confiável, comparável e útil para a operação. Na prática, vamos estruturar a base que sustenta a melhoria contínua, permitindo acompanhar evolução por área, identificar desvios com rapidez e apoiar decisões com segurança.",
    link: "https://www.instagram.com/amandacarvalhosgi/",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container mx-auto px-8 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-label text-xs tracking-widest text-[#e0e0e0] uppercase">
            Resultados que geram confiança
          </span>

          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Empresas que transformaram dados dispersos em decisões com direção
          </h2>
          <p className="text-lg text-muted-foreground">
            Projetos desenvolvidos com foco em estrutura, confiabilidade e
            decisões sustentadas por dados que refletem a realidade da operação.
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3 lg:gap-4">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="mb-6 break-inside-avoid shadow-none lg:mb-4"
            >
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="size-12 shrink-0 bg-muted">
                    <AvatarImage
                      alt={testimonial.name}
                      src={testimonial.image}
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer"
                    >
                      <h3 className="font-medium transition-colors hover:text-primary">
                        {testimonial.name}
                      </h3>
                    </a>
                    <span className="block text-sm tracking-wide text-muted-foreground">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                <blockquote className="mt-4">
                  <p className="text-sm leading-relaxed text-balance">
                    {testimonial.quote}
                  </p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
