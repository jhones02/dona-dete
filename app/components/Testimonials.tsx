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
        <section className="bg-brand-beige py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-brand-red text-center mb-12">
                    O que dizem nossos clientes
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={r}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="bg-white rounded-xl2 shadow-sm p-6"
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
