"use client";

import { siteConfig } from "@/lib/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

    return (
        <section
            id="inicio"
            ref={ref}
            className="relative flex min-h-screen items-center overflow-hidden bg-text pt-28"
        >
            <motion.div style={{ y: imageY }} className="absolute inset-0">
                <Image
                    src={siteConfig.heroImage}
                    alt="Pão de queijo quentinho Dona Dete"
                    fill
                    priority
                    sizes="100vw"
                    className="scale-110 object-cover"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />
            <div className="absolute inset-0 noise opacity-20" />

            <motion.div
                style={{ y: textY }}
                className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
            >
                <div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="mb-8 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-white shadow-warm"
                    >
                        <Image
                            src={siteConfig.logo}
                            alt="Logo Dona Dete"
                            width={88}
                            height={88}
                            priority
                            className="object-contain"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-4 inline-flex rounded-full bg-brandGold px-5 py-2 text-sm font-black uppercase tracking-wide text-text"
                    >
                        Tradição mineira no seu forno
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 34 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.08 }}
                        className="max-w-3xl text-balance text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl"
                    >
                        Dona Dete
                        <span className="block text-brandGold">
              O verdadeiro sabor do pão de queijo mineiro.
            </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 34 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.16 }}
                        className="mt-7 max-w-2xl text-lg font-bold leading-8 text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)]"
                    >
                        Produzimos pão de queijo artesanal congelado, feito com ingredientes
                        selecionados para levar sabor, tradição e praticidade até sua casa.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 34 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.24 }}
                        className="mt-9 flex flex-col gap-4 sm:flex-row"
                    >
                        <a
                            href={siteConfig.whatsappUrl}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-black text-white shadow-warm transition hover:-translate-y-1 hover:bg-primary-dark"
                        >
                            <MessageCircle size={21} />
                            Fazer Pedido
                        </a>

                        <a
                            href={siteConfig.instagramUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-brandGold px-8 py-4 text-base font-black text-text shadow-soft transition hover:-translate-y-1 hover:bg-bg-light"
                        >
                            <Instagram size={21} />
                            Instagram
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
