// src/components/CTA.tsx
"use client";
import { motion } from "framer-motion";
import { SOCIAL } from "@/lib/constants";

export default function CTA() {
    return (
        <section className="relative bg-gradient-to-br from-brand-red to-brand-redDark py-24 text-center text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_0%,white,transparent_50%)]" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative max-w-2xl mx-auto px-4"
            >
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                    Seu café merece um pão de queijo de verdade.
                </h2>
                <p className="mb-8 text-white/90 text-lg">Do freezer ao forno, é amor à primeira mordida!</p>
                <motion.a
                    whileHover={{ scale: 1.06 }}
                    href={SOCIAL.whatsapp}
                    target="_blank"
                    className="inline-block bg-brand-gold text-brand-redDark font-bold px-10 py-4 rounded-full shadow-2xl transition-transform text-lg"
                >
                    Peça agora pelo WhatsApp
                </motion.a>
            </motion.div>
        </section>
    );
}
