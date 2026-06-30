// src/components/Hero.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SOCIAL } from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden bg-brand-beige py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-red leading-tight">
                        Dona Dete
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold text-brand-redDark mt-2">
                        O verdadeiro sabor do pão de queijo mineiro.
                    </p>
                    <p className="mt-4 text-brand-redDark/80 max-w-md">
                        Produzimos pão de queijo artesanal congelado, feito com ingredientes
                        selecionados para levar sabor, tradição e praticidade até sua casa.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href={SOCIAL.whatsapp}
                            target="_blank"
                            className="bg-brand-red hover:bg-brand-redDark text-white font-bold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
                        >
                            Fazer Pedido
                        </a>
                        <a
                            href={SOCIAL.instagram}
                            target="_blank"
                            className="bg-brand-gold hover:brightness-95 text-brand-redDark font-bold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                        >
                            <FaInstagram size={18} /> Instagram
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-72 md:h-[420px] rounded-xl2 overflow-hidden shadow-2xl"
                >
                    <Image
                        src="/imgs/hero-pao-de-queijo.jpg"
                        alt="Pão de queijo quentinho Dona Dete"
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
