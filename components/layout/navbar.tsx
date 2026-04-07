import Image from "next/image"
import Link from "next/link"

import { LOGO_URL, navLinks } from "@/lib/data/home"

export function Navbar() {
  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-surface/80 backdrop-blur-xl"
      aria-label="Navegação principal"
    >
      <div
        className="absolute top-0 h-0.5 w-full bg-linear-to-r from-primary via-primary-alt to-accent"
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 font-headline tracking-tight">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={LOGO_URL}
            alt="Ciclo Logo"
            width={40}
            height={40}
            className="rounded-lg object-contain"
          />
          <span className="text-xl font-bold tracking-tighter text-white">
            Ciclo - Dados que guiam
          </span>
        </Link>

        <div className="hidden gap-8 md:flex" role="list">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              role="listitem"
              className={
                link.active
                  ? "border-b-2 border-primary pb-1 font-bold text-primary"
                  : "font-medium text-on-surface/60 transition-colors hover:text-white"
              }
              aria-current={link.active ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="#contato"
          className="rounded-full bg-primary px-6 py-2 font-medium text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary-alt"
        >
          Diagnóstico Gratuito
        </a>
      </div>
    </nav>
  )
}
