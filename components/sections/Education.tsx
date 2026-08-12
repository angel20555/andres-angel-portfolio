"use client";

import { educationData } from "@/data/education";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

export default function Education() {
  return (
    <motion.section
      id="Education"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-7xl px-6 py-24"
    >
      {/* Header */}
      <div className="mb-14">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Educación
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Mi formación
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Mi formación académica y los conocimientos que han construido
          las bases de mi carrera en desarrollo de software.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Línea */}
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-blue-400/60 via-white/10 to-transparent" />

        <div className="space-y-10">
          {educationData.map((education, index) => (
            <motion.article
              key={education.degree}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative pl-14"
            >

              {/* Punto de la timeline */}
              <div className="absolute left-[8px] top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-400 bg-zinc-950">
                <GraduationCap className="h-3 w-3 text-blue-400" />
              </div>

              {/* Card */}
              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">

                {/* Period / estado */}
                <div className="mb-4 flex flex-wrap items-center gap-3">

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1 text-xs font-medium text-blue-400">
                    {education.period}
                  </span>

                  <span className="text-xs text-zinc-600">
                    {education.status}
                  </span>

                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-white">
                  {education.degree}
                </h3>

                {/* Institución */}
                <p className="mt-2 text-sm font-medium text-zinc-300">
                  {education.institution}
                </p>

                {/* Descripción */}
                <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400">
                  {education.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {education.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 text-sm text-zinc-400"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                      {highlight}
                    </div>
                  ))}
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Formación continua */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
      >
        <div className="flex items-start gap-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <ArrowUpRight className="h-5 w-5" />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Aprendizaje continuo
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Además de mi formación académica, mantengo un proceso
              constante de aprendizaje y exploración de nuevas
              tecnologías relacionadas con desarrollo de software,
              testing y automatización.
            </p>
          </div>

        </div>
      </motion.div>

    </motion.section>
  );
}