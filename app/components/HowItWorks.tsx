// src/components/HowItWorks.tsx
"use client";
import { motion } from "framer-motion";
import { ShoppingBag, Snowflake, Flame, Heart } from "lucide-react";

const steps = [
    { icon: ShoppingBag, title: "Faça seu pedido" },
    { icon: Snowflake, title: "Receba congelado" },
    { icon: Flame, title: "Leve ao forno" },
    { icon: Heart, title: "Aproveite quentinho" },
];

export default function HowItWorks() {
    return (
        <section id="how" className="relative bg-brand-red py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_30%,white,transparent_45%)]" />
            <div className="relative max-w-5xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-extrabold text-white mb-16"
                >
                    Como Funciona
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ scale: 1.08 }}
                            className="flex flex-col items-center gap-3"
                        >
                            <div className="bg-brand-gold/20 border border-brand-gold/40 p-5 rounded-full shadow-lg">
                                <s.icon className="text-brand-gold" size={32} />
                            </div>
                            <span className="font-bold text-white">{i + 1}. {s.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
