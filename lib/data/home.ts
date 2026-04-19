export const navLinks = [
  { href: "#", label: "Início", active: true },
  { href: "#sobre", label: "Nossa Abordagem" },
  { href: "#pilares", label: "Pilares" },
  { href: "#testimonials", label: "Clientes" },
  { href: "#casos", label: "Cases" },
]

export interface Pillar {
  icon: string
  title: string
  description: string
  variant: "primary" | "accent"
  featured?: boolean
  iconColor?: string
}

export const pillars: Pillar[] = [
  {
    icon: "search_insights",
    title: "Pilar 1 — Diagnóstico Estratégico",
    description:
      "Entender o cenário atual e o objetivo futuro antes de propor qualquer solução tecnológica.",
    variant: "primary",
    iconColor: "#056cf2",
  },
  {
    icon: "account_tree",
    title: "Pilar 2 — Estrutura Inteligente",
    description:
      "Modelagem e organização dos dados para criar uma base confiável e escalável.",
    variant: "primary",
    iconColor: "#0540f2",
    featured: true,
  },
  {
    icon: "trending_up",
    title: "Pilar 3 — Decisão com Direção",
    description:
      "Transformar dados estruturados em análises que sustentam o crescimento real e sustentável.",
    variant: "primary",
    iconColor: "#05aff2",
  },
]

export interface Project {
  image: string
  imageAlt: string
  title: string
  description: string
  offset: boolean
}

export const projects: Project[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnlURkRKAHa9EONsnB7BJwJH63YhHbgORhFp_9vdyqAE5jzp35XVRyyLMPnG28uRNk5x6Gso16BqKxzAUj4DlR0lG43Hl6IFuiT6bT0T9Y_nhvjjrw-EIHoPfC8l6-ox2NyJl8PF53MhTJDjsYNAgZFPrYoI7mF58bJijPV6Xq8ED5N89K3Z4Ifw5nGvFU0LaP4vwhgG8nKMp_dYmjckxUltpLga1lp7Lyw4tyDS-CItY2qaHEfkGZv2jBcoPvFgYW9qfB6Lc1JiOL",
    imageAlt: "Dashboard financeiro de otimização de risco",
    title: "Otimização de Risco em Tempo Real",
    description:
      "Redução de 45% em falso-positivos através de análise comportamental estruturada.",
    offset: false,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCViYQ6O420tI7XKvjUFLY348dS1nHx04qjnrR4q4jyyN8LGjkEYxOStb4FNg2bVMCkBcHqEQgVbLfVO7Py4_25ae4eivG9Xaim7l6fbuf64alDGUi_pt288tWwLvcbuExnhdiKTkzbO7GsKtHWItlD864Jx8KPKJdH9M7u2038-hRtzPI13u8I3KZqZrFE1Dsa_HHen3pvNC6_E-02daYNpBPNJJpaCTuGp2isME0EbidWmhFBYJNoDeLsWFv_zYf9ER4DnR3mRkIe",
    imageAlt: "Dashboard logístico de previsão de demanda",
    title: "Previsão de Demanda Multi-canal",
    description:
      "Gestão de estoque inteligente para 400 pontos de venda simultâneos.",
    offset: true,
  },
]

export const footerPillarLinks = [
  { href: "#pilares", label: "Diagnóstico Estratégico" },
  { href: "#pilares", label: "Estrutura Inteligente" },
  { href: "#pilares", label: "Decisão com Direção" },
]

export const footerInstitutionalLinks = [
  { href: "#sobre", label: "Metodologia" },
  {
    href: "https://www.linkedin.com/in/eduardo-fernandes-938a91139/",
    label: "LinkedIn",
  },
  { href: "#casos", label: "Cases" },
]

export const footerLegalLinks = [
  { href: "/privacidade", label: "Privacidade" },
  { href: "/termos", label: "Termos" },
]

export const LOGO_URL = "/ciclologo.png"

export const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD5S2b4WvgZ4xBEhJyUphhIhWu71kFazo-HGZaubTwrTHvGT9LdmIXtySAMPoUfKVzNQm_F9kE735EVqwHFqxmEoh3CEnwcBqgX7HTTXOhYBgIlr9i0E1is2LjX2EeKvasLAI28gmFXOREiTzeYr5Kd9_6TjlnLB6KcCwpUZbdfh5VP7L4HA9R1QmRyK8_dr3HP7TZlCm7J8obY1ZbAijOmu0vZAhtI3oULl5TYCGqcaeEyCtJVC0I2IFATqfQiXO2sf2VwrjQxf3Hn"
