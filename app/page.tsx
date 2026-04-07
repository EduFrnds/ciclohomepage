import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { CasesSection } from "@/components/sections/cases-section"
import { ClosingCtaSection } from "@/components/sections/closing-cta-section"
import { HeroSection } from "@/components/sections/hero-section"
import { PillarsSection } from "@/components/sections/pillars-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ValuePropositionSection } from "@/components/sections/value-proposition-section"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <PillarsSection />
        <TestimonialsSection />
        <ProjectsSection />
        <CasesSection />
        <ClosingCtaSection />
      </main>
      <Footer />
    </>
  )
}
