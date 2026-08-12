"use client";

import { skillsData } from "@/data/skills";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  TestTube2,
} from "lucide-react";

const categoryIcons = {
  Development: Code2,
  "QA & Automation": TestTube2,
  Databases: Database,
  "Tools & DevOps": GitBranch,
};

export default function Skills() {
  return (
    <motion.section
      id="Skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-7xl px-6 py-24"
    >
      {/* Header */}
      <div className="mb-14">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Skills
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tecnologías y herramientas
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Un conjunto de tecnologías y herramientas que utilizo para
          desarrollar software, trabajar en calidad y automatizar pruebas.
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {skillsData.map((group, index) => {
          const Icon =
            categoryIcons[group.category as keyof typeof categoryIcons];

          return (
            <motion.div
              key={group.category}
              initial={{
                opacity: 0,
                y: 20,
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
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -4,
              }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              {/* Category header */}
              <div className="mb-6 flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {group.category}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    {group.description}
                  </p>
                </div>

              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="cursor-default rounded-lg border border-white/10 bg-zinc-950/50 px-3 py-2 text-sm text-zinc-300 transition-colors duration-200 hover:border-blue-400/30 hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom message */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center"
      >
       
      </motion.div>
    </motion.section>
  );
}