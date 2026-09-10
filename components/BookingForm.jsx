"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CalendarDays,
  User,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { EASE } from "./motion";
import { services, professionals, timeSlots } from "@/lib/data";

const stepLabels = ["Serviço", "Data & Hora", "Seus dados", "Confirmação"];

function nextDays(count = 7) {
  const days = [];
  const today = new Date();
  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      key: d.toISOString().slice(0, 10),
      dow: weekdays[d.getDay()],
      day: d.getDate(),
      month: d.toLocaleDateString("pt-BR", { month: "short" }).replace(".", ""),
    });
  }
  return days;
}

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState(null);
  const [professional, setProfessional] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);

  const days = useMemo(() => nextDays(7), []);

  const canNext =
    (step === 0 && service) ||
    (step === 1 && professional && date && time) ||
    (step === 2 && form.name && form.phone && form.email) ||
    step === 3;

  const next = () => {
    if (!canNext) return;
    if (step === 2) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setStep(3);
      }, 1200);
      return;
    }
    setStep((s) => s + 1);
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  const selectedService = services.find((s) => s.id === service);

  return (
    <div className="overflow-hidden rounded-[32px] border border-sand bg-white shadow-soft">
      {/* Progress header */}
      <div className="border-b border-sand bg-cream/60 px-6 py-6 sm:px-10">
        <div className="flex items-center justify-between">
          {stepLabels.map((label, i) => (
            <div key={label} className="flex flex-1 items-center gap-3">
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full text-sm font-semibold transition-all duration-500 ${
                    i < step
                      ? "bg-rose text-cream"
                      : i === step
                      ? "bg-ink text-cream"
                      : "border border-ink/15 text-inkSoft"
                  }`}
                >
                  {i < step ? <Check size={16} /> : i + 1}
                </span>
                <span
                  className={`hidden text-xs font-semibold sm:block ${
                    i <= step ? "text-ink" : "text-inkSoft/60"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < stepLabels.length - 1 && (
                <div className="relative h-px flex-1 overflow-hidden rounded bg-sand">
                  <div
                    className="absolute inset-y-0 left-0 bg-rose transition-all duration-700"
                    style={{ width: i < step ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {/* STEP 0 — service */}
          {step === 0 && (
            <motion.div
              key="s0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
                Qual tratamento você deseja?
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                      service === s.id
                        ? "border-rose bg-blush/40 shadow-card"
                        : "border-sand hover:border-rose/40 hover:bg-cream/60"
                    }`}
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                      <Image src={s.image} alt={s.title} fill className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-ink">{s.title}</p>
                      <p className="mt-0.5 truncate text-xs text-inkSoft">
                        {s.price} · {s.duration}
                      </p>
                    </div>
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        service === s.id
                          ? "border-rose bg-rose text-cream"
                          : "border-ink/20 text-transparent"
                      }`}
                    >
                      <Check size={13} />
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 1 — professional + date + time */}
          {step === 1 && (
            <motion.div
              key="s1"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
                Escolha o profissional e o horário
              </h3>

              <p className="mt-6 text-sm font-semibold text-ink">Profissional</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {professionals.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setProfessional(p.name)}
                    className={`relative rounded-2xl border p-4 text-left transition-all duration-300 ${
                      professional === p.name
                        ? "border-rose bg-blush/40 shadow-card"
                        : "border-sand hover:border-rose/40 hover:bg-cream/60"
                    }`}
                  >
                    {p.badge && (
                      <span className="absolute -top-2.5 left-3 rounded-full bg-gold px-2 py-0.5 text-[10px] font-semibold text-white">
                        {p.badge}
                      </span>
                    )}
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream">
                        <User size={16} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold leading-tight">{p.name}</p>
                        <p className="text-xs text-inkSoft">{p.role}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <p className="mt-7 flex items-center gap-2 text-sm font-semibold text-ink">
                <CalendarDays size={15} className="text-roseDeep" /> Data
              </p>
              <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
                {days.map((d) => (
                  <button
                    key={d.key}
                    onClick={() => setDate(d.key)}
                    className={`flex flex-col items-center rounded-2xl border px-2 py-3 transition-all duration-300 ${
                      date === d.key
                        ? "border-rose bg-rose text-cream shadow-card"
                        : "border-sand hover:border-rose/40 hover:bg-cream/60"
                    }`}
                  >
                    <span className={`text-[11px] font-medium ${date === d.key ? "text-cream/80" : "text-inkSoft"}`}>
                      {d.dow}
                    </span>
                    <span className="mt-1 text-lg font-bold">{d.day}</span>
                    <span className={`text-[10px] capitalize ${date === d.key ? "text-cream/80" : "text-inkSoft"}`}>
                      {d.month}
                    </span>
                  </button>
                ))}
              </div>

              <p className="mt-7 text-sm font-semibold text-ink">Horário disponível</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      time === t
                        ? "border-rose bg-rose text-cream shadow-card"
                        : "border-sand text-inkSoft hover:border-rose/40 hover:bg-cream/60"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2 — personal data */}
          {step === 2 && (
            <motion.div
              key="s2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
                Quase lá! Seus dados
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Nome completo" required>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome"
                    className="input"
                  />
                </Field>
                <Field label="Telefone / WhatsApp" required>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="input"
                  />
                </Field>
                <Field label="E-mail" required className="sm:col-span-2">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="voce@email.com"
                    className="input"
                  />
                </Field>
                <Field label="Observações (opcional)" className="sm:col-span-2">
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    placeholder="Conte-nos algo importante para a sua sessão..."
                    className="input resize-none"
                  />
                </Field>
              </div>
            </motion.div>
          )}

          {/* STEP 3 — confirmation */}
          {step === 3 && (
            <motion.div
              key="s3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="py-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
                className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-blush text-roseDeep"
              >
                <CheckCircle2 size={40} />
              </motion.div>
              <h3 className="mt-6 font-serif text-3xl font-semibold sm:text-4xl">
                Tudo certo, {form.name.split(" ")[0] || "querida"}! ✨
              </h3>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-inkSoft">
                Sua solicitação foi enviada. Nossa equipe entrará em contato em
                instantes para confirmar os detalhes da sua sessão.
              </p>

              <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-sand bg-cream/60 p-5 text-left">
                <SummaryRow label="Tratamento" value={selectedService?.title} />
                <SummaryRow label="Profissional" value={professional} />
                <SummaryRow
                  label="Data & Hora"
                  value={`${new Date(date + "T00:00:00").toLocaleDateString("pt-BR")} · ${time}`}
                />
              </div>

              <button
                onClick={() => {
                  setStep(0);
                  setService(null);
                  setProfessional(null);
                  setDate(null);
                  setTime(null);
                  setForm({ name: "", phone: "", email: "", notes: "" });
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                <Sparkles size={15} />
                Fazer nova marcação
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* footer nav */}
      {step < 3 && (
        <div className="flex items-center justify-between border-t border-sand bg-cream/40 px-6 py-5 sm:px-10">
          <button
            onClick={back}
            disabled={step === 0}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              step === 0
                ? "cursor-not-allowed text-inkSoft/40"
                : "text-ink hover:bg-sand"
            }`}
          >
            <ArrowLeft size={16} />
            Voltar
          </button>

          <button
            onClick={next}
            disabled={!canNext || submitting}
            className={`inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
              canNext && !submitting
                ? "bg-ink text-cream hover:bg-roseDeep hover:shadow-soft"
                : "cursor-not-allowed bg-sand text-inkSoft/50"
            }`}
          >
            {submitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream" />
                Enviando...
              </>
            ) : step === 2 ? (
              <>
                Confirmar marcação
                <Check size={16} />
              </>
            ) : (
              <>
                Continuar
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

function Field({ label, required, className = "", children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-roseDeep">*</span>}
      </span>
      {children}
    </label>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2 text-sm">
      <span className="text-inkSoft">{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}
