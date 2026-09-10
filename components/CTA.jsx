"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./motion";

export default function CTA() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-ink via-[#3a2622] to-[#5c3328] px-8 py-16 text-center text-cream shadow-soft sm:px-16 sm:py-20">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-rose/30 blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gold/30 blur-[100px]"
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blush">
              <Sparkles size={13} />
              Primeira avaliação com condição especial
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Dê o primeiro passo para a sua{" "}
              <span className="italic text-gold">melhor versão</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-cream/75">
              Agende sua avaliação e descubra o tratamento ideal para você. É
              rápido, simples e sem compromisso.
            </p>
            <div className="mt-8">
              <Link
                href="/marcacao"
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:bg-blush hover:shadow-soft"
              >
                <CalendarCheck size={17} />
                Marcar minha consulta
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
