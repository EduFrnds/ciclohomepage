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
            <span className="text-xs font-label uppercase tracking-[0.2em] text-[#e0e0e0]">
              Nossa Abordagem
            </span>
            <h2
              id="value-prop-heading"
              className="text-4xl md:text-5xl font-headline font-bold text-white leading-tight"
            >
              Como facilitamos sua operação
            </h2>

            <div className="w-20 h-1 bg-primary" aria-hidden="true" />

            <div className="text-on-surface/70 leading-relaxed text-lg space-y-5">
              <p>
                Hoje muitos negócios tomam decisões com planilhas desconectadas,
                relatórios manuais e indicadores sem confiança.
              </p>

              <p>
                Nossa atuação organiza a base, estrutura o fluxo dos dados e
                transforma a operação em um ambiente confiável para crescimento,
                controle e escala.
              </p>
          </div>

          {/* Right: impact cards */}
          <div className="flex flex-col gap-12">
            <article className="p-8 rounded-2xl bg-surface-container border-l-4 border-primary">
              <h3 className="text-2xl font-headline font-bold text-white mb-4">
                O impacto no seu dia a dia
              </h3>
              <p className="text-on-surface/70 leading-relaxed">
                No dia a dia, isso significa menos tempo perdido consolidando informações, 
                reuniões orientadas por indicadores confiáveis e decisões mais rápidas sobre onde agir,
                corrigir e investir.
              </p>
            </article>

            <article className="p-8 rounded-2xl bg-surface-container border-l-4 border-accent">
              <h3 className="text-2xl font-headline font-bold text-white mb-4">
                Por que a Ciclo é a escolha certa
              </h3>
              <p className="text-on-surface/70 leading-relaxed">
                Não entregamos apenas dashboards.

                Atuamos na origem do problema, estruturando a lógica dos dados, 
                regras de negócio e indicadores para que cada análise represente a realidade da operação.

                É isso que transforma BI em decisão, e não apenas em visualização.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
