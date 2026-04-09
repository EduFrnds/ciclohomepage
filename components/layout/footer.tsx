"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MaterialIcon } from "@/components/ui/material-icon"
import { NewsletterForm } from "@/components/ui/newsletter-form"
import {
  footerInstitutionalLinks,
  footerLegalLinks,
  footerPillarLinks,
  LOGO_URL,
} from "@/lib/data/home"

export function Footer() {
  const [openShare, setOpenShare] = useState(false)

  const siteUrl = "https://www.cicloconsultdados.com.br"
  const shareText =
    "Conheça a Ciclo. Consultoria em dados para empresas que querem mais clareza, eficiência e decisões práticas."

  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(
    `${shareText} ${siteUrl}`
  )}`

  const emailShare = `mailto:?subject=${encodeURIComponent(
    "Conheça a Ciclo"
  )}&body=${encodeURIComponent(`${shareText}\n\n${siteUrl}`)}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl)
      alert("Link copiado com sucesso.")
    } catch {
      alert("Não foi possível copiar o link.")
    }
  }

  return (
    <>
      <footer className="w-full border-t border-outline-variant bg-surface px-8 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
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
              Dados que guiam empresas rumo à excelência operacional e
              crescimento estratégico.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/eduardo-fernandes-938a91139/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ciclo no LinkedIn"
                className="flex size-8 items-center justify-center rounded-full border border-outline-variant text-on-surface/50 transition-colors hover:text-primary"
              >
                <MaterialIcon name="business_center" className="text-lg" />
              </a>

              <button
                type="button"
                onClick={() => setOpenShare(true)}
                aria-label="Compartilhar site da Ciclo"
                className="flex size-8 items-center justify-center rounded-full border border-outline-variant text-on-surface/50 transition-colors hover:text-primary"
              >
                <MaterialIcon name="share" className="text-lg" />
              </button>
            </div>
          </div>

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

        <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-outline-variant pt-8 text-[10px] tracking-widest text-on-surface/40 uppercase md:flex-row">
          <div>
            © 2024 Ciclo - Dados que guiam. Todos os direitos reservados.
          </div>

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

      <Dialog open={openShare} onOpenChange={setOpenShare}>
        <DialogContent className="max-w-md border border-outline-variant bg-surface-container text-white">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl font-bold text-white">
              Compartilhar
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-3 text-center font-bold text-white transition-all hover:bg-primary-alt"
            >
              Compartilhar no WhatsApp
            </a>

            <a
              href={emailShare}
              className="rounded-full border border-outline-variant px-5 py-3 text-center font-bold text-white transition-all hover:bg-white/5"
            >
              Compartilhar por Email
            </a>

            <button
              type="button"
              onClick={handleCopyLink}
              className="rounded-full border border-outline-variant px-5 py-3 font-bold text-white transition-all hover:bg-white/5"
            >
              Copiar link do site
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
