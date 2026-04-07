import Image from "next/image"
import Link from "next/link"

import { MaterialIcon } from "@/components/ui/material-icon"
import { NewsletterForm } from "@/components/ui/newsletter-form"
import {
  footerInstitutionalLinks,
  footerLegalLinks,
  footerPillarLinks,
  LOGO_URL,
} from "@/lib/data/home"

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface px-8 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="mb-6 flex items-center gap-2">
            <Image
              src={LOGO_URL}
              alt="Ciclo Logo"
              width={32}
              height={32}
              className="rounded-lg object-contain"
            />
            <span className="font-headline text-lg font-bold text-white">
              Ciclo
            </span>
          </Link>
          <p className="mb-6 text-sm leading-relaxed text-on-surface/50">
            Dados que guiam empresas rumo à excelência operacional e crescimento
            estratégico.
          </p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ciclo no LinkedIn"
              className="flex size-8 items-center justify-center rounded-full border border-outline-variant text-on-surface/50 transition-colors hover:text-primary"
            >
              <MaterialIcon name="share" className="text-lg" />
            </a>
          </div>
        </div>

        {/* Pilares */}
        <nav aria-label="Links dos pilares">
          <h5 className="mb-6 font-headline font-bold text-white">Pilares</h5>
          <ul className="flex flex-col gap-4">
            {footerPillarLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-block text-sm text-on-surface/50 transition-all hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Institucional */}
        <nav aria-label="Links institucionais">
          <h5 className="mb-6 font-headline font-bold text-white">
            Institucional
          </h5>
          <ul className="flex flex-col gap-4">
            {footerInstitutionalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-block text-sm text-on-surface/50 transition-all hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter */}
        <div>
          <h5 className="mb-6 font-headline font-bold text-white">
            Newsletter
          </h5>
          <p className="mb-4 text-xs text-on-surface/50">
            Receba insights sobre estrutura de dados e crescimento.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-outline-variant pt-8 text-[10px] tracking-widest text-on-surface/40 uppercase md:flex-row">
        <div>© 2024 Ciclo - Dados que guiam. Todos os direitos reservados.</div>
        <nav aria-label="Links legais" className="flex gap-8">
          {footerLegalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
