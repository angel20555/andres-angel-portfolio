"use client";

import { socials } from "@/data/socials";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  

  const whatsappMessage = encodeURIComponent(
    "Hola Andrés, encontré tu portafolio y me gustaría hablar contigo sobre una oportunidad o proyecto."
  );

  const whatsappUrl = `${socials.whatsapp}?text=${whatsappMessage}`;

  const emailSubject = encodeURIComponent(
    "Contacto desde portafolio"
  );

  const emailBody = encodeURIComponent(
    `Hola Andrés,

Encontré tu portafolio y me gustaría ponerme en contacto contigo para hablar sobre una oportunidad o proyecto.

Quedo atento.

Saludos.`
  );

  const emailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=andresangel3658@gmail.com` +
    `&su=${emailSubject}` +
    `&body=${emailBody}`;

  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-7xl px-6 py-24"
    >
      {/* Header */}
      <div className="mb-14">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Contacto
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Hablemos
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          ¿Tienes una oportunidad, un proyecto o simplemente quieres
          conectar? Estoy abierto a nuevas oportunidades en desarrollo
          de software y QA Automation.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

        {/* Información de contacto */}
        <div className="flex flex-col gap-4">

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.05]"
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    Escríbeme directamente
                  </p>
                </div>

              </div>

              <ArrowUpRight className="h-4 w-4 text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400" />

            </div>
          </a>


          {/* Email */}
          <a
            href={emailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    andresangel3658@gmail.com
                  </p>
                </div>

              </div>

              <ArrowUpRight className="h-4 w-4 text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400" />

            </div>
          </a>


          {/* Ubicación */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-zinc-400">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Ubicación
                </p>

                <p className="mt-1 text-sm font-medium text-zinc-200">
                  Medellín, Colombia
                </p>
              </div>

            </div>
          </div>


          {/* Redes */}
          <div className="grid grid-cols-2 gap-4">

            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-400 transition hover:-translate-y-1 hover:border-white/20 hover:text-white"
            >
              <FaGithub className="h-5 w-5" />
              GitHub
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-400 transition hover:-translate-y-1 hover:border-white/20 hover:text-white"
            >
              <FaLinkedin className="h-5 w-5" />
              LinkedIn
            </a>

          </div>

        </div>


        {/* CTA */}
        <div className="relative flex min-h-[400px] flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">

          {/* Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">

            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Disponible para nuevas oportunidades
            </span>

            <h3 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              ¿Tienes una oportunidad o proyecto en mente?
            </h3>

            <p className="mt-5 max-w-lg leading-7 text-zinc-400">
              Estoy interesado en oportunidades relacionadas con
              desarrollo de software, frontend, QA y automatización
              de pruebas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              {/* WhatsApp principal */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-medium text-zinc-950 transition hover:bg-zinc-200"
              >
                Contactarme

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>

              {/* Email */}
              <motion.a
                href={emailUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-medium text-white transition hover:bg-white/10"
              >
                Enviar correo

                <Mail className="h-4 w-4" />
              </motion.a>

            </div>

          </div>

        </div>

      </div>


      {/* Footer de contacto */}
      {/* <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-600 sm:flex-row">

        <p>
          © {new Date().getFullYear()} Andrés Angel
        </p>

        <p>
          Desarrollador de Software · QA Automation
        </p>

      </div> */}

    </motion.section>
  );
}