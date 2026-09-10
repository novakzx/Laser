import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";
import { metadata, viewport } from "./layout-meta";

export { metadata, viewport };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="grain bg-cream font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
