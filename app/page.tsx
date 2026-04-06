import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ValuePropositionSection } from "@/components/sections/value-proposition-section"
import { PillarsSection } from "@/components/sections/pillars-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ClosingCtaSection } from "@/components/sections/closing-cta-section"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { LogoCarousel } from "@/components/sections/logo-carousel"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <PillarsSection />
        <TestimonialsSection/>
        <ProjectsSection />
        <ClosingCtaSection />        
      </main>
      <Footer />
    </>
  )
}

