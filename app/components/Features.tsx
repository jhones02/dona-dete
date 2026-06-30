// src/components/Features.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
    "Receita Mineira",
    "Ingredientes selecionados",
    "Produto congelado",
    "Fácil preparo",
    "Sabor artesanal",
    "Entrega rápida",
];

export default function Features() {
    return (
        <section className="bg-brand-beige py-20">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-brand-red text-center mb-12">
                    Nossos Diferenciais
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={f}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="bg-white rounded-xl2 shadow-sm p-5 flex items-center gap-3 hover:shadow-md transition-shadow"
                        >
                            <CheckCircle className="text-brand-gold shrink-0" />
                            <span className="font-semibold text-brand-redDark">{f}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
