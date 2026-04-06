import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ValuePropositionSection } from "@/components/sections/value-proposition-section"
import { PillarsSection } from "@/components/sections/pillars-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ClosingCtaSection } from "@/components/sections/closing-cta-section"
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
        <ProjectsSection />
        <ClosingCtaSection />        
      </main>
      <Footer />
    </>
  )
}

