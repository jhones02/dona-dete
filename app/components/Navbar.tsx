// src/components/Navbar.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Início", href: "#hero" },
    { label: "Quem Somos", href: "#about" },
    { label: "Produtos", href: "#products" },
    { label: "Como Funciona", href: "#how" },
    { label: "Galeria", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md shadow-sm">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="flex items-center gap-2"
                >
                    <Image src="/logo.png" alt="Dona Dete" width={48} height={48} className="rounded-full" />
                    <span className="font-bold text-brand-red text-lg">Dona Dete</span>
                </motion.div>

                <ul className="hidden md:flex gap-6 text-sm font-semibold">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="hover:text-brand-red transition-colors">
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button onClick={() => setOpen(!open)} className="md:hidden">
                    {open ? <X /> : <Menu />}
                </button>
            </nav>

            {open && (
                <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="md:hidden flex flex-col gap-3 px-6 pb-4 font-semibold"
                >
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
                        </li>
                    ))}
                </motion.ul>
            )}
        </header>
    );
}
