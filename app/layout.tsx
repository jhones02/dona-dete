// src/app/layout.tsx
import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";

const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo", weight: ["400","500","600","700","800"] });

export const metadata: Metadata = {
    title: "Dona Dete | Pão de Queijo Artesanal",
    description:
        "Pão de queijo artesanal congelado, feito com ingredientes selecionados. Faça seu pedido e experimente o verdadeiro sabor mineiro.",
    openGraph: {
        title: "Dona Dete | Pão de Queijo Artesanal",
        description:
            "Pão de queijo artesanal congelado, feito com ingredientes selecionados.",
        images: ["/og-image.jpg"],
        locale: "pt_BR",
        type: "website",
    },
    icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={baloo.variable}>
        <body className="bg-brand-cream text-brand-redDark font-sans scroll-smooth antialiased">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
        </body>
        </html>
    );
}
