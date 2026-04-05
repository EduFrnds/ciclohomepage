import { MaterialIcon } from "@/components/ui/material-icon"

export function ClosingCtaSection() {
  return (
    <section
      className="py-32 relative overflow-hidden bg-surface-container"
      id="contato"
      aria-labelledby="cta-heading"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-full h-full"
          style={{ background: "radial-gradient(circle at center, #0540f2 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <MaterialIcon
          name="format_quote"
          className="text-6xl text-primary mb-8"
          fill
        />

        <h2
          id="cta-heading"
          className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight mb-12"
        >
          &ldquo;Estrutura não é custo. É o que separa crescimento desorganizado
          de{" "}
          <span className="text-primary">crescimento sustentável</span>.&rdquo;
        </h2>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-alt transition-all shadow-2xl shadow-primary/40"
        >
          Falar com um Especialista
        </a>
      </div>
    </section>
  )
}
