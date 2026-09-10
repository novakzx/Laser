"use client";

import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { clinic } from "@/lib/data";

const links = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/marcacao", label: "Marcação" },
];

export default function Footer() {
  return (
    <footer id="contato" className="scroll-mt-24 border-t border-sand bg-white/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream">
                <Sparkles size={17} />
              </span>
              <span className="font-serif text-[22px] font-semibold leading-none">
                Lumière
                <span className="block text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-inkSoft">
                  Estética &amp; Bem-Estar
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-inkSoft">
              Beleza, tecnologia e acolhimento em um só lugar. Cuide de você
              com quem entende do assunto.
            </p>
          </div>

          {/* nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-inkSoft transition-colors hover:text-roseDeep"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-[14px] text-inkSoft">
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="shrink-0 text-roseDeep" />
                {clinic.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-roseDeep" />
                {clinic.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-roseDeep" />
                {clinic.email}
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={15} className="shrink-0 text-roseDeep" />
                {clinic.hours}
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram size={15} className="shrink-0 text-roseDeep" />
                {clinic.instagram}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-sand pt-6 text-[13px] text-inkSoft sm:flex-row">
          <p>© {new Date().getFullYear()} Lumière Estética &amp; Bem-Estar. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com <span className="text-roseDeep">♥</span> para o seu bem-estar
          </p>
        </div>
      </div>
    </footer>
  );
}
