import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adriana Palhares Acessórios | Jataí — GO",
  description: "Semijoias, bolsas de grife, perfumes originais e acessórios. Loja em Jataí com envios para todo o Brasil.",
  metadataBase: new URL("https://adriana-palhares-acessorios.htxzhxhskc.chatgpt.site"),
  openGraph: {
    title: "Adriana Palhares Acessórios",
    description: "Perfumes originais e acessórios selecionados. Enviamos para todo o Brasil.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
