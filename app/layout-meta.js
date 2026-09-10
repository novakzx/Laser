export const viewport = {
  themeColor: "#FAF6F0",
};

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://lumiere-estetica.vercel.app"
  ),
  title: "Lumière Estética — Depilação a Laser, Limpeza Corporal & Bem-Estar",
  description:
    "Clínica de estética e bem-estar. Depilação a laser, limpeza corporal e rituais de bem-estar em um espaço acolhedor e sofisticado.",
  keywords: [
    "depilação a laser",
    "limpeza corporal",
    "estética",
    "bem-estar",
    "clínica de estética",
    "massagem",
    "Lumière",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Lumière Estética",
    title: "Lumière Estética — Depilação a Laser & Bem-Estar",
    description:
      "Depilação a laser, limpeza corporal e rituais de bem-estar em um espaço pensado para você se sentir leve e confiante.",
    images: ["/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumière Estética — Depilação a Laser & Bem-Estar",
    description:
      "Depilação a laser, limpeza corporal e rituais de bem-estar em um espaço acolhedor.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
