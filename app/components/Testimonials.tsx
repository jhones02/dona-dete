// src/components/Testimonials.tsx
"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
    "O melhor pão de queijo da cidade.",
    "Crocante por fora e macio por dentro.",
    "Todo café da tarde aqui em casa tem Dona Dete.",
];

export default function Testimonials() {
    return (
        <section className="bg-brand-beige py-24">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-extrabold text-brand-red text-center mb-14"
                >
                    O que dizem nossos clientes
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={r}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-all"
                        >
                            <div className="flex gap-1 text-brand-gold mb-3">
                                {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                            </div>
                            <p className="text-brand-redDark/80 italic">"{r}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
