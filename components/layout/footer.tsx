import Image from "next/image"
import Link from "next/link"

import { MaterialIcon } from "@/components/ui/material-icon"
import { NewsletterForm } from "@/components/ui/newsletter-form"
import {
  footerPillarLinks,
  footerInstitutionalLinks,
  footerLegalLinks,
  LOGO_URL,
} from "@/lib/data/home"

export function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant w-full py-16 px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Image
              src={LOGO_URL}
              alt="Ciclo Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-lg font-headline font-bold text-white">
              Ciclo
            </span>
          </Link>
          <p className="text-on-surface/50 text-sm leading-relaxed mb-6">
            Dados que guiam empresas rumo à excelência operacional e crescimento
            estratégico.
          </p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ciclo no LinkedIn"
              className="size-8 rounded-full border border-outline-variant flex items-center justify-center text-on-surface/50 hover:text-primary transition-colors"
            >
              <MaterialIcon name="share" className="text-lg" />
            </a>
          </div>
        </div>

        {/* Pilares */}
        <nav aria-label="Links dos pilares">
          <h5 className="text-white font-headline font-bold mb-6">Pilares</h5>
          <ul className="flex flex-col gap-4">
            {footerPillarLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-on-surface/50 text-sm hover:text-primary transition-all inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Institucional */}
        <nav aria-label="Links institucionais">
          <h5 className="text-white font-headline font-bold mb-6">
            Institucional
          </h5>
          <ul className="flex flex-col gap-4">
            {footerInstitutionalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-on-surface/50 text-sm hover:text-primary transition-all inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter */}
        <div>
          <h5 className="text-white font-headline font-bold mb-6">
            Newsletter
          </h5>
          <p className="text-on-surface/50 mb-4 text-xs">
            Receba insights sobre estrutura de dados e crescimento.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center text-on-surface/40 text-[10px] tracking-widest uppercase gap-4">
        <div>© 2024 Ciclo - Dados que guiam. Todos os direitos reservados.</div>
        <nav aria-label="Links legais" className="flex gap-8">
          {footerLegalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
