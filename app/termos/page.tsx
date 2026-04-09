import Link from "next/link"

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-surface px-8 py-24 text-white">
      <div className="mx-auto max-w-4xl space-y-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-outline-variant px-4 py-2 text-sm font-medium text-on-surface/70 transition-all hover:border-primary hover:text-white"
        >
          ← Voltar para o site
        </Link>

        <h1 className="text-4xl font-bold">Termos de Uso</h1>

        <p className="leading-relaxed text-on-surface/70">
          Ao acessar este site, o usuário concorda com os presentes termos de
          uso e com as condições descritas abaixo.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">1. Objetivo do site</h2>
          <p className="leading-relaxed text-on-surface/70">
            Este site tem caráter institucional e comercial, com o objetivo de
            apresentar os serviços, cases e canais de contato da Ciclo.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">2. Propriedade intelectual</h2>
          <p className="leading-relaxed text-on-surface/70">
            Todo o conteúdo deste site pertence à Ciclo e não pode ser
            reproduzido sem autorização prévia.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">3. Limitação</h2>
          <p className="leading-relaxed text-on-surface/70">
            As informações apresentadas possuem caráter informativo e não
            representam proposta comercial vinculante.
          </p>
        </section>
      </div>
    </main>
  )
}
