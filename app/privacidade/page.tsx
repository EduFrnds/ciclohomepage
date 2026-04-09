import Link from "next/link"

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-surface px-8 py-24 text-white">
      <div className="mx-auto max-w-4xl space-y-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-outline-variant px-4 py-2 text-sm font-medium text-on-surface/70 transition-all hover:border-primary hover:text-white"
        >
          ← Voltar para o site
        </Link>

        <h1 className="text-4xl font-bold">Política de Privacidade</h1>

        <p className="leading-relaxed text-on-surface/70">
          A Ciclo valoriza a privacidade e a proteção dos dados pessoais
          compartilhados por visitantes, leads e clientes em seu site. Esta
          política explica como coletamos, utilizamos e protegemos suas
          informações, em conformidade com a Lei Geral de Proteção de Dados.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">1. Dados coletados</h2>
          <p className="leading-relaxed text-on-surface/70">
            Podemos coletar nome, email, telefone, empresa e informações
            compartilhadas voluntariamente em formulários, agendamentos,
            newsletter e canais de contato.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">2. Finalidade</h2>
          <p className="leading-relaxed text-on-surface/70">
            Utilizamos os dados para responder solicitações, realizar
            diagnósticos estratégicos, agendar reuniões, enviar conteúdos
            relevantes e melhorar a experiência no site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">3. Compartilhamento</h2>
          <p className="leading-relaxed text-on-surface/70">
            Os dados podem ser processados por ferramentas de terceiros
            utilizadas na operação do site, como Google Calendar, WhatsApp e
            serviços de email.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">4. Direitos do titular</h2>
          <p className="leading-relaxed text-on-surface/70">
            Você pode solicitar acesso, correção, exclusão ou atualização dos
            seus dados a qualquer momento pelo email da Ciclo.
          </p>
        </section>
      </div>
    </main>
  )
}
