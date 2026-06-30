// src/components/FAQ.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    { q: "Como preparar o pão de queijo?", a: "Leve direto do freezer ao forno preaquecido, sem precisar descongelar, até dourar." },
    { q: "O produto é congelado?", a: "Sim! Mantemos congelado para preservar o sabor e a qualidade até chegar à sua mesa." },
    { q: "Vocês fazem entregas?", a: "Sim, entregamos. Entre em contato pelo WhatsApp para verificar sua região." },
    { q: "Qual o tempo de preparo?", a: "Em média 20 a 25 minutos no forno, dependendo da quantidade." },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="bg-brand-cream py-24">
            <div className="max-w-3xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-extrabold text-brand-red text-center mb-14"
                >
                    Perguntas Frequentes
                </motion.h2>
                <div className="flex flex-col gap-4">
                    {faqs.map((f, i) => (
                        <motion.div
                            key={f.q}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-white rounded-2xl shadow-sm border border-brand-gold/20 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex justify-between items-center p-5 font-semibold text-brand-redDark"
                            >
                                {f.q}
                                <ChevronDown className={`transition-transform ${open === i ? "rotate-180 text-brand-red" : ""}`} />
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-5 pb-5 text-brand-redDark/70 text-sm"
                                    >
                                        {f.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
