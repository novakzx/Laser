"use client";

import { Sparkle } from "lucide-react";

const items = [
  "Depilação a Laser",
  "Limpeza Corporal",
  "Estética Facial",
  "Rituais de Bem-Estar",
  "Massagem Relaxante",
  "Hidratação Profunda",
  "Peeling Renovador",
  "Cuidado Personalizado",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-sand bg-white/40 py-5">
      <div className="mask-fade-x flex w-max animate-marquee gap-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-serif text-lg italic text-inkSoft">{item}</span>
            <Sparkle size={14} className="text-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
