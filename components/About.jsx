"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartPulse, Gem, Leaf, Award } from "lucide-react";
import { Reveal, EASE } from "./motion";

const features = [
  {
    icon: Award,
    title: "Tecnologia de ponta",
    text: "Equipamentos aprovados e de última geração, com máxima segurança e eficácia.",
  },
  {
    icon: HeartPulse,
    title: "Cuidado humanizado",
    text: "Acolhimento real, escuta atenta e planos pensados para o seu momento.",
  },
  {
    icon: Gem,
    title: "Resultados reais",
    text: "Protocolos comprovados que entregam mudanças visíveis desde as primeiras sessões.",
  },
  {
    icon: Leaf,
    title: "Ambiente acolhedor",
    text: "Um refúgio sofisticado, pensado para você desacelerar e se reconectar.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-blush blur-[130px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal className="relative">
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] shadow-soft">
              <Image
                src="/clinica.jpg"
                alt="Interior da clínica Lumière"
                width={900}
                height={640}
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-3 rounded-2xl bg-ink p-6 text-cream shadow-soft sm:-right-6"
            >
              <p className="font-serif text-5xl font-semibold text-gold">8+</p>
              <p className="mt-1 text-sm text-cream/80">anos cuidando de você</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="absolute -left-4 -top-4 grid h-16 w-16 place-items-center rounded-full bg-rose text-cream shadow-card"
            >
              <HeartPulse size={26} />
            </motion.div>
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-roseDeep">
              Sobre a Lumière
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Um espaço onde a beleza{" "}
              <span className="text-gradient italic">encontra o bem-estar</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-[15px] leading-relaxed text-inkSoft">
              A Lumière nasceu do desejo de unir ciência e acolhimento. Aqui,
              cada tratamento é um ritual: da avaliação inicial ao resultado
              final, você é cuidada com atenção, técnica e carinho.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="flex gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blush text-roseDeep">
                  <f.icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-inkSoft">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
