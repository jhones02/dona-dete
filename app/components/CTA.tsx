// src/components/CTA.tsx
"use client";
import { motion } from "framer-motion";
import { SOCIAL } from "@/lib/constants";

export default function CTA() {
    return (
        <section className="bg-brand-red py-20 text-center text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto px-4"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                    Seu café merece um pão de queijo de verdade.
                </h2>
                <p className="mb-8 text-white/90">Do freezer ao forno, é amor à primeira mordida!</p>
                <a
                    href={SOCIAL.whatsapp}
                    target="_blank"
                    className="inline-block bg-brand-gold text-brand-redDark font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform text-lg"
                >
                    Peça agora pelo WhatsApp
                </a>
            </motion.div>
        </section>
    );
}
