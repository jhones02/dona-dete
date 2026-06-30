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
        <section id="how" className="bg-brand-cream py-20">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-extrabold text-brand-red mb-12">Como Funciona</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="flex flex-col items-center gap-3"
                        >
                            <div className="bg-brand-gold/20 p-4 rounded-full">
                                <s.icon className="text-brand-red" size={32} />
                            </div>
                            <span className="font-bold text-brand-redDark">{i + 1}. {s.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
