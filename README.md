# Lumière — Estética & Bem-Estar

Site de apresentação e marcação para uma clínica de estética: depilação a laser,
limpeza corporal e rituais de bem-estar.

## Stack

- **Next.js 14** (App Router) — framework React
- **Tailwind CSS** — estilização utilitária
- **Framer Motion** — animações (scroll reveal, floats, marquee, contadores)
- **Lucide React** — ícones
- **@fontsource** — fontes auto-hospedadas (Cormorant Garamond + Manrope)

## Estrutura

```
app/
  page.js            → página inicial (landing)
  marcacao/page.js   → página de marcação
  layout.js          → layout raiz + fontes
  globals.css        → estilos globais
components/          → Navbar, Hero, Marquee, Services, About, Stats,
                       Process, Testimonials, CTA, Footer, BookingForm
lib/data.js          → conteúdo (serviços, depoimentos, horários...)
public/              → imagens geradas
```

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Páginas

- **/** — landing page completa (hero animado, serviços, sobre, números,
  processo, depoimentos, CTA)
- **/marcacao** — formulário de marcação em 4 etapas (serviço → profissional/data/hora → dados → confirmação)
