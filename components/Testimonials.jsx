"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Reveal, EASE } from "./motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-16 h-[360px] w-[360px] rounded-full bg-[#f3e3c8] blur-[130px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-roseDeep">
            Depoimentos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Quem viveu, <span className="text-gradient italic">recomenda</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="group relative flex flex-col rounded-[28px] border border-sand bg-white/70 p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
            >
              <Quote
                size={40}
                className="absolute right-6 top-6 text-blush transition-colors duration-300 group-hover:text-rose/50"
              />
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={15} className="fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-inkSoft">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-sand pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-blush font-serif text-sm font-semibold text-roseDeep">
                  {t.initials}
                </span>
                <div>
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-inkSoft">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
