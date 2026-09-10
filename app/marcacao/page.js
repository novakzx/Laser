import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { ShieldCheck, Clock3, HeartHandshake } from "lucide-react";

const perks = [
  { icon: ShieldCheck, text: "Ambiente seguro e higienizado" },
  { icon: Clock3, text: "Atendimento sem atrasos" },
  { icon: HeartHandshake, text: "Acompanhamento próximo" },
];

export default function Marcacao() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -right-24 top-0 h-[360px] w-[360px] rounded-full bg-blush blur-[130px]" />
            <div className="absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-[#f3e3c8] blur-[130px]" />
          </div>

          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-roseDeep">
                Marcação online
              </p>
              <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-6xl">
                Agende sua <span className="text-gradient italic">sessão</span>
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-inkSoft">
                Em poucos passos você garante seu horário. Escolha o tratamento,
                o profissional e a melhor data para você.
              </p>
            </div>

            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {perks.map((p) => (
                <div key={p.text} className="flex items-center gap-2 text-sm font-medium text-inkSoft">
                  <p.icon size={16} className="text-roseDeep" />
                  {p.text}
                </div>
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              <BookingForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
