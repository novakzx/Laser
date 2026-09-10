"use client";

import { motion } from "framer-motion";
import { Reveal, EASE } from "./motion";
import { steps } from "@/lib/data";

export default function Process() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-roseDeep">
            Como funciona
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Uma jornada <span className="text-gradient italic">pensada para você</span>
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent md:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              className="relative text-center"
            >
              <div className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border border-blush bg-white shadow-card">
                <span className="font-serif text-2xl font-semibold text-roseDeep">{s.n}</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-[260px] text-[14px] leading-relaxed text-inkSoft">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
