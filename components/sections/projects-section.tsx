import Image from "next/image"
import Link from "next/link"

import { MaterialIcon } from "@/components/ui/material-icon"
import { projects, type Project } from "@/lib/data/home"

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group cursor-pointer${project.offset ? "md:mt-12" : ""}`}
    >
      <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl">
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
      <h3 className="font-headline text-2xl font-bold text-white transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mt-2 mb-4 text-on-surface/60">{project.description}</p>
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section
      className="bg-surface py-24"
      id="projetos"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-xl">
            <span className="font-label text-xs tracking-widest text-[#e0e0e0] uppercase">
              Casos de Sucesso
            </span>
            <h2
              id="projects-heading"
              className="mt-4 font-headline text-4xl font-bold text-white"
            >
              Projetos que Geraram Valor
            </h2>
          </div>
          <Link
            href="#projetos"
            className="flex items-center gap-2 font-bold text-primary transition-colors hover:text-accent"
          >
            Ver todos projetos <MaterialIcon name="north_east" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
