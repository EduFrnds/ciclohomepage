import Image from "next/image"

import { MaterialIcon } from "@/components/ui/material-icon"
import { HERO_IMAGE_URL } from "@/lib/data/home"

export function HeroSection() {
  return (
    <header
      className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Background blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Text column */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-outline-variant bg-surface-container/50 backdrop-blur-md w-fit">
            <span
              className="w-2 h-2 rounded-full bg-accent animate-pulse"
              aria-hidden="true"
            />
            <span className="text-xs font-label uppercase tracking-widest text-accent">
              Inteligência que gera eficiência
            </span>
          </div>

          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] tracking-tighter text-white"
          >
            Transformar dados em{" "}
            <span className="gradient-text">decisões práticas</span> para
            empresas que querem crescer.
          </h1>

          <p className="text-lg md:text-xl text-on-surface/70 max-w-2xl leading-relaxed">
            Elevamos a governança e análise de dados ao nível estratégico.
            Arquiteturas sob medida para quem exige clareza absoluta e
            eficiência operacional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contato"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-alt transition-all shadow-xl shadow-primary/25 text-center"
            >
              Iniciar Diagnóstico
            </a>
            <a
              href="#sobre"
              className="border border-outline-variant backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
            >
              Nossa Metodologia{" "}
              <MaterialIcon name="arrow_forward" />
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="aspect-square rounded-2xl overflow-hidden glass-card p-4 border border-outline-variant">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={HERO_IMAGE_URL}
                alt="Visualização de estrutura de dados e arquitetura analítica"
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-all duration-700"
                sizes="(max-width: 1024px) 0px, 40vw"
                priority
              />
            </div>
          </div>

          <div
            className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl border border-outline-variant shadow-2xl"
            aria-label="Indicador: 100% Foco em Praticidade"
          >
            <div className="text-4xl font-headline font-bold text-primary">
              100%
            </div>
            <div className="text-xs font-label uppercase text-on-surface/60">
              Foco em Praticidade
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
