"use client";

import { motion } from "framer-motion";
import { Code2, TestTube2 } from "lucide-react";

export default function About() {
  return (
    <motion.section
      id="About"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-7xl px-6 py-24"
    >
      {/* Section title */}
      <div className="mb-14">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Sobre mí
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Desarrollo y calidad de software
        </h2>
      </div>

      {/* Content */}
      <div className="grid gap-12 lg:grid-cols-2">

        {/* Description */}
        <div className="space-y-6 text-zinc-400">

          <p className="text-lg leading-8">
            Soy desarrollador de software interesado en construir
            aplicaciones web y en garantizar la calidad de los productos
            mediante pruebas y automatización.
          </p>

          <p className="leading-7">
            He trabajado con tecnologías como React, .NET y Azure DevOps,
            además de herramientas orientadas al testing y la automatización
            como Selenium, Karate y Serenity.
          </p>

          <p className="leading-7">
            Me interesa especialmente la automatización de pruebas,
            el desarrollo de APIs y la integración de procesos de testing
            dentro de pipelines de CI/CD.
          </p>

        </div>

        {/* Areas */}
        <div className="grid gap-4 sm:grid-cols-2">

          {/* Development */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Code2 className="h-5 w-5" />
            </div>

            <h3 className="mb-4 text-lg font-semibold text-white">
              Desarrollo
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                ".NET",
                "C#",
                "Laravel",
                "SQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* QA */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <TestTube2 className="h-5 w-5" />
            </div>

            <h3 className="mb-4 text-lg font-semibold text-white">
              QA & Automation
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Selenium",
                "Karate",
                "Serenity",
                "Puppeteer",
                "API Testing",
                "CI/CD",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}