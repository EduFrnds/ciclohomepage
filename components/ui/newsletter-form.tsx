"use client"

import { MaterialIcon } from "@/components/ui/material-icon"

export function NewsletterForm() {
  return (
    <form
      className="flex gap-2"
      aria-label="Formulário de newsletter"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        E-mail para newsletter
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="E-mail"
        autoComplete="email"
        required
        className="bg-surface-container border-0 border-b border-outline-variant focus:border-primary focus:ring-0 focus:outline-none text-white w-full text-xs placeholder:text-on-surface/30 py-1"
      />
      <button
        type="submit"
        aria-label="Inscrever na newsletter"
        className="bg-primary hover:bg-primary-alt p-2 rounded-lg transition-colors shadow-lg shadow-primary/20"
      >
        <MaterialIcon name="send" className="text-white text-sm" />
      </button>
    </form>
  )
}
