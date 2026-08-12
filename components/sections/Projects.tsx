"use client";

import { motion } from "framer-motion";
import { ArrowUpRight} from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { socials } from '../../data/socials';


const projects = [
  {
    title: "E-commerce Automation",
    description:
      "Framework de automatización diseñado para validar los principales flujos de una plataforma de comercio electrónico.",
    category: "QA Automation",
    technologies: ["Selenium", "Java", "Serenity", "JUnit"],
    image: "/images/projects/ecommerce.png",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "API Testing Framework",
    description:
      "Automatización de pruebas para validar endpoints REST, respuestas y diferentes escenarios de una API.",
    category: "API Testing",
    technologies: ["Karate", "REST API", "JSON", "CI/CD"],
    image: "/images/projects/api-testing.png",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Cotizador Textil",
    description:
      "Aplicación web para gestionar procesos de cotización, desarrollada durante mi experiencia profesional.",
    category: "Web Development",
    technologies: ["React", "Azure DevOps", "CI/CD"],
    image: "/images/projects/cotizador.png",
    github: "#",
    demo: "#",
    featured: false,
  },
];

export default function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <motion.section
      id="Projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-7xl px-6 py-24"
    >
      {/* Header */}
      <div className="mb-14">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Proyectos
        </p>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cosas que he construido
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              Una selección de proyectos donde he aplicado desarrollo,
              testing, automatización y buenas prácticas de software.
            </p>
          </div>

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            Ver GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Featured project */}
      {featuredProject && (
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="group mb-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
        >
          <div className="grid lg:grid-cols-[1.25fr_1fr]">

            {/* Image */}
            <div className="relative min-h-[320px] overflow-hidden bg-zinc-900">
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center">
                  <div className="mb-2 text-sm uppercase tracking-widest text-zinc-600">
                    Project Preview
                  </div>

                  <div className="text-4xl font-bold text-zinc-800">
                    {featuredProject.title}
                  </div>
                </div>

              </div>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <span className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300 backdrop-blur-md">
                Proyecto destacado
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-8 lg:p-10">

              <div>
                <p className="mb-3 text-sm font-medium text-blue-400">
                  {featuredProject.category}
                </p>

                <h3 className="text-3xl font-bold text-white">
                  {featuredProject.title}
                </h3>

                <p className="mt-5 leading-7 text-zinc-400">
                  {featuredProject.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Links */}
              <div className="mt-10 flex items-center gap-5">

                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>

                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-sm text-white"
                >
                  Ver proyecto
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>

              </div>
            </div>
          </div>
        </motion.article>
      )}

      {/* Other projects */}
      <div className="grid gap-6 md:grid-cols-2">

        {otherProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{ y: -5 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20"
          >

            {/* Image */}
            <div className="relative h-52 overflow-hidden bg-zinc-900">

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-semibold text-zinc-700">
                  {project.title}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-4 left-5 text-xs text-zinc-400">
                {project.category}
              </span>

            </div>

            {/* Content */}
            <div className="p-6">

              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-500"
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-white"
                >
                  Ver proyecto
                  <ArrowUpRight className="h-4 w-4" />
                </a>

              </div>

            </div>
          </motion.article>
        ))}

      </div>
    </motion.section>
  );
}