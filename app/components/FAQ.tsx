"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionReveal from "./SectionReveal";

const faqs = [
    {
        question: "Como preparar o pão de queijo?",
        answer:
            "Retire do freezer, coloque em uma forma com espaço entre eles e leve ao forno preaquecido até ficarem douradinhos."
    },
    {
        question: "O produto é congelado?",
        answer:
            "Sim. Nossos produtos são entregues congelados para preservar sabor, textura e praticidade."
    },
    {
        question: "Vocês fazem entregas?",
        answer:
            "Sim. Consulte a disponibilidade de entrega pelo WhatsApp informando seu endereço."
    },
    {
        question: "Qual o tempo de preparo?",
        answer:
            "O tempo pode variar conforme o forno, mas normalmente fica pronto em poucos minutos, quando estiver bem dourado."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="bg-white px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <SectionReveal className="mb-12 text-center">
                    <p className="mb-4 font-black uppercase tracking-[0.25em] text-primary">
                        Perguntas frequentes
                    </p>

                    <h2 className="text-balance text-4xl font-black text-text sm:text-5xl">
                        Dúvidas comuns antes do pedido.
                    </h2>
                </SectionReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <SectionReveal key={faq.question} delay={index * 0.04}>
                                <div className="overflow-hidden rounded-3xl bg-cream shadow-soft">
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                                    >
                    <span className="text-lg font-black text-text">
                      {faq.question}
                    </span>

                                        <ChevronDown
                                            className={`shrink-0 text-primary transition ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className="px-6 pb-6 leading-7 text-text/70">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            </SectionReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
