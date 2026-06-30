// src/components/Hero.tsx
"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SOCIAL } from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <section id="hero" ref={ref} className="relative overflow-hidden min-h-[90vh] flex items-center bg-brand-redDark">
            {/* Imagem de fundo com parallax */}
            <motion.div style={{ y }} className="absolute inset-0 -z-0 scale-110">
                <Image
                    src="/imgs/hero-pao-de-queijo.jpg"
                    alt="Pão de queijo quentinho Dona Dete"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-redDark/90 via-brand-redDark/60 to-transparent" />
            </motion.div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-xl"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                        Dona Dete
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold text-brand-gold mt-2">
                        O verdadeiro sabor do pão de queijo mineiro.
                    </p>
                    <p className="mt-4 text-white/85 max-w-md">
                        Produzimos pão de queijo artesanal congelado, feito com ingredientes
                        selecionados para levar sabor, tradição e praticidade até sua casa.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href={SOCIAL.whatsapp}
                            target="_blank"
                            className="bg-brand-gold hover:brightness-95 text-brand-redDark font-bold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
                        >
                            Fazer Pedido
                        </a>
                        <a
                            href={SOCIAL.instagram}
                            target="_blank"
                            className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                        >
                            <FaInstagram size={18} /> Instagram
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Indicador de scroll */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
            </motion.div>
        </section>
    );
}
