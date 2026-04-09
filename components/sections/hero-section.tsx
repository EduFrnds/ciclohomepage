"use client"

import Image from "next/image"
import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MaterialIcon } from "@/components/ui/material-icon"
import { HERO_IMAGE_URL } from "@/lib/data/home"

export function HeroSection() {
  const [openSchedule, setOpenSchedule] = useState(false)

  return (
    <>
      <header
        className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
        aria-labelledby="hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-outline-variant bg-surface-container/50 px-3 py-1 backdrop-blur-md">
              <span
                className="h-2 w-2 animate-pulse rounded-full bg-[#e0e0e0]"
                aria-hidden="true"
              />
              <span className="font-label text-xs tracking-widest text-[#e0e0e0] uppercase">
                Inteligência que gera eficiência
              </span>
            </div>

            <h1
              id="hero-heading"
              className="font-headline text-5xl leading-[1.1] font-bold tracking-tighter text-white md:text-7xl"
            >
              Transformar dados em{" "}
              <span className="gradient-text">decisões práticas</span> para
              empresas que querem crescer.
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-on-surface/70 md:text-xl">
              Elevamos a governança e análise de dados ao nível estratégico.
              Arquiteturas sob medida para quem exige clareza absoluta e
              eficiência operacional.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setOpenSchedule(true)}
                className="rounded-full bg-primary px-8 py-4 text-center text-lg font-bold text-white shadow-xl shadow-primary/25 transition-all hover:bg-primary-alt"
              >
                Agendar Sessão Estratégica
              </button>

              <a
                href="#pilares"
                className="flex items-center justify-center gap-2 rounded-full border border-outline-variant px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-colors hover:bg-white/5"
              >
                Nossos Fundamentos <MaterialIcon name="arrow_forward" />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="glass-card aspect-square overflow-hidden rounded-2xl border border-outline-variant p-4">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={HERO_IMAGE_URL}
                  alt="Visualização de estrutura de dados e arquitetura analítica"
                  fill
                  className="object-cover opacity-80 transition-all duration-700 hover:opacity-100"
                  sizes="(max-width: 1024px) 0px, 40vw"
                  priority
                />
              </div>
            </div>

            <div
              className="glass-card absolute -bottom-6 -left-6 rounded-xl border border-outline-variant p-6 shadow-2xl"
              aria-label="Indicador: 100% Foco em Praticidade"
            >
              <div className="font-headline text-4xl font-bold text-primary">
                100%
              </div>
              <div className="font-label text-xs text-on-surface/60 uppercase">
                Foco em Praticidade
              </div>
            </div>
          </div>
        </div>
      </header>

      <Dialog open={openSchedule} onOpenChange={setOpenSchedule}>
        <DialogContent className="w-full max-w-6xl border border-outline-variant bg-surface-container p-4 text-white md:p-6">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl font-bold text-white">
              Agendar Sessão Estratégica
            </DialogTitle>
          </DialogHeader>

          <p className="text-sm leading-relaxed text-on-surface/70 md:text-base">
            Escolha o melhor horário para uma sessão estratégica de 30 minutos
            focada em identificar gargalos, oportunidades e ganhos rápidos na
            sua operação.
          </p>

          <div className="h-[75vh] min-h-[600px] w-full overflow-hidden rounded-xl">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1aoQfbOBLDG6oo0CSAoPpnb486TLAN7ZZcLft2N7Qhy7NHFHToyTCoHZVe8SJwZFPtTiPPrPAj?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Agendamento de sessão estratégica"
              className="rounded-xl bg-white"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
