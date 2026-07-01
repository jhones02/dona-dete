import { Flame, PackageCheck, ShoppingBag, Smile } from "lucide-react";
import SectionReveal from "./SectionReveal";

const steps = [
    {
        icon: ShoppingBag,
        title: "Faça seu pedido",
        text: "Chame no WhatsApp e escolha seus produtos."
    },
    {
        icon: PackageCheck,
        title: "Receba congelado",
        text: "Produto embalado com cuidado para conservar o sabor."
    },
    {
        icon: Flame,
        title: "Leve ao forno",
        text: "Prepare em poucos minutos, sem complicação."
    },
    {
        icon: Smile,
        title: "Aproveite quentinho",
        text: "Sirva crocante por fora e macio por dentro."
    }
];

export default function HowItWorks() {
    return (
        <section className="bg-bg-light px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionReveal className="mx-auto mb-16 max-w-2xl text-center">
                    <p className="mb-4 font-black uppercase tracking-[0.25em] text-primary">
                        Como funciona
                    </p>

                    <h2 className="text-balance text-4xl font-black text-text sm:text-5xl">
                        Simples, prático e delicioso.
                    </h2>
                </SectionReveal>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <SectionReveal key={step.title} delay={index * 0.08}>
                                <div className="relative h-full rounded-5xl bg-white p-7 shadow-soft">
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary text-white">
                                        <Icon size={30} />
                                    </div>

                                    <span className="absolute right-7 top-7 text-4xl font-black text-brandGold/45">
                    {index + 1}
                  </span>

                                    <h3 className="text-xl font-black text-primary">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-text/70">{step.text}</p>
                                </div>
                            </SectionReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
