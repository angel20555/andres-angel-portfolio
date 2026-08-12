"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSoundFX } from "../../hooks/useSound";

const links = [
  { title: "Sobre mí", href: "#About" },
  { title: "Skills", href: "#Skills" },
  { title: "Educacion", href: "#Education" },
  { title: "Proyectos", href: "#Projects" },
  { title: "Experiencia", href: "#Experience" },
  { title: "Contacto", href: "#Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const { playClickSound } = useSoundFX();

  /*
   * Detectar scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links
        .map((link) => document.querySelector(link.href))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 150;

      let currentSection = "";

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Navegación suave
   */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    playClickSound();
    setIsOpen(false);

    const target = document.querySelector(href) as HTMLElement | null;

    if (!target) return;

    const offset = 80;

    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    history.replaceState(null, "", href);
  };

  /*
   * Volver arriba
   */
  const handleLogoClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    playClickSound();
    setIsOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    history.replaceState(null, "", "/");
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#111113]/95 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-b border-white/5 bg-[#111113]/80 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="group flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-sm font-bold text-white transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08]">
            A
          </div>

          <div className="hidden sm:block">
            <div className="font-semibold text-white">
              Andrés Ángel
            </div>

            <div className="text-xs text-zinc-500">
              Software Developer
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-md md:flex">

          {links.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) =>
                  handleNavClick(e, link.href)
                }
                className="relative rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                {link.title}
              </a>
            );
          })}

          {/* CV */}
          {/* <a
            href="/cv/Andres-Angel-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="ml-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
          >
            CV
          </a> */}

        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={
            isOpen ? "Cerrar menú" : "Abrir menú"
          }
          aria-expanded={isOpen}
          onClick={() => {
            playClickSound();
            setIsOpen((prev) => !prev);
          }}
          className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-zinc-300 transition hover:bg-white/[0.08] hover:text-white md:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="overflow-hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">

              {links.map((link, index) => {
                const sectionId = link.href.replace("#", "");
                const isActive =
                  activeSection === sectionId;

                return (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    onClick={(e) =>
                      handleNavClick(e, link.href)
                    }
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className={`border-b border-white/5 py-4 text-left text-sm transition ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.title}
                  </motion.a>
                );
              })}

              <a
                href="/cv/Andres-Angel-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  playClickSound();
                  setIsOpen(false);
                }}
                className="mt-4 w-fit rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900"
              >
                Ver CV
              </a>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}