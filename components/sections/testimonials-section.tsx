"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Alexandra Mitchell',
    role: 'Desenvolvedora Frontend Sênior',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-1',
    quote:
      'Esta plataforma transformou completamente nosso fluxo de trabalho de desenvolvimento. O sistema de componentes é tão bem arquitetado que até aplicações complexas parecem simples de construir.',
  },
  {
    name: 'James Thompson',
    role: 'Líder Técnico',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-1',
    quote: 'Depois de experimentar inúmeros frameworks, este foi o que finalmente se encaixou. A documentação é excepcional.',
  },
  {
    name: 'Priya Sharma',
    role: 'Designer de Produto',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-2',
    quote:
      'O sistema de design é bonito e consistente. Consigo prototipar ideias rapidamente e entregá-las aos desenvolvedores com a certeza de que a implementação ficará perfeita.',
  },
  {
    name: 'Robert Kim',
    role: 'Gerente de Engenharia',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-2',
    quote:
      'Migramos toda a nossa aplicação para esta plataforma em apenas duas semanas. As melhorias de desempenho foram imediatas.',
  },
  {
    name: 'Maria Santos',
    role: 'Engenheira Full Stack',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-3',
    quote:
      'Os recursos de acessibilidade são de primeira linha. Nunca foi tão fácil criar aplicações inclusivas. Cada componente segue as melhores práticas desde o início, e o conjunto de testes automatizados garante que mantenhamos altos padrões de acessibilidade em todo o processo de desenvolvimento.',
  },
  {
    name: 'Thomas Anderson',
    role: 'Arquiteto de Soluções',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-3',
    quote: 'Escalabilidade era nossa maior preocupação, mas esta plataforma lida com a complexidade empresarial com facilidade.',
  },
  {
    name: 'Lisa Chang',
    role: 'Pesquisadora de UX',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-4',
    quote:
      'Os resultados dos testes com usuários têm sido consistentemente positivos desde que adotamos esta plataforma. A experiência do usuário é intuitiva e o desempenho é excepcional. Nossos índices de satisfação aumentaram 40% desde a migração.',
  },
  {
    name: 'Michael Foster',
    role: 'Engenheiro DevOps',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-4',
    quote: 'Implantação e manutenção são muito simples. A plataforma se integra perfeitamente ao nosso pipeline de CI/CD.',
  },
  {
    name: 'Sophie Laurent',
    role: 'Diretora Criativa',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-5',
    quote:
      'As possibilidades criativas são infinitas. Podemos dar vida a qualquer conceito de design sem comprometer a qualidade técnica ou a experiência do usuário.',
  },
  {
    name: 'Daniel Wilson',
    role: 'Desenvolvedor Backend',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-5',
    quote: 'O design da API é excepcional. Limpo, intuitivo e bem documentado.',
  },
  {
    name: 'Natasha Petrov',
    role: 'Desenvolvedora de Apps Mobile',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-6',
    quote:
      'O desenvolvimento multiplataforma nunca foi tão eficiente. Uma base de código, múltiplas plataformas, experiência de usuário consistente. Este é o futuro. O sistema de design responsivo garante que nossos apps fiquem perfeitos em qualquer dispositivo.',
  },
  {
    name: 'Carlos Rivera',
    role: 'Fundador de Startup',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-6',
    quote: 'Como fundador sem formação técnica, esta plataforma me deu a confiança para construir nosso MVP rapidamente.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container mx-auto px-8 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
           <span className="text-xs font-label uppercase tracking-widest text-[#e0e0e0]">
            Fundamentos
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Impulsionando a Inovação em Todo o Mundo
          </h2>
          <p className="text-lg text-muted-foreground">
            Junte-se a milhares de desenvolvedores e equipes que confiam em nossa plataforma para criar experiências digitais excepcionais.
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3 lg:gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mb-6 break-inside-avoid shadow-none lg:mb-4">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="bg-muted size-12 shrink-0">
                    <AvatarImage
                      alt={testimonial.name}
                      src={testimonial.image}
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <a href="#" onClick={e => e.preventDefault()} className="cursor-pointer">
                      <h3 className="font-medium hover:text-primary transition-colors">{testimonial.name}</h3>
                    </a>
                    <span className="text-muted-foreground block text-sm tracking-wide">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                <blockquote className="mt-4">
                  <p className="text-sm leading-relaxed text-balance">{testimonial.quote}</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}