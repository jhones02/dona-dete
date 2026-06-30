// src/components/About.tsx
"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

    return (
        <section id="about" ref={ref} className="relative bg-brand-redDark py-24 overflow-hidden">
            {/* Textura decorativa de fundo */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />

            <div className="relative max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                <motion.div
                    style={{ y }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-sm rounded-full p-6 shadow-2xl"
                >
                    <Image src="/imgs/mascote-dona-dete.png" alt="Mascote Dona Dete" width={220} height={220} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-extrabold text-brand-gold mb-4">Quem Somos</h2>
                    <p className="text-white/85 max-w-lg">
                        A Dona Dete nasceu com a missão de oferecer um pão de queijo
                        artesanal, produzido com carinho e ingredientes de qualidade.
                    </p>
                    <p className="text-white/85 max-w-lg mt-3">
                        Nosso compromisso é entregar sabor, praticidade e aquele gostinho
                        de comida feita em casa.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
