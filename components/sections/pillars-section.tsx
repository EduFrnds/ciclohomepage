import { MaterialIcon } from "@/components/ui/material-icon"
import { pillars, type Pillar } from "@/lib/data/home"

function PillarCard({ pillar }: { pillar: Pillar }) {
  const isAccent = pillar.variant === "accent"

  return (
    <article
      className={`p-10 rounded-2xl bg-surface-container border flex flex-col gap-4 transition-colors group ${
        isAccent
          ? "border-primary/30 hover:border-accent/50 md:translate-y-8"
          : "border-outline-variant hover:border-primary/50"
      }`}
    >
      <div
        className={`size-12 rounded-lg flex items-center justify-center transition-all ${
          isAccent
            ? "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white"
            : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
        }`}
      >
        <MaterialIcon name={pillar.icon} className="text-3xl" />
      </div>
      <h3 className="text-xl font-headline font-bold text-white">
        {pillar.title}
      </h3>
      <p className="text-sm text-on-surface/60 leading-relaxed">
        {pillar.description}
      </p>
    </article>
  )
}

export function PillarsSection() {
  return (
    <section
      className="py-24 bg-surface-container/30"
      id="pilares"
      aria-labelledby="pillars-heading"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-label uppercase tracking-widest text-[#e0e0e0]">
            Fundamentos
          </span>
          <h2
            id="pillars-heading"
            className="text-4xl font-headline font-bold text-white mt-4"
          >
            Os Três Pilares da Ciclo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  )
}
