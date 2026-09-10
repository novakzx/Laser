"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Check, Zap, Droplets, Flower2, HeartHandshake } from "lucide-react";
import { Reveal, EASE } from "./motion";
import { services } from "@/lib/data";

const icons = {
  laser: Zap,
  limpeza: Droplets,
  bemestar: Flower2,
  spa: HeartHandshake,
};

export default function Services() {
  return (
    <section id="servicos" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-roseDeep">
              Nossos tratamentos
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Cuidados que <span className="text-gradient italic">transformam</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[15px] leading-relaxed text-inkSoft">
              Tratamentos assinados por especialistas, com tecnologia de ponta e
              um toque de carinho em cada etapa.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.id];
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-sand bg-white/70 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/85 text-roseDeep backdrop-blur-md">
                    <Icon size={18} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {s.tagline}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-inkSoft">
                    {s.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-[13px] text-inkSoft">
                        <Check size={14} className="text-roseDeep" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between border-t border-sand pt-4">
                    <div>
                      <p className="text-sm font-bold text-ink">{s.price}</p>
                      <p className="flex items-center gap-1 text-[11px] text-inkSoft">
                        <Clock size={11} />
                        {s.duration}
                      </p>
                    </div>
                    <Link
                      href="/marcacao"
                      className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-cream"
                      aria-label={`Agendar ${s.title}`}
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
