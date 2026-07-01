import { siteConfig } from "@/lib/site";
import Image from "next/image";
import SectionReveal from "./SectionReveal";

export default function About() {
    return (
        <section id="quem-somos" className="bg-cream px-5 py-24 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                <SectionReveal>
                    <div className="relative mx-auto w-full max-w-2xl">
                        <div className="absolute -inset-5 rounded-5xl bg-brandGold/30 blur-2xl" />

                        <div className="relative overflow-hidden rounded-5xl bg-white p-4 shadow-soft">
                            <Image
                                src={siteConfig.mascot}
                                alt="Mascote Dona Dete"
                                width={900}
                                height={900}
                                sizes="(max-width: 768px) 100vw, 672px"
                                className="mx-auto h-auto w-full object-contain"
                            />
                        </div>
                    </div>
                </SectionReveal>

                <SectionReveal delay={0.1}>
                    <p className="mb-4 font-black uppercase tracking-[0.25em] text-primary">
                        Quem somos
                    </p>

                    <h2 className="text-balance text-4xl font-black leading-tight text-text sm:text-5xl">
                        Carinho de casa, sabor de Minas e praticidade para o dia a dia.
                    </h2>

                    <div className="mt-7 space-y-5 text-lg leading-8 text-text/75">
                        <p>
                            A Dona Dete nasceu com a missão de oferecer um pão de queijo
                            artesanal, produzido com carinho e ingredientes de qualidade.
                        </p>

                        <p>
                            Nosso compromisso é entregar sabor, praticidade e aquele gostinho
                            de comida feita em casa.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {["Artesanal", "Mineiro", "Congelado"].map((item) => (
                            <div
                                key={item}
                                className="rounded-3xl bg-white px-5 py-4 text-center font-black text-primary shadow-soft"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}
