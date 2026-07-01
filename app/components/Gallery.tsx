"use client";

import { galleryImages } from "@/lib/site";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import SectionReveal from "./SectionReveal";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="galeria" className="bg-white px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionReveal className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-4 font-black uppercase tracking-[0.25em] text-primary">
                        Galeria
                    </p>

                    <h2 className="text-balance text-4xl font-black text-text sm:text-5xl">
                        Um pouquinho do sabor que espera por você.
                    </h2>
                </SectionReveal>

                <div className="masonry">
                    {galleryImages.map((image, index) => (
                        <button
                            key={image}
                            type="button"
                            onClick={() => setSelectedImage(image)}
                            className="masonry-item group relative w-full overflow-hidden rounded-[2rem] bg-cream shadow-soft"
                            aria-label={`Abrir imagem ${index + 1}`}
                        >
                            <Image
                                src={image}
                                alt={`Galeria Dona Dete ${index + 1}`}
                                width={700}
                                height={index % 2 === 0 ? 880 : 620}
                                loading="lazy"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-primary/0 transition group-hover:bg-primary/20" />
                        </button>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        type="button"
                        aria-label="Fechar imagem"
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-5 top-5 rounded-full bg-white p-3 text-primary shadow-soft"
                    >
                        <X size={24} />
                    </button>

                    <div
                        className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-5xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Imagem em destaque Dona Dete"
                            fill
                            sizes="90vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
