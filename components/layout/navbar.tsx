import Image from "next/image"
import Link from "next/link"

import { navLinks, LOGO_URL } from "@/lib/data/home"

export function Navbar() {
  return (
    <nav
      className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5"
      aria-label="Navegação principal"
    >
      <div
        className="bg-linear-to-r from-primary via-primary-alt to-accent h-0.5 w-full absolute top-0"
        aria-hidden="true"
      />
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-headline tracking-tight">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={LOGO_URL}
            alt="Ciclo Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold tracking-tighter text-white">
            Ciclo - Dados que guiam
          </span>
        </Link>

        <div className="hidden md:flex gap-8" role="list">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              role="listitem"
              className={
                link.active
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface/60 font-medium hover:text-white transition-colors"
              }
              aria-current={link.active ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="#contato"
          className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-alt transition-all duration-300 shadow-lg shadow-primary/20"
        >
          Diagnóstico Gratuito
        </a>
      </div>
    </nav>
  )
}
