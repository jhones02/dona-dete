"use client";

import { navItems, siteConfig } from "@/lib/site";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 40);
        onScroll();

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed left-0 top-8 z-40 w-full transition-all duration-500 ${
                isScrolled
                    ? "bg-white/95 shadow-soft backdrop-blur-xl"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
                <a href="#inicio" className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-soft">
                        <Image
                            src={siteConfig.logo}
                            alt="Logo Dona Dete"
                            fill
                            priority
                            sizes="48px"
                            className="object-contain p-1"
                        />
                    </div>

                    <span
                        className={`text-lg font-black transition ${
                            isScrolled ? "text-primary" : "text-white"
                        }`}
                    >
            Dona Dete
          </span>
                </a>

                <nav className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-bold transition hover:text-brandGold ${
                                isScrolled ? "text-text" : "text-white"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href={siteConfig.whatsappUrl}
                        className="rounded-full bg-primary px-5 py-3 text-sm font-black text-white shadow-warm transition hover:-translate-y-0.5 hover:bg-primary-dark"
                    >
                        Fazer Pedido
                    </a>
                </nav>

                <button
                    type="button"
                    aria-label="Abrir menu"
                    onClick={() => setIsOpen((current) => !current)}
                    className={`rounded-full p-2 transition lg:hidden ${
                        isScrolled ? "bg-primary text-white" : "bg-white text-primary"
                    }`}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {isOpen && (
                <div className="mx-5 mb-4 rounded-3xl bg-white p-4 shadow-soft lg:hidden">
                    <div className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-2xl px-4 py-3 text-sm font-bold text-text transition hover:bg-cream hover:text-primary"
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href={siteConfig.whatsappUrl}
                            className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-black text-white transition hover:bg-primary-dark"
                        >
                            Fazer Pedido
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
