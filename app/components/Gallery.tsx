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
        <section id="gallery" className="bg-brand-cream py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-brand-red text-center mb-12">Galeria</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 [&>*:nth-child(1)]:row-span-2">
                    {images.map((img) => (
                        <motion.button
                            key={img}
                            onClick={() => setSelected(img)}
                            whileHover={{ scale: 1.03 }}
                            className="relative h-40 md:h-52 rounded-xl2 overflow-hidden shadow-md"
                        >
                            <Image src={img} alt="Galeria Dona Dete" fill loading="lazy" className="object-cover" />
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
                        className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
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
