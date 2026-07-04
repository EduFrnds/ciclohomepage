"use client"

import { ArrowLeft, ArrowRight, CheckCircle2, Download } from "lucide-react"
import { FormEvent, useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type LeadAnswers = {
  area: string
  tracking: string
  challenge: string
  impact: string
  moment: string
  name: string
  company: string
  email: string
  whatsapp: string
  acceptedTerms: boolean
}

type QuestionField = "area" | "tracking" | "challenge" | "impact" | "moment"

type AssessmentQuestion = {
  field: QuestionField
  title: string
  description: string
  options: string[]
}

type LeadAssessmentModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const initialAnswers: LeadAnswers = {
  area: "",
  tracking: "",
  challenge: "",
  impact: "",
  moment: "",
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  acceptedTerms: false,
}

const questions: AssessmentQuestion[] = [
  {
    field: "area",
    title: "Qual área mais precisa de informações confiáveis hoje?",
    description:
      "Escolha a área em que a falta de visibilidade mais afeta a rotina da empresa.",
    options: [
      "Comercial",
      "Financeiro",
      "Operação",
      "Produção",
      "Logística",
      "Qualidade e auditorias",
      "Gestão de Resíduos",
    ],
  },
  {
    field: "tracking",
    title: "Como sua empresa acompanha resultados atualmente?",
    description:
      "Isso nos ajuda a entender como a informação chega à gestão hoje.",
    options: [
      "Planilhas",
      "ERP ou sistema de gestão",
      "Dashboards e BI",
      "Relatórios manuais",
      "Não existe acompanhamento estruturado",
    ],
  },
  {
    field: "challenge",
    title: "Qual dificuldade mais se aproxima da sua realidade?",
    description:
      "Escolha o problema que mais consome tempo ou reduz a confiança nos números.",
    options: [
      "Dados espalhados em várias fontes",
      "Muito tempo para consolidar informações",
      "Números diferentes para a mesma pergunta",
      "Falta de indicadores para a gestão",
      "Decisões baseadas mais em percepção",
      "Dificuldade para acompanhar metas e resultados",
    ],
  },
  {
    field: "impact",
    title: "Onde esse problema mais afeta a empresa?",
    description: "Identifique o impacto mais percebido na rotina da operação.",
    options: [
      "Retrabalho da equipe",
      "Lentidão para tomar decisões",
      "Falhas de controle operacional",
      "Dificuldade para identificar prioridades",
      "Perda de tempo em reuniões",
      "Risco de decisões com informações incorretas",
    ],
  },
  {
    field: "moment",
    title: "Em que momento sua empresa está?",
    description:
      "A resposta ajuda a entender o nível de urgência e maturidade atual.",
    options: [
      "Quero organizar melhor os dados agora",
      "Estou avaliando possibilidades",
      "Já tenho indicadores, mas preciso evoluir",
      "Ainda estou entendendo o problema",
    ],
  },
]

export function LeadAssessmentModal({
  open,
  onOpenChange,
}: LeadAssessmentModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<LeadAnswers>(initialAnswers)
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalSteps = questions.length + 1
  const isContactStep = currentStep === questions.length
  const isSuccessStep = currentStep > questions.length

  const resetModal = () => {
    setCurrentStep(0)
    setAnswers(initialAnswers)
    setErrorMessage("")
    setIsSubmitting(false)
  }

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      resetModal()
    }

    onOpenChange(nextOpen)
  }

  const handleSelectOption = (field: QuestionField, value: string) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [field]: value,
    }))

    setErrorMessage("")
  }

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentStep]

    if (!answers[currentQuestion.field]) {
      setErrorMessage("Escolha uma opção para continuar.")
      return
    }

    setErrorMessage("")
    setCurrentStep((step) => step + 1)
  }

  const handlePreviousQuestion = () => {
    setErrorMessage("")
    setCurrentStep((step) => Math.max(0, step - 1))
  }

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!answers.name.trim() || !answers.email.trim()) {
      setErrorMessage("Preencha seu nome e email para acessar o material.")
      return
    }

    if (!answers.acceptedTerms) {
      setErrorMessage(
        "Confirme que deseja receber o material e conteúdos relacionados."
      )
      return
    }

    setErrorMessage("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/lead-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          area: answers.area,
          tracking: answers.tracking,
          challenge: answers.challenge,
          impact: answers.impact,
          moment: answers.moment,
          name: answers.name,
          company: answers.company,
          email: answers.email,
          whatsapp: answers.whatsapp,
          consent: answers.acceptedTerms,
          pageUrl: window.location.href,
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Erro ao registrar lead.")
      }

      setCurrentStep(questions.length + 1)
    } catch (error) {
      console.error(error)

      setErrorMessage(
        "Não foi possível enviar suas respostas agora. Tente novamente em instantes."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentQuestion = questions[currentStep]
  const progress = Math.min(((currentStep + 1) / totalSteps) * 100, 100)

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] w-[95vw] max-w-2xl overflow-y-auto border border-outline-variant bg-surface-container p-5 text-white md:p-8">
        {!isSuccessStep && (
          <>
            <div className="pr-12">
              <span className="font-label text-xs tracking-[0.2em] text-primary uppercase">
                Material gratuito
              </span>

              <h2 className="mt-3 font-headline text-2xl leading-tight font-bold text-white md:text-3xl">
                Entenda onde seus dados podem estar travando decisões
              </h2>
            </div>

            <div className="mt-2">
              <div className="mb-2 flex items-center justify-between text-xs text-on-surface/60">
                <span>
                  Etapa {Math.min(currentStep + 1, totalSteps)} de {totalSteps}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </>
        )}

        {!isContactStep && !isSuccessStep && currentQuestion && (
          <div className="mt-4">
            <DialogHeader className="pr-10 text-left">
              <DialogTitle className="font-headline text-xl leading-tight font-bold text-white md:text-2xl">
                {currentQuestion.title}
              </DialogTitle>

              <DialogDescription className="mt-2 text-sm leading-relaxed text-on-surface/70">
                {currentQuestion.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 grid gap-3">
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentQuestion.field] === option

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      handleSelectOption(currentQuestion.field, option)
                    }
                    className={`rounded-xl border px-4 py-4 text-left text-sm font-medium transition-all md:text-base ${
                      isSelected
                        ? "border-primary bg-primary/15 text-white"
                        : "border-outline-variant bg-white/[0.03] text-on-surface/70 hover:border-primary/70 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>

            {errorMessage && (
              <p className="mt-4 text-sm text-red-300">{errorMessage}</p>
            )}

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePreviousQuestion}
                disabled={currentStep === 0}
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-sm font-bold text-on-surface/70 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowLeft className="size-4" />
                Voltar
              </button>

              <button
                type="button"
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition-all hover:bg-primary-alt"
              >
                Continuar
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        )}

        {isContactStep && (
          <div className="mt-4">
            <DialogHeader className="pr-10 text-left">
              <DialogTitle className="font-headline text-xl font-bold text-white md:text-2xl">
                Receba o guia gratuito
              </DialogTitle>

              <DialogDescription className="mt-2 text-sm leading-relaxed text-on-surface/70">
                Preencha seus dados para acessar o material e receber conteúdos
                relacionados à estruturação de dados e indicadores.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-white">
                  Nome
                  <input
                    type="text"
                    value={answers.name}
                    onChange={(event) =>
                      setAnswers((currentAnswers) => ({
                        ...currentAnswers,
                        name: event.target.value,
                      }))
                    }
                    placeholder="Seu nome"
                    className="rounded-xl border border-outline-variant bg-white/[0.03] px-4 py-3 text-white transition-colors outline-none placeholder:text-on-surface/40 focus:border-primary"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-white">
                  Empresa
                  <input
                    type="text"
                    value={answers.company}
                    onChange={(event) =>
                      setAnswers((currentAnswers) => ({
                        ...currentAnswers,
                        company: event.target.value,
                      }))
                    }
                    placeholder="Nome da empresa"
                    className="rounded-xl border border-outline-variant bg-white/[0.03] px-4 py-3 text-white transition-colors outline-none placeholder:text-on-surface/40 focus:border-primary"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-white">
                  Email
                  <input
                    type="email"
                    value={answers.email}
                    onChange={(event) =>
                      setAnswers((currentAnswers) => ({
                        ...currentAnswers,
                        email: event.target.value,
                      }))
                    }
                    placeholder="voce@empresa.com"
                    className="rounded-xl border border-outline-variant bg-white/[0.03] px-4 py-3 text-white transition-colors outline-none placeholder:text-on-surface/40 focus:border-primary"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-white">
                  WhatsApp
                  <input
                    type="tel"
                    value={answers.whatsapp}
                    onChange={(event) =>
                      setAnswers((currentAnswers) => ({
                        ...currentAnswers,
                        whatsapp: event.target.value,
                      }))
                    }
                    placeholder="(00) 00000 0000"
                    className="rounded-xl border border-outline-variant bg-white/[0.03] px-4 py-3 text-white transition-colors outline-none placeholder:text-on-surface/40 focus:border-primary"
                  />
                </label>
              </div>

              <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-on-surface/60">
                <input
                  type="checkbox"
                  checked={answers.acceptedTerms}
                  onChange={(event) =>
                    setAnswers((currentAnswers) => ({
                      ...currentAnswers,
                      acceptedTerms: event.target.checked,
                    }))
                  }
                  className="mt-0.5 size-4 accent-primary"
                />
                <span>
                  Concordo em receber o material solicitado e comunicações da
                  Ciclo relacionadas a dados, indicadores e gestão.
                </span>
              </label>

              {errorMessage && (
                <p className="text-sm text-red-300">{errorMessage}</p>
              )}

              <div className="flex items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={handlePreviousQuestion}
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-sm font-bold text-on-surface/70 transition-colors hover:text-white"
                >
                  <ArrowLeft className="size-4" />
                  Voltar
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition-all hover:bg-primary-alt disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    "Enviando respostas..."
                  ) : (
                    <>
                      Acessar guia gratuito
                      <Download className="size-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {isSuccessStep && (
          <div className="py-4 text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary">
              <CheckCircle2 className="size-9" />
            </div>

            <h2 className="mt-6 font-headline text-2xl font-bold text-white md:text-3xl">
              Seu guia está pronto
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-on-surface/70 md:text-base">
              Use este material para identificar sinais de retrabalho, baixa
              confiança nos números e falta de visibilidade na gestão.
            </p>

            <a
              href="/guia-gargalos-dados.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 font-bold text-white transition-all hover:bg-primary-alt"
            >
              Baixar guia gratuito
              <Download className="size-5" />
            </a>

            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="mt-5 block w-full text-sm font-bold text-on-surface/60 transition-colors hover:text-white"
            >
              Voltar para o site
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
