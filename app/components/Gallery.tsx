// src/components/Gallery.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
    "/imgs/hero-pao-de-queijo.jpg",
    "/imgs/biscoito-de-queijo.jpg",
    "/imgs/pao-de-queijo-congelado.jpg",
    "/imgs/familia-comendo.jpg",
    "/imgs/cafe-frio.jpg",
];

export default function Gallery() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <section id="gallery" className="bg-brand-redDark py-24">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-extrabold text-white text-center mb-14"
                >
                    Galeria
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 [&>*:nth-child(1)]:row-span-2">
                    {images.map((img, i) => (
                        <motion.button
                            key={img}
                            onClick={() => setSelected(img)}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            whileHover={{ scale: 1.04 }}
                            className="relative h-40 md:h-52 rounded-2xl overflow-hidden shadow-xl border border-white/10"
                        >
                            <Image src={img} alt="Galeria Dona Dete" fill loading="lazy" className="object-cover" />
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                        className="fixed inset-0 bg-black/85 z-[100] flex items-center justify-center p-4"
                    >
                        <button className="absolute top-6 right-6 text-white">
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="relative w-full max-w-2xl h-[70vh]"
                        >
                            <Image src={selected} alt="Imagem ampliada" fill className="object-contain" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
