"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials } from "../../data/socials";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      
      {/* Background glow */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]"
      />

      {/* Secondary glow */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[30%] top-[30%] -z-10 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[100px]"
      />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex max-w-4xl flex-col items-center"
      >

        {/* Greeting */}
        <motion.div variants={itemVariants}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Disponible para nuevas oportunidades
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tight sm:text-5xl md:text-7xl lg:text-7xl"
        >
          Andrés Ángel
        </motion.h1>

        {/* Role */}
        <motion.div variants={itemVariants}>
          <h2 className="mt-5 text-2xl font-medium text-zinc-400 sm:text-3xl md:text-4xl">
            Software Developer · QA Automation
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
        >
          Desarrollador de software interesado en la automatización de pruebas, desarrollo web y calidad de software.{" "}
          {/* <span className="text-zinc-200">React</span>,{" "}
          <span className="text-zinc-200">.NET</span> y{" "}
          <span className="text-zinc-200">Selenium</span> y{" "}
          <span className="text-zinc-200">Karate</span> y{" "}
          <span className="text-zinc-200">Azure DevOps</span>. */}
        </motion.p>

        {/* Technologies */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {["React", "TypeScript", ".NET", "Azure DevOps", "Laravel", "Selenium", "Karate", "C#"].map(
            (technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400 backdrop-blur-sm"
              >
                {technology}
              </span>
            )
          )}
        </motion.div>

        {/* Actions */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
          >
            Ver mis proyectos

            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="\cv\ANDRES_MAURICIO_ANGEL (2) (1).pdf"
            download
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
          >
            <Download className="h-4 w-4" />
            Descargar CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex gap-3"
        >
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </motion.div>

      </motion.div>

      {/* Scroll indicator
      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border border-white/20 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-white" />
        </div>
      </motion.div> */}

    </section>
  );
}