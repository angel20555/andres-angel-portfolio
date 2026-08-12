"use client";

import { experienceData } from "@/data/experience";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Experience() {
  return (
    <motion.section
      id="Experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-7xl px-6 py-24"
    >
      {/* Header */}
      <div className="mb-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Experiencia
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Mi recorrido profesional
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Experiencias que me han permitido crecer en desarrollo de
          software, calidad y automatización de pruebas.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Timeline line */}
        <div className="absolute left-[15px] top-0 h-full w-px bg-gradient-to-b from-blue-400/60 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {experienceData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.company}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >

                {/* Timeline dot */}
                <div className="absolute left-[8px] top-8 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-blue-400 bg-zinc-950 md:left-1/2 md:-translate-x-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                </div>

                {/* Content */}
                <div
                  className={`pl-10 md:pl-0 ${
                    isEven
                      ? "md:col-start-1 md:text-right"
                      : "md:col-start-2"
                  }`}
                >
                  <motion.article
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] ${
                      isEven ? "md:text-left" : ""
                    }`}
                  >

                    {/* Period */}
                    <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-400">
                      <CalendarDays className="h-4 w-4" />
                      {item.period}
                    </div>

                    {/* Role */}
                    <h3 className="text-xl font-bold text-white">
                      {item.role}
                    </h3>

                    {/* Company */}
                    <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
                      <span className="font-medium text-zinc-300">
                        {item.company}
                      </span>

                      <span className="text-zinc-700">
                        •
                      </span>

                      <span>
                        {item.type}
                      </span>
                    </div>

                    {/* Location */}
                    {item.location && (
                      <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </div>
                    )}

                    {/* Description */}
                    <p className="mt-5 text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    {item.highlights && (
                      <div className="mt-6 space-y-3">
                        {item.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex gap-3 text-sm text-zinc-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                            <span>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400 transition-colors group-hover:border-white/15 group-hover:text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </motion.article>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <a
          href="/cv/Andres-Angel-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          Ver experiencia completa en mi CV

          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </motion.div> */}
    </motion.section>
  );
}