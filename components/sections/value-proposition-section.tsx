export function ValuePropositionSection() {
  return (
    <section
      className="py-24 bg-surface-container/30"
      id="sobre"
      aria-labelledby="value-prop-heading"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: intro */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-label uppercase tracking-[0.2em] text-accent">
              Nossa Abordagem
            </span>
            <h2
              id="value-prop-heading"
              className="text-4xl md:text-5xl font-headline font-bold text-white leading-tight"
            >
              Como facilitamos sua operação
            </h2>
            <div className="w-20 h-1 bg-primary" aria-hidden="true" />
            <p className="text-on-surface/70 leading-relaxed text-lg">
              Facilitamos sua operação organizando o que hoje está disperso,
              transformando dados brutos em estrutura analítica confiável.
            </p>
          </div>

          {/* Right: impact cards */}
          <div className="flex flex-col gap-12">
            <article className="p-8 rounded-2xl bg-surface-container border-l-4 border-primary">
              <h3 className="text-2xl font-headline font-bold text-white mb-4">
                O impacto no seu dia a dia
              </h3>
              <p className="text-on-surface/70 leading-relaxed">
                No dia a dia, isso significa decisões mais rápidas, menos
                retrabalho, reuniões objetivas e segurança para direcionar
                investimento.
              </p>
            </article>

            <article className="p-8 rounded-2xl bg-surface-container border-l-4 border-accent">
              <h3 className="text-2xl font-headline font-bold text-white mb-4">
                Por que somos a melhor escolha
              </h3>
              <p className="text-on-surface/70 leading-relaxed">
                Somos a escolha certa porque atuamos na causa do problema, não
                apenas na superfície dos relatórios. Modelagem correta antes de
                visualização.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
