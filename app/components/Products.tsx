// src/components/Products.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SOCIAL } from "@/lib/constants";

const items = [
    {
        title: "Pão de Queijo Congelado",
        desc: "Crocante por fora, macio por dentro. Do freezer ao forno, é amor à primeira mordida.",
        img: "/imgs/pao-de-queijo-congelado.jpg",
        cta: "Quero Comprar",
        href: SOCIAL.whatsapp,
    },
    {
        title: "Biscoito de Queijo",
        desc: "Crocante, feito com queijo de alta qualidade e sabor irresistível.",
        img: "/imgs/biscoito-de-queijo.jpg",
        cta: "Saiba Mais",
        href: SOCIAL.whatsapp,
    },
];

export default function Products() {
    return (
        <section id="products" className="bg-brand-cream py-24">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-extrabold text-brand-red text-center mb-14"
                >
                    Nossos Produtos
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <motion.div
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                            <div className="p-7">
                                <h3 className="text-xl font-bold text-brand-red mb-2">{item.title}</h3>
                                <p className="text-brand-redDark/80 text-sm mb-5">{item.desc}</p>
                                <a
                                    href={item.href}
                                    target="_blank"
                                    className="inline-block bg-brand-red text-white font-semibold px-6 py-2.5 rounded-full hover:bg-brand-redDark transition-colors"
                                >
                                    {item.cta}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
