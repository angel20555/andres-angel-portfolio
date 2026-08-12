"use client";

import { ArrowUp, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { socials } from "@/data/socials";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  

  const whatsappMessage = encodeURIComponent(
    "Hola Andrés, encontré tu portafolio y me gustaría hablar contigo sobre una oportunidad o proyecto."
  );

  const whatsappUrl = `${socials.whatsapp}?text=${whatsappMessage}`;

  const emailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=andresangel3658@gmail.com" +
    "&su=Contacto%20desde%20mi%20portafolio";

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12 w-full border-t border-white/5 bg-zinc-950/80 py-10 backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Main footer */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Andrés Angel
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              Software Developer · QA Automation
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
              Construyendo software y automatizando calidad.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-3">

            <motion.a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-500 transition hover:border-white/20 hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </motion.a>

            <motion.a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-500 transition hover:border-white/20 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </motion.a>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-500 transition hover:border-white/20 hover:text-emerald-400"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-4 w-4" />
            </motion.a>

            <motion.a
              href={emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-500 transition hover:border-white/20 hover:text-blue-400"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </motion.a>

          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Volver arriba"
            className="group flex items-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-400 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white md:self-auto"
          >
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />

            <span>
              Volver arriba
            </span>
          </motion.button>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Andrés Angel
          </p>

          <p>
            Diseñado y desarrollado con Next.js
          </p>

        </div>

      </div>
    </motion.footer>
  );
}