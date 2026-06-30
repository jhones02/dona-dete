// src/components/About.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="bg-brand-cream py-20">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ y: { repeat: Infinity, duration: 4 }, opacity: { duration: 0.6 } }}
                >
                    <Image src="/imgs/mascote-dona-dete.png" alt="Mascote Dona Dete" width={220} height={220} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-extrabold text-brand-red mb-4">Quem Somos</h2>
                    <p className="text-brand-redDark/80 max-w-lg">
                        A Dona Dete nasceu com a missão de oferecer um pão de queijo
                        artesanal, produzido com carinho e ingredientes de qualidade.
                    </p>
                    <p className="text-brand-redDark/80 max-w-lg mt-3">
                        Nosso compromisso é entregar sabor, praticidade e aquele gostinho
                        de comida feita em casa.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
