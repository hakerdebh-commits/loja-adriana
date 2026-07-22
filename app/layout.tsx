import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adriana Palhares Acessórios | Jataí — GO",
  description: "Semijoias, bolsas de grife, perfumes originais e acessórios. Loja em Jataí com envios para todo o Brasil.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
