import Image from "next/image"
import Link from "next/link"

import { MaterialIcon } from "@/components/ui/material-icon"
import { projects, type Project } from "@/lib/data/home"

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group cursor-pointer${project.offset ? " md:mt-12" : ""}`}
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl mb-6">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-surface to-transparent opacity-60"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-2xl font-headline font-bold text-white group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-on-surface/60 mt-2 mb-4">{project.description}</p>
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section
      className="py-24 bg-surface"
      id="projetos"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-label uppercase tracking-widest text-[#e0e0e0]">
              Casos de Sucesso
            </span>
            <h2
              id="projects-heading"
              className="text-4xl font-headline font-bold text-white mt-4"
            >
              Projetos que Geraram Valor
            </h2>
          </div>
          <Link
            href="#projetos"
            className="text-primary font-bold hover:text-accent flex items-center gap-2 transition-colors"
          >
            Ver todos projetos{" "}
            <MaterialIcon name="north_east" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
