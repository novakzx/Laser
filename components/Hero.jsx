"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles, ShieldCheck, CalendarCheck } from "lucide-react";
import { EASE, staggerContainer, fadeUp } from "./motion";

const container = staggerContainer;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-blush blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-24 top-40 h-[380px] w-[380px] rounded-full bg-[#f3e3c8] blur-[120px]"
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-16">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-blush bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-roseDeep"
          >
            <Sparkles size={14} />
            Estética · Laser · Bem-Estar
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-serif text-[44px] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[68px]"
          >
            Sua beleza em
            <br />
            sua <span className="text-gradient italic">melhor luz</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-inkSoft sm:text-base"
          >
            Depilação a laser, limpeza corporal e rituais de bem-estar em um
            espaço pensado para você se sentir leve, cuidada e confiante.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/marcacao"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-roseDeep hover:shadow-soft"
            >
              <CalendarCheck size={17} />
              Agendar agora
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink hover:bg-white/60"
            >
              Conhecer serviços
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm font-medium text-inkSoft">4.9 · 1.200+ avaliações</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-inkSoft">
              <ShieldCheck size={17} className="text-roseDeep" />
              Tecnologia aprovada pela Anvisa
            </div>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[400px] lg:max-w-none"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-arch border-[6px] border-white shadow-soft">
            <Image
              src="/hero.jpg"
              alt="Mulher com pele radiante"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 44vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent" />
          </div>

          {/* floating card 1 */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-10 flex items-center gap-3 rounded-2xl bg-white/85 p-3.5 shadow-card backdrop-blur-md sm:-left-8"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-blush text-roseDeep">
              <Sparkles size={20} />
            </span>
            <div>
              <p className="text-sm font-bold leading-none">+12 mil</p>
              <p className="mt-1 text-xs text-inkSoft">sessões realizadas</p>
            </div>
          </motion.div>

          {/* floating card 2 */}
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-3 bottom-24 flex items-center gap-3 rounded-2xl bg-white/85 p-3.5 shadow-card backdrop-blur-md sm:-right-6"
          >
            <div className="flex -space-x-2">
              {["MC", "FL", "JP"].map((n, i) => (
                <span
                  key={n}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-white text-[10px] font-bold text-cream"
                  style={{ background: ["#C8877A", "#B98A4E", "#A9685B"][i] }}
                >
                  {n}
                </span>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold leading-none">98%</p>
              <p className="mt-1 text-xs text-inkSoft">de satisfação</p>
            </div>
          </motion.div>

          {/* rotating badge */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute -top-6 right-6 hidden h-20 w-20 sm:grid"
          >
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <path id="circ" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
              </defs>
              <text className="fill-ink text-[10.5px] font-semibold uppercase tracking-[0.18em]">
                <textPath href="#circ">· tecnologia a laser · cuidado real ·</textPath>
              </text>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
