import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const nunito = Nunito({
    subsets: ["latin"],
    variable: "--font-site",
    display: "swap"
});

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    metadataBase: new URL("https://donadete.com.br"),
    icons: {
        icon: "/favicon.ico"
    },
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        type: "website",
        locale: "pt_BR",
        url: "https://donadete.com.br",
        siteName: siteConfig.name,
        images: [
            {
                url: "/images/hero-pao-de-queijo.jpg",
                width: 1200,
                height: 630,
                alt: "Pão de queijo artesanal Dona Dete"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: ["/images/hero-pao-de-queijo.jpg"]
    }
};

export const viewport: Viewport = {
    themeColor: "#B71C1C",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={nunito.variable}>
        <body>{children}</body>
        </html>
    );
}
